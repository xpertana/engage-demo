const NRE = require("named-js-regexp");
const LINE = NRE("^(:<first>\\S+).*(:<ctxref>{\\S+})");
const TEXT = NRE(`(:<text>('|").*("|'))`, "g");
const COMMENT = NRE("^//.*");
const MARKLINE = NRE("^(:<label>[_a-zA-Z]+):$");
const RESERVEDWORDS = NRE(" (:<resword>(to|new|into|using)) ");

import React, { Component } from "react";

import { flops } from "@xpertana/engage-flowbuild";
import highlight from "./highlightFluent";

const lineMark = {
  comment: <div class="text-center text-gray-400">#</div>,
  new: <div class="text-center text-gray-400">○</div>,
  //ok: <div class="text-center text-green-400">●</div>,
  ok: <div class="text-center text-gray-200">●</div>,
  error: <div class="text-center text-red-400">●</div>
};

const FLOPS = {};
flops.forEach(f => (FLOPS[f.value] = f));

import Editor from "react-simple-code-editor";
//import { highlight, languages } from "prismjs/components/prism-core";
//import "prismjs/components/prism-clike";
//import "prismjs/components/prism-javascript";

export default class FluentEditor extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      hidden: false,
      flow: props.args.flow,
      source: props.args.flow.flow.source
    };
  }

  onChange(source) {
    console.log("change", source);
    const ctxout = {};
    // we return the same flow obj we got itn;
    const flowOut = this.props.args.flow;
    flowOut.source = source;
    flowOut.status = "modified";
    ctxout[this.props.args.flow.flow.n] = flowOut;
    this.props.handler({ ctxout });
    this.setState({ source });
  }

  // highlight(string) {
  //   const lines = string.split("\n");
  //   const LINES = lines.map(l => {
  //     // mark line?
  //     let R;
  //     if ((R = MARKLINE.exec(l)))
  //       return [<span class="text-blue-800 bg-blue-200">{l}</span>, <br />];
  //     if ((R = COMMENT.exec(l)))
  //       return [<span class="text-gray-400">{l}</span>, <br />];
  //     // const R = LINE.exec(l);
  //     const [first, ...rest] = l.split(" ");
  //     const REST = rest.join(" ");

  //     const RET = [
  //       <span class="text-red-400">{first}</span>,
  //       <span> </span>,
  //       <span>{rest}</span>,
  //       <br />
  //     ];
  //     return RET;
  //   });

  //   return LINES;
  // }

  lineMarks() {
    const lines = this.state.source.split("\n");

    //if the flow state is new or modified we mark the lines as unknown
    const flowStatus = this.props.args.flow.status;
    if (flowStatus === "new" || flowStatus === "modified")
      return lines.map(l => lineMark.new);
    if (flowStatus === "ready") return lines.map(l => lineMark.ok);
    else {
      const errors = this.props.args.flow.errors;
      const errorLines = {};
      errors.forEach(e => {
        errorLines[e.row] = true;
      });

      return lines.map((l, i) =>
        errorLines[i] ? lineMark.error : lineMark.ok
      );
    }
  }

  listErrors() {
    const errors = this.props.args.flow.errors;
    if (!errors) return <div></div>;
    let output = [];
    return errors.map(e => (
      <div class="text-xs">
        {e.row} : {e.text}
      </div>
    ));
  }

  statusBar() {
    const flowStatus = this.props.args.flow.status;
    switch (flowStatus) {
      case "ready":
        return (
          <div class="text-center w-full flex-1 text-green-900 bg-green-100">
            READY TO RUN
          </div>
        );
      case "error":
        return (
          <div class="text-center w-full text-red-900 bg-red-100">
            BUILD ERROR
          </div>
        );
      default:
        return (
          <div class="text-center w-full text-gray-900 bg-gray-200">
            {flowStatus}
          </div>
        );
    }
  }

  render() {
    if (!this.props.args.flow) return <div>NO FLOW!?</div>;
    return (
      <div class="my-2 flex flex-col justify-between rounded items-center">
        <div class="w-full text-gray-500 bg-gray-300 px-6">
          {this.props.args.flow.flow.n}
        </div>

        <div class="w-full flex flex-between border">
          <div class="w-6 bg-gray-100">{this.lineMarks()}</div>
          <div class="flex-1">
            <div class="bg-white px-2 max-w-7xl">
              <Editor
                value={this.state.source}
                onValueChange={source => this.onChange(source)}
                highlight={source => highlight(source)}
                //highlight={source => source}
                padding={2}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 16,
                  border: "none"
                }}
              />
            </div>
          </div>
          {/* {JSON.stringify(this.state.flow)} */}
        </div>
        {this.statusBar()}
        {this.listErrors()}
      </div>
    );
  }
}
