import React, { Component } from "react";
import BASECOLORS from "../../../lib/BASECOLORS";

export default class Swatch extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: false };
  }

  handleAction(action) {
    if (this.props.item._hide) this.setState({ hidden: true });
    this.props.handler({
      action,
      index: this.props.index,
      item: this.props.item
    });
  }

  render() {
    if (this.state.hidden) return <span></span>;
    const backgroundColor = this.props.item.color
      ? BASECOLORS[this.props.item.color]
      : "#dddddd";
    return (
      <div
        style={{ backgroundColor }}
        onClick={() => this.handleAction("select")}
        class="w-16 h-16 flex text-3xl text-gray-400 flex-inline hover:opacity-75 justify-center items-center rounded-md text-bold"
      >
        <span class="font-thin">{this.props.item.char}</span>
      </div>
    );
  }
}
