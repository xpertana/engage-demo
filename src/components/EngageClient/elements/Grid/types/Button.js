import React, { Component } from "react";

const sizeMap = [
  [20, 16, "px-6 py-3"],
  [18, 14, "px-5 py-2"],
  [16, 12, "px-4 py-1"],
  [14, 10, "px-3 py-1"],
  [12, 8, "px-2"]
];

export default class Button extends Component {
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

    let { color1, color2, color3, size = 3, item } = this.props;
    const [tsz, stsz, twc] = sizeMap[size - 1];

    // reconcile color between item-level and parent level!
    color1 = item.color1 ? item.color1 : color1;
    color2 = item.color2 ? item.color2 : color2;
    color3 = item.color3 ? item.color3 : color3;

    // return <div class="text-xs">{JSON.stringify(this.props, null, 2)}</div>;

    return (
      <span
        onClick={() => this.handleAction("select")}
        class="inline-flex rounded-md shadow-sm"
      >
        <button
          type="button"
          style={{ fontSize: tsz, color: color2, backgroundColor: color1 }}
          class={`items-center ${twc} border border-transparent font-medium rounded-md hover:opacity-75 focus:outline-none transition ease-in-out duration-150`}
        >
          {item.text}
          {item.subtext && <div style={{ fontSize: stsz }}>{item.subtext}</div>}
        </button>
      </span>
    );
  }
}
