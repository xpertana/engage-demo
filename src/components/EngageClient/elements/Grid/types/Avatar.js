import React, { Component } from "react";
import Avatar from "../../../ui/avatars/AvatarA";

const qualifierMap = {
  small: 16,
  medium: 20,
  large: 24
};

export default class GridAvatar extends Component {
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
    if (this.state.hidden) return <div></div>;

    const size = qualifierMap[this.props.qualifier];
    return (
      <span
        onClick={() => this.handleAction("select")}
        class="m-1 inline-block relative"
      >
        <img
          class={`h-${size} w-${size} rounded-md`}
          src={this.props.item.image}
          alt=""
        />
        {this.props.item.flag && (
          <span class="absolute top-0 right-0 block h-4 w-4 transform -translate-y-1/2 translate-x-1/2 rounded-full text-white shadow-solid bg-green-400"></span>
        )}
      </span>
    );
  }
}
