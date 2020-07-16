import React, { Component } from "react";
import Checkbox from "../../../ui/checkboxs/CheckboxA";

export default class Checkmark extends Component {
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
        class="m-1 inline-flex rounded-md shadow-sm"
      >
        <Checkbox text={this.props.item.text} />
      </span>
    );
  }
}
