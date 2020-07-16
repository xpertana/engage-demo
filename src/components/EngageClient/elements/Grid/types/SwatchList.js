import React, { Component } from "react";
import BASECOLORS from "../../../lib/BASECOLORS";

export default class Avatar extends Component {
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
        style={{ backgroundColor, fontFamily: this.props.item.font || "Arial" }}
        onClick={() => this.handleAction("select")}
        class="text-center w-24 h-24 m-1 inline-flex justify-between items-center rounded-md shadow-sm"
      >
        {this.props.item.text}
      </div>
    );
  }
}
