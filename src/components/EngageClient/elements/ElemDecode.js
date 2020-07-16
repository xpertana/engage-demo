import React, { Component } from "react";
import Icon from "../ui/icons/IconA";

export default class ElemDecode extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: props.args.expanded };
  }

  expandToggle() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const {
      args: { record }
    } = this.props;

    return (
      <div>
        <div class="flex justify-between text-xs items-center border-b bg-gray-100 text-gray-500">
          <div class="px-2 w-8 bg-gray-200">
            <Icon icon="monitor" color="gray" size={16} />
          </div>
          <div
            onClick={() => this.expandToggle()}
            class="flex-1 mx-2 text-left"
          >
            <pre>{record.element}</pre>
          </div>

          <div>
            <pre>{record.variant}</pre>
          </div>
        </div>
        {this.state.expanded && (
          <div>
            <pre class="ml-4 text-xs text-gray-600">
              {JSON.stringify(record, null, 2)}
            </pre>
          </div>
        )}
      </div>
    );
  }
}
