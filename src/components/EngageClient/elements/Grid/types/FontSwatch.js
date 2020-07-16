import React, { Component } from "react";
import color2hex from "../../../lib/color2hex";

export default class FontSwatch extends Component {
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
    const { font, fsize, size = 5, fcolor, color1, color2 } = this.props;
    const fontSize = fsize - size;

    const { item } = this.props;
    const FCOLOR = color1 ? color2hex(color1) : color2hex(fcolor);
    return (
      <div
        onClick={() => this.handleAction("select")}
        style={{ backgroundColor: color2 }}
        class="w-32 m-1 p-2 border rounded hover:bg-gray-50 justify-center items-center flex flex-col"
      >
        <div
          style={{ fontFamily: item.font, color: FCOLOR, fontSize }}
          class="text"
        >
          {this.props.item.text}
        </div>
      </div>
    );
  }
}
