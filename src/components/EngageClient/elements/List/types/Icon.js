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
      subtext,
      color1 = "gray8",
      color2 = "gray5",
      color3
    } = this.props.item;

    color1 = color2hex(color1);
    color2 = color2hex(color2);

    return (
      <div
        onClick={() => this.handleAction("select")}
        class="border-t border-gray-200"
      >
        <a class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
          <div class="flex items-center py-1">
            {icon && (
              <div
                style={{ backgroundColor: "gray" }}
                class="w-8 h-8 rounded p-1 mx-2 text-center"
              >
                <Icon icon={icon} size={18} color="white" />
              </div>
            )}
            <div class="min-w-0 flex-1 flex items-center">
              {/* <div class="flex-shrink-0">
                  <ElemAvatar />
                </div> */}
              <div class="flex-1 px-4 md:grid md:grid-cols-2 gap-2">
                <div>
                  <div
                    style={{ color: color1 }}
                    class="text-sm font-medium truncate"
                  >
                    {this.props.item.text}
                  </div>
                </div>
                <div class="block">
                  <div>
                    <div
                      style={{ color: color2 }}
                      class="text-xs text-gray-400"
                    >
                      {subtext}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mr-2">
              <svg
                class="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
