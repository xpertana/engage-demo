import React, { Component } from "react"

import InputA from "../ui/inputs/InputA"
import InputB from "../ui/inputs/InputB"
// import InputC from "../ui/inputs/InputC";
import { capitalize } from "lodash"

const VARIANTS = {
  a: props => <InputA {...props} />,
  b: props => <InputB {...props} />,
}

export default class InputElement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
      value: this.props.args.value,
    }
  }

  _handleKeyPress = e => {
    // console.log(`${e.key} - ${e.keyCode}`);
    if (e.key == "Enter") {
      const { value } = e.target

      // supress sending of blank lines!
      if (value === "") return

      console.log("IN INPUT")
      console.log(this.props.args)

      const returnCtx = this.props.args.returnCtx || "input"

      const ctxout = {}
      ctxout[returnCtx] = value
      console.log(`in Input -enter...`)
      console.log(ctxout)

      const data = {
        returnCtx,
        ctxout,
      }
      this.props.handler(data)
      this.setState({ value: "" })
      if (this.props.args.hide) this.hide()
    }
  }

  submitValue() {
    const value = this.state.value
    const ctxout = {}
    ctxout[this.props.args.returnCtx] = value
    this.props.handler({ ctxout })
    this.hide()
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({ value })
  }

  hide() {
    this.setState({ hidden: true })
  }

  handler(data) {
    console.log(`here in handler...`)
    console.log(data)
    this.props.handler(data)
  }

  handleClick() {
    if (this.props.args.hideafterclick) this.hide()
  }

  displayName(text) {
    let parts = text.split("-")
    parts = parts.map(p => capitalize(p))
    return parts.join(" ")
  }

  render() {
    if (this.state.hidden) return <div></div>

    const { variant = "a" } = this.props.args

    if (this.props.args.text) this.props.args.placeholder = this.props.args.text
    if (this.props.args.title)
      this.props.args.placeholder = this.props.args.title

    // return <div>{JSON.stringify(this.props)}</div>;

    const props = {
      theme: this.props.theme,
      onKeyPress: this._handleKeyPress.bind(this),
      onChange: this.handleChange.bind(this),
      args: this.props.args,
      value: this.state.value,
    }
    // return <div>INPUT</div>;

    return VARIANTS.a(props)

    // return <Card hidden={this.state.hidden}>{this.renderUI()}</Card>;
  }
}
