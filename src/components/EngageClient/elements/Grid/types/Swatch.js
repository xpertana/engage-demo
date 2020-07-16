import React, { Component } from "react";

const sizeMap = [200, 180, 140, 120, 100];

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

    const {
      style = "square",
      size = 3,
      font = {},
      border,
      color1,
      color2,
      color3,
      item
    } = this.props;

    const sizeMap = [
      ["w-32 h-32 text-xl"],
      ["w-24 h-24 text-lg"],
      ["w-20 h-20"],
      ["w-16 h-16 text-sm"],
      ["w-12 w-12 text-xs"]
    ];

    // color determination..from parent OR from child?
    const COLOR1 = item.color1 ? item.color1 : color1;
    const COLOR2 = item.color2 ? item.color2 : color2;

    const [twc] = sizeMap[size - 1];

    return (
      <div
        style={{
          color: COLOR1,
          backgroundColor: COLOR2,
          fontFamily: font.fontFamily || "monospace"
        }}
        onClick={() => this.handleAction("select")}
        class={`text-center m-1 flex flex-col justify-center items-center rounded-md shadow-outline shadow-sm ${twc}`}
      >
        <div style={{ color: COLOR1 }}>{this.props.item.text}</div>
      </div>
    );
  }
}
