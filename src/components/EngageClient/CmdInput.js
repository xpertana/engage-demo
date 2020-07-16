import React, { Component } from "react";
//import { Input } from "reactstrap";
//import Turn from "../components/Turn";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      cursor: 0,
      history: []
    };
  }

  handleKeyDown(e) {
    if (e.key === "ArrowUp" && this.state.history.length > 0) {
      const newCursor =
        this.state.cursor === 0
          ? this.state.history.length
          : this.state.cursor - 1;
      this.setState({
        value: this.state.history[newCursor],
        cursor: newCursor
      });
    }
    if (e.key === "ArrowDown") {
      const len = this.state.history.length;
      if (this.state.cursor < len) {
        const newCursor = this.state.cursor + 1;
        this.setState({
          value: this.state.history[newCursor],
          cursor: newCursor
        });
      }
    }
  }

  _handleKeyPress = e => {
    // console.log(`${e.key} - ${e.keyCode}`);
    if (e.key == "Enter") {
      const { value } = e.target;

      // supress sending of blank lines!
      if (value === "") return;

      console.log("client.CmdInput");

      this.props.handler(value);
      const history = this.state.history;
      history.push(value);

      this.setState({ value: "", history, cursor: history.length });
    }
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {
    return (
      <div className="z-100 flex-1 flex flex-inline py-2 rounded">
        <input
          className="flex-1 p-1 text-xs w-full rounded text-gray-700"
          style={{ outline: "none", fontSize: 12 }}
          placeholder={`${this.props.prompt}:`}
          onKeyPress={this._handleKeyPress}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown.bind(this)}
          value={this.state.value}
        />
      </div>
    );
  }
}
