import React, { Component } from "react";
import stylelize from "../stylelize";

import { MessageSquare } from "react-feather";

export default class ChatOutput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: props.hidden,
      value: props.args.initialValue || ""
    };
  }

  hide() {
    this.setState({ hidden: true });
  }

  _handleKeyPress = e => {
    // console.log(`${e.key} - ${e.keyCode}`);
    if (e.key == "Enter") {
      const { value } = e.target;

      // supress sending of blank lines!
      if (value === "") return;

      const ctxout = {};
      ctxout[this.props.returnCtx] = value;
      this.props.handler({ ctxout });
      this.setState({ value: "" });
      if (!this.props.args.stay) this.hide();
    }
  };

  submitValue() {
    const value = this.state.value;
    const ctxout = {};
    ctxout[this.props.returnCtx] = value;
    this.props.handler({ ctxout });
    this.hide();
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {
    if (this.state.hidden) return <div />;
    const {
      size = "medium",
      text = "this would be chat output"
    } = this.props.args;

    const sizeMap = {
      medium: {
        ct: "bg-gray-500",
        fontSize: 12,
        iconSize: 22,
        enterSize: 12
      },
      small: {
        ct: "bg-gray-200",
        fontSize: 14,
        iconSize: 20,
        enterSize: 10
      },
      large: {
        ct: "bg-gray-700",
        fontSize: 24,
        iconSize: 32,
        enterSize: 10
      }
    };

    const { ct, fontSize, iconSize, enterSize } = sizeMap[size];
    return (
      <div
        className={`flex justify-between rounded items-center bg-blue-100 my-1 mx-4`}
      >
        <div style={{ fontSize }} className={`p-1 flex-1 w-full text-right`}>
          {text}
        </div>

        <div className="bg-blue-400 rounded-r py-1 px-2 text-center">
          <MessageSquare size={iconSize} color="blue" />
        </div>
      </div>
    );
  }
}
