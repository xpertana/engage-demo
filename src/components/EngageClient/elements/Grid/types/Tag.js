import React, { Component } from "react";

export default class Avatar extends Component {
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
    return (
      <span
        onClick={() => this.handleAction("select")}
        class="m-1 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium leading-5 bg-indigo-100 text-indigo-800"
      >
        {this.props.item.text}
      </span>
    );
  }
}
