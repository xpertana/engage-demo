import React, { Component } from "react";
import stylelize from "../stylelize";
// import { MessageSquare } from "react-feather";

export default class ChatInput extends Component {
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
      prompt,
      placeholder = "chat input...",
      enterbutton,
      icon,
      size = "medium",
      mask,
      textbox
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
        className={`flex justify-between items-center bg-gray-400 my-1 rounded mx-4`}
      >
        <div className="bg-gray-400 text-gray-600 px-2 text-center">
          {/* <MessageSquare size={iconSize} /> */}
        </div>

        <div className={`flex-2 w-full`}>
          <input
            className={`p-2 w-full`}
            autoFocus={true}
            size={60}
            style={{ outline: "none", fontSize }}
            placeholder={placeholder}
            type="text"
            onKeyPress={this._handleKeyPress}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </div>

        <div
          style={{ fontSize: enterSize }}
          className="bg-gray-400 text-gray-600 uppercase w-24 text-center font-semibold rounded-r"
          onClick={() => this.submitValue()}
        >
          Send
        </div>
      </div>
    );
  }
}
