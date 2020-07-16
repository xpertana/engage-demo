import React, { Component } from "react";
import BASECOLORS from "../../../lib/BASECOLORS";

export default class Bullet extends Component {
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
        style={{ backgroundColor, fontFamily: "verdana" }}
        onClick={() => this.handleAction("select")}
        class="flex flex-inline justify-left items-center rounded-md text-bold"
      >
        {this.props.item.text}
      </div>
    );
  }
}
