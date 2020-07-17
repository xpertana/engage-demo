import React, { Component } from "react"
import ReactDOM from "react-dom"

import { TEST } from "@xpertana/engage-environments"
import lsDriver from "@xpertana/engage-driver-ls-idb"
//import SoundFx from "../../../drivers/soundfx";
import BASECOLORS from "./lib/BASECOLORS"
import UIfx from "./lib/UIfx"

import Body from "./elements/Body"
import Screen from "./elements/Screen"
import Header from "./elements/Header"
import Footer from "./elements/Footer"
import Banner from "./elements/Banner"
import Splash from "./elements/Splash"
import Icon from "./ui/icons/IconA"
import CmdInput from "./CmdInput"
import renderElement from "./src/renderElement"
import tinycolor from "tinycolor2"
import hex2color from "./lib/color2hex"

import EngageCore from "@xpertana/engage-core"
console.log("EC:")
console.log(EngageCore)
const engageDisplayExec = require("@xpertana/engage-display-commands-exec")
const engageDisplayParse = require("@xpertana/engage-display-commands-parse")
const engageCoreParse = require("@xpertana/engage-core-commands-parse")

export default class EngageClient extends Component {
  constructor(props) {
    super(props)

    const { tokens, site, ctx, stage, n, i } = props

    this.E = new EngageCore({
      parentHook: props.parentHook,
      ctx,
      idblok: props.idblok,
      autorun: props.flow,
      lsDriver,
      site,
      stage,
      tokens,
      endpoints: TEST,
      refreshUI: this.refreshUI.bind(this),
      mode: "display",
    })

    // commands for a display client
    this.E.extend(engageDisplayExec)
    this.E.extend(engageDisplayParse)
    this.E.extend(engageCoreParse)

    this.renderElement = renderElement

    this.state = {
      coreReady: false,
      cmdHistory: [],
      textOutput: this.E.getTextOutput(),
      debug: this.E.getDebug(),
      UI: this.E.getUI(),
      //output: this.E.getOutput(),
      corestate: this.E.getState(),
      theme: this.E.getTheme(),
      CTX: {},
    }

    this.UIfx = UIfx
    console.log(`Engage Client v${this.E.version()} Initialized`)
  }

  async mainHandler(args) {
    console.log("******* MAIN handler *******")
    console.log(args)
    //if (this.E.soundDriver) this.E.soundDriver.play("click");
    const {
      index,
      target,
      item,
      _parent,
      _index,
      action,
      ctxout,
      error,
      directives,
      returnCtx,
      setctx,
      hides,
    } = args

    if (setctx) {
      const name = setctx.name || "_lv"
      this.E.CTX.settype(name, setctx.type, setctx.value)
      this.E.proceed()
      await this.E.evaluate()
    }

    // special item fields can drive automatic behavoir.
    // most often used as a menu jump table:
    // _go --> will go to the flow
    // _run --> will run the flow
    // _jump ---> will jump to the label

    // in addition we look for a field in item named type...
    // if we have it, this is set with the itemvalue;
    if (item) {
      if (item._go) {
        const itemname = item.type || "item"
        await this.E.CTX.set(itemname, item)
        await this.E.execDirectives([[7, { "40": 1, flow: item._go }]])
        await this.E.evaluate()
        this.setState({ output: this.E.getOutput() })
        return
      } else if (item._run) {
        await this.E.execDirectives([[50, { "40": 1, flow: item._run }]])
        await this.E.evaluate()
        this.setState({ output: this.E.getOutput() })
        return
      } else if (item._jump) {
        const itemname = item.type || "item"
        await this.E.CTX.set(itemname, item)
        this.E.proceed()
        await this.E.execDirectives([[9, 1, item._jump]])
        await this.E.evaluate()
        this.setState({ output: this.E.getOutput() })
        return
      }
    }

    // if we have an index, set it!
    if (index) {
      this.E.CTX.set("INDEX", index + 1) // 1 base not 0!
      console.log(`index is ${index}`)
    }

    switch (action) {
      case "moveup":
        console.log("MOVEUP!")
        this.E.CTX.groupMoveUp(_parent, _index)
        this.E.state.resume = true // moves past wait if needed
        this.E.proceed()
        await this.E.evaluate()
        return

      case "movedown":
        console.log("MOVEDOWN!")
        this.E.CTX.groupMoveDown(_parent, _index)
        this.E.state.resume = true // moves past wait if needed
        this.E.proceed()
        await this.E.evaluate()
        return

      case "select":
        console.log("mainhandler select")
        //const ctxName = item._ctx || "input";
        const ctxName = returnCtx || "input"
        // lets delete behavorial only props
        delete item._hide
        delete item._hideparent
        delete item._ctx
        delete item._ctxgrp
        delete item._count
        this.E.CTX.set(ctxName, item)
        this.E.proceed()
        await this.E.evaluate()
        console.log("after main handler select: evaluate was run....")
        this.setState({ output: this.E.getOutput() })

        return
      case "delete":
        console.log(`command to delete ${_index} from ${_parent}`)
        this.E.CTX.groupRemove(_parent, _index)
        this.E.state.resume = true // moves past wait if needed
        this.E.proceed()
        await this.E.evaluate()
        return
      case "increment":
        console.log("mainhandler increment")
        if (!target || this.E.CTX.CTX[target].cv.v) return `cannot increment`
        this.E.CTX.CTX[target].cv.v.count++
        break
      case "decrement":
        console.log("decrement")
        if (!target || !this.E.CTX.CTX[target]) return `cannot increment`
        this.E.CTX.CTX[target].cv.v.count++
        break
      case "action":
        console.log("action")
        break
      default:
    }

    // we handled directives FIRST. This is importtant because we could be on a screen
    // with a action/home/back nav button that is persistant WHILE an ask/choose sequence is going
    // on on the flow. We need to execute the directive and return OR we will not have a ctxout and
    // may screw things up...

    if (directives) {
      this.E.proceed() // clears any break/halt flags
      console.log(`execute direcives`)
      console.log(directives)
      await this.E.execDirectives(directives)
      await this.E.evaluate()
      this.setState({ output: this.E.getOutput() })
      return
    }

    if (ctxout) {
      const keys = Object.keys(ctxout)
      console.log(keys)
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i]
        this.E.CTX.set(k, ctxout[k])
        //this.E.removeWaiting(k);
      }
      this.E.proceed()
      await this.E.evaluate()
    }

    //this.setState({ lastaction: action });
  }

  stylelize(obj) {
    if (obj.color && obj.color[0] !== "#") obj.color = BASECOLORS[obj.color]
    if (obj.backgroundColor && obj.backgroundColor[0] !== "#")
      obj.backgroundColor = BASECOLORS[obj.backgroundColor]
    return obj
  }

  // execDirectives(dir) {
  //   console.log(`engage client: would exec directives`);
  // }

  fleval = async flcmds => {
    // PROCESS WITH ENGAGE
    await this.E.fleval(flcmds)

    this.setState({
      textOutput: this.E.getTextOutput(),
      debug: this.E.getDebug(),
      UI: this.E.getUI(),
      theme: this.E.getTheme(),
    })
  }

  engageInput = async input => {
    // PROCESS WITH ENGAGE

    console.log("ui state before")
    console.log(this.E.UI.state)
    await this.E.input(input)
    console.log("ui state after")
    console.log(this.E.UI.state)

    this.setState({
      stripe: null,
      audioready: null,
      textOutput: this.E.getTextOutput(),
      debug: this.E.getDebug(),
      UI: this.E.getUI(),
      theme: this.E.getTheme(),
    })

    //console.log("after:");
    //console.log(this.state.theme.screen);
  }

  refreshUI() {
    this.setState({ UI: this.E.getUI() })
  }

  render() {
    if (!this.state.coreReady) return <Splash />
    if (this.props.hide) return <div />

    const activeSite =
      this.E.state.siteadmin && this.E.state.siteadmin.targetsite
        ? this.E.state.siteadmin.targetsite
        : "---none---"

    // banner and footer color - if not explictly specified - will take a cue
    //from the header color2 IF SET!
    if (this.state.UI.bannerOn && !this.state.UI.banner.color2) {
      const headerColor = this.state.UI.header.color2 || "gray7"
      const bcolor = tinycolor(hex2color(headerColor)).lighten(10).toString()
      this.state.UI.banner.color2 = bcolor
    }
    if (this.state.UI.footerOn && !this.state.UI.footer.color2) {
      const headerColor = this.state.UI.header.color2 || "gray7"
      const bcolor = tinycolor(hex2color(headerColor)).lighten(10).toString()
      this.state.UI.footer.color2 = bcolor
    }

    return (
      <div class="h-screen">
        {/* <basefont
          face="arial, verdana, sans-serif"
          size="2"
          color="#ff0000"
        ></basefont> */}

        <Screen
          className="relative h-screen flex flex-col justify-between"
          args={this.state.UI.screen}
        >
          {this.state.UI.bannerOn && (
            <div
              style={{
                width: "100%",
                top: "auto",
                fontSize: "1.0em",
                // position: "fixed",
                top: this.state.UI.headerOn ? 40 : 0,
              }}
            >
              <Banner
                // theme={this.state.theme.banner}
                handler={this.mainHandler.bind(this)}
                args={this.state.UI.banner}
              />
            </div>
          )}
          {this.state.UI.headerOn && (
            <div
              style={{
                width: "100%",
                top: "auto",
                fontSize: "1.2em",
                position: "fixed",
                // top: 48
              }}
            >
              <Header
                handler={this.mainHandler.bind(this)}
                // theme={this.state.theme.header}
                args={{
                  show: this.state.UI.headerOn,
                  // ...this.stylelize(this.state.UI.header)
                  ...this.state.UI.header,
                }}
              />
            </div>
          )}

          <div class={`${this.state.UI.headerOn ? "mt-16  " : ""}`}>
            <Body
              header={this.state.UI.headerOn}
              banner={this.state.UI.bannerOn}
              footer={this.state.UI.footerOn}
            >
              {this.renderUI()}
              <div className="mx-12">{this.showDebug()}</div>

              <div
                style={{ float: "left", clear: "both" }}
                ref={el => {
                  this.messagesEnd = el
                }}
              />
            </Body>
          </div>

          {/* <EngageFooter handler={this.mainHandler.bind(this)} /> */}
          {this.state.UI.footerOn && (
            <Footer
              handler={this.mainHandler.bind(this)}
              args={this.state.UI.footer}
            />
          )}
        </Screen>

        <div
          style={{
            top: "auto",
            fontSize: "1.2em",
            position: "fixed",
            bottom: 0,
          }}
          className="bg-blue-800 text-white w-full flex flex-inline justify-between items-center"
        >
          <a onClick={async () => await this.engageInput(`/launch _home`)}>
            <span class="px-2">
              <Icon icon="home" size={18} color="white" />
            </span>
          </a>
          <span class="flex-1 px-1">
            <CmdInput
              prompt={`${activeSite} ${this.E.state.site}/${this.E.state.stage}: ${this.E.state.t} klen: ${this.E.state.k.length}`}
              handler={this.engageInput.bind(this)}
            />
          </span>
          <a
            onClick={async () =>
              await this.fleval([
                "/clear",
                "/screen default",
                "/header off",
                "/footer off",
                "/banner off",
              ])
            }
          >
            <i class="far fa-eraser px-1"></i>
          </a>

          <a onClick={async () => await this.engageInput(`/go _pr`)}>
            <i class="far fa-user px-1"></i>
          </a>
          <a onClick={async () => await this.engageInput(`/go _pr`)}>
            <i class="fas fa-caret-square-up px-2"></i>
          </a>
        </div>
      </div>
    )
  }

  showTextOutput() {
    const output = []
    const debug = this.state.textOutput
    debug.map(d => {
      const lines = d.split("\n")
      lines.forEach(l => output.push(<div>{l}</div>))
    })
    return output
  }

  showDebug() {
    const output = []
    const debug = this.state.debug
    debug.map(d => {
      const lines = d.split("\n")
      lines.forEach(l =>
        output.push(
          <div
            style={{ fontFamily: "monospace" }}
            className="text-gray-400 text-xs"
          >
            {l}
          </div>
        )
      )
    })
    return output
  }

  // componentDidMount() {
  //   if (window.Stripe) {
  //     this.setState({
  //       stripe: window.Stripe("pk_test_faHG1lyJTWzbo29aItS5yrCg")
  //     });
  //   } else {
  //     document.querySelector("#stripe-js").addEventListener("load", () => {
  //       // Create Stripe instance once Stripe.js loads
  //       this.setState({ stripe: window.Stripe("pk_test_12345") });
  //     });
  //   }
  // }

  // SCROLL TO BOTTOM START
  async componentDidMount() {
    console.log(`Engage React Client component did mount!`)

    // Sound Effects - remove for now
    //this.soundfx = new SoundFx();
    //this.E.soundDriver = this.soundfx;

    // initialize core!
    let R = await this.E.initialize()
    console.log(R)
    // load localFlows (optional)
    R = await this.E.loadLocalFlows()
    console.log(R)

    // if (this.state.coreReady) this.scrollToBottom();
    // if we got an autorun flow we need to "kick it " to start
    // at this point we've instantiated the EngageClientCore and the autorun flow has
    // run. if this is the case we need to get the initial UI..
    //if (this.props.flow) {
    await this.E.devcmds.start()
    await this.E.evaluate()
    this.setState({
      audioready: true,
      debug: this.E.getDebug(),
      UI: this.E.getUI(),
      // theme: this.E.getTheme(),
      coreReady: true,
    })
  }

  async componentDidUpdate() {
    // if (this.state.coreReady) this.scrollToBottom();
  }

  scrollToBottom = () => {
    const node = ReactDOM.findDOMNode(this.messagesEnd)
    node.scrollIntoView({ behavior: "smooth" })
  }

  // SCROLL TO BOTTOM END
  renderUI() {
    console.log("re render ui")
    const UI = this.state.UI.output
    const cc = this.state.UI.clearcount
    if (UI.length === 0) return <div />
    return UI.map((el, i) =>
      !el.hidden ? this.renderElement(el, `${cc}${i}`) : <div></div>
    )
  }
}
