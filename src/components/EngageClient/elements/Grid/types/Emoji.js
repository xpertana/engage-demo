import React, { Component } from "react";
import BASECOLORS from "../../../lib/BASECOLORS";

const qualifierMap = {
  small: 16,
  medium: 20,
  large: 24
};

export default class IconChip extends Component {
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

    const size = qualifierMap[this.props.qualifier];
    return (
      <div
        onClick={() => this.handleAction("select")}
        class="m-2 p-2 border rounded justify-center items-center flex flex-col"
      >
        <div class="text-6xl">{this.props.item.emoji}</div>
        <div class="text-xs">{this.props.item.text}</div>
      </div>
    );
  }
}
