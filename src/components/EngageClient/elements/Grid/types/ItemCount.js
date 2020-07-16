import React, { Component } from "react";

export default class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: false, count: props.item.count };
  }

  handleClick() {
    if (this.props.item._hideme) this.setState({ hidden: true });
    this.props.handler({
      hideParent: this.props.item._selectone ? true : false,
      ctxout: { selected: this.props.item }
    });
  }

  // special behavior flags applied to items automatically activate
  // certain behaviors:
  //    _ctx, _ctxgrp, _delete , _count, _hide, _hideparent, _select, _selectmany, _detail
  //    _cancel, _selected, _confirm,
  //
  // there is also a _type directive that effects the appearance
  // was also have flag,tag, color, action

  render() {
    if (this.state.hidden) return <span></span>;
    return (
      <span
        onClick={() => this.handleClick()}
        class="m-1 inline-block relative"
      >
        <img class="h-16 w-16 rounded-md" src={this.props.item.image} alt="" />
        {this.props.item.flag && (
          <span class="absolute top-0 right-0 block h-4 w-4 transform -translate-y-1/2 translate-x-1/2 rounded-full text-white shadow-solid bg-green-400"></span>
        )}
        count:{props.item.count}
      </span>
    );
  }
}
