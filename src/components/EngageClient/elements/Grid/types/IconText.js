import Icon from "../../../ui/icons/IconA";
import React, { Component } from "react";
import color2hex from "../../../lib/color2hex";

const iconSizeMap = [48, 36, 36, 36, 24, 22, 20, 18, 18, 14]; // s0-s9
const sizeMap = [
  [64, "w-24 h-32"],
  [48, "w"],
  [36, ""],
  [24, ""],
  [18, ""]
];

export default class IconText extends Component {
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

    // console.log(this.props);
    // if we have the wait flag set, it is a choose and we show hover state
    const hoverClass = this.props.wait ? "hover:opacity-75" : "";

    const { font, fsize, size = 3, fcolor, color1, color2 } = this.props;
    const fontSize = fsize - size;
    const iconSize = iconSizeMap[size];

    const [icsz, twc] = sizeMap[size - 1];
    const FCOLOR = color1 ? color2hex(color1) : color2hex(fcolor);
    return (
      <div
        onClick={() => this.handleAction("select")}
        style={{ backgroundColor: color2 }}
        class={`ml-1 p-2 rounded justify-center ${hoverClass} ${twc} items-center flex flex-col`}
      >
        <div>
          <Icon color={this.props.color1} {...this.props.item} size={icsz} />
        </div>
        <div
          style={{ fontFamily: font, color: FCOLOR, fontSize }}
          class="text-xs"
        >
          {this.props.item.text}
        </div>
      </div>
    );
  }
}
