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
      <span class="border rounded p-1 m-1 inline-flex rounded-md shadow-sm">
        <div>
          <button
            type="button"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          >
            t:{this.props.item.text}
            ic:{this.props.item.icon}
            im:{this.props.item.image}
          </button>
          <div class="m-1 p-1 bg-green-200 text-xs">
            {this.props.item.count}
          </div>
          <div class="m-1 p-1 bg-green-200 text-xs">
            {this.props.item._selected ? (
              <div>SELECTED</div>
            ) : (
              <div>NOT SELECTED</div>
            )}
          </div>
          <div
            class="m-1 p-1 bg-blue-200 text-xs"
            onClick={() => this.handleAction("select")}
          >
            SELECT
          </div>
          <div
            class="m-1 p-1 bg-blue-200 text-xs"
            onClick={() => this.handleAction("increment")}
          >
            ADD
          </div>
          <div
            class="m-1 p-1 bg-blue-200 text-xs"
            onClick={() => this.handleAction("decrement")}
          >
            SUBTRACT
          </div>
          <div
            class="m-1 p-1 bg-blue-200 text-xs"
            onClick={() => this.handleAction("delete")}
          >
            DELETE
          </div>
        </div>
      </span>
    );
  }
}
