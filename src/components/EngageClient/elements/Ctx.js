import React, { Component } from "react";
import Icon from "../ui/icons/IconA";

const permIcons = {
  1: <i class="fal fa-share"></i>,
  2: <i class="fal fa-question-square"></i>,
  3: <i class="fal fa-lock"></i>
};
export default class CtxItem extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: props.args.expanded };
  }

  expandToggle() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const {
      args: { text, icon, value, ctx }
    } = this.props;

    const shareIcon = ctx.sf ? permIcons[ctx.sf] : <i class="fal fa-share"></i>;
    return (
      <div>
        <div class="flex justify-between text-xs items-center border-b bg-gray-100 text-gray-500">
          <div class="px-2 w-8 bg-gray-200">
            <Icon icon={icon} color="gray" size={16} />
          </div>
          <div
            onClick={() => this.expandToggle()}
            class="flex-1 mx-2 text-left"
          >
            <pre>{text}</pre>
          </div>

          <div>
            <pre>{value}</pre>
          </div>
          <div class="px-2">{shareIcon}</div>
          <div
            onClick={() =>
              this.props.handler({
                directives: [[25, { ctx: { t: 1, n: text } }]]
              })
            }
            class="px-1"
          >
            <Icon icon="delete" color="gray" size={16} />
          </div>
        </div>
        {this.state.expanded && (
          <div>
            <pre class="ml-4 text-xs text-gray-600">
              {JSON.stringify(ctx.cv, null, 2)}
            </pre>
          </div>
        )}
      </div>
    );
  }
}
