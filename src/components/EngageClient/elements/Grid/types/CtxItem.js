import React, { Component } from "react";
import BASECOLORS from "../../../lib/BASECOLORS";
import Icon from "../../../ui/icons/IconA";

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
        style={{ backgroundColor, fontFamily: "verdana" }}
        onClick={() => this.handleAction("select")}
        class="w-20 h-20 flex flex-inline justify-center items-center rounded-md text-bold"
      >
        <div>
          <Icon icon="circle" />
        </div>
        <div> {this.props.item.text}</div>
        <div> value</div>
      </div>
    );
  }
}
