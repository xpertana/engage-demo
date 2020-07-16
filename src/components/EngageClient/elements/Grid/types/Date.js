import Icon from "../../../ui/icons/IconA";
import React, { Component } from "react";

const qualifierMap = {
  small: 16,
  medium: 20,
  large: 24
};

export default class DateChip extends Component {
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

    const size = qualifierMap[this.props.qualifier];

    const COLOR = this.props.item.color || "#ababab";

    return (
      <div
        onClick={() => this.handleAction("select")}
        style={{ color: COLOR }}
        class="m-2 p-2 border rounded justify-center items-center flex flex-col"
      >
        <div>
          <Icon {...this.props.item} color={COLOR} icon="calendar" />
        </div>
        <div class="uppercase text-lg">{this.props.item.text}</div>
      </div>
    );
  }
}
