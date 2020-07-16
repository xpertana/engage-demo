import React, { Component } from "react";

const sizeMap = [[80], [70], [60], [50], [40]];

export default class ImageText extends Component {
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

    const { size = 3 } = this.props;
    const [imsz] = sizeMap[size - 1];

    return (
      <div
        onClick={() => this.handleAction("select")}
        class="m-1 flex flex-col items-center justify-between border rounded-md shadow-sm"
      >
        <div style={{ width: imsz }} class="">
          <img src={this.props.item.image} />
        </div>
        <div
          className={`px-1 text-xs text-center left-0 flex-1 w-full rounded-b opacity`}
        >
          {this.props.item.text}
        </div>
      </div>
    );
  }
}
