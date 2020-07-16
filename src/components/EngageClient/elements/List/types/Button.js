import React, { Component } from "react";
import Icon from "../../../ui/icons/IconA";
import color2hex from "../../../lib/color2hex";

export default class Detail extends Component {
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
    let {
      icon,
      text,
      tag = "active",
      subtext,
      color1 = "gray6",
      color2 = "gray2"
    } = this.props.item;

    color1 = color2hex(color1);
    color2 = color2hex(color2);

    return (
      <div
        style={{ color: color1 }}
        onClick={() => this.handleAction("select")}
        class="mx-4 rounded-md shadow-sm"
      >
        <button
          style={{ color: color1, backgroundColor: color2 }}
          type="button"
          class="w-full inline-flex justify-between items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:opacity-75 focus:outline-none transition ease-in-out duration-150"
        >
          {icon && (
            <span class="mr-4">
              {" "}
              <Icon icon={icon} size={22} color={color1} />
            </span>
          )}
          <span class="flex-1 text-left">{text}</span>
          {tag && (
            <span
              style={{ backgroundColor: color1 }}
              class="px-4 inline-flex items-center rounded-md text-sm font-medium leading-5 bg- text-white"
            >
              {tag}
            </span>
          )}
        </button>
      </div>
    );
  }
}
