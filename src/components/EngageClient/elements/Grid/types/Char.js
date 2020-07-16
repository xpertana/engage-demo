import React, { Component } from "react";
import BASECOLORS from "../../../lib/BASECOLORS";

const sizeMap = [
  ["w-8 h-8 text-3xl"],
  ["w-16 h-16 text-2xl"],
  ["w-16 h-16 text-xl"],
  ["w-16 h-16"],
  ["w-8 h-8"]
];
export default class Char extends Component {
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
    const { size = 3 } = this.props;
    const S = sizeMap[size - 1];
    const [twc] = S;
    return (
      <div
        style={{ backgroundColor, fontFamily: "verdana" }}
        onClick={() => this.handleAction("select")}
        class={`flex p-2 text-4xl flex-inline justify-center items-center rounded-md font-thin`}
      >
        {this.props.item.char}
      </div>
    );
  }
}
