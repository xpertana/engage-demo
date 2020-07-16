import React, { Component } from "react";
const sizeMap = [1, 2, 3, 4, 5];

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.args.ctx.cv.v
    };
  }

  handleClick() {
    const newValue = !this.state.value;
    this.setState({ value: newValue });
    const ctxout = {};
    ctxout[this.props.args.ctxout] = newValue;
    console.log(ctxout);
    this.props.handler({ ctxout });
  }

  render() {
    const {
      text,
      size = 5,
      color1 = "gray",
      color2 = "blue",
      divider
    } = this.props.args;

    const oncolor = this.state.value ? color1 : "#aaaaaa"; //  on or off color
    const backgroundColor = color2;
    const translate = this.state.value ? "translate-x-5" : "translate-x-0";

    return (
      <div>
        <div
          style={{ backgroundColor }}
          class="mx-6 my-1 flex bg-gray-100 justify-between items-center"
        >
          <div style={{ color: oncolor }} class="flex-1 py-2 px-4">
            {text}
          </div>
          <div onClick={() => this.handleClick()} class="mt-1 px-4">
            <span
              style={{ backgroundColor: oncolor }}
              role="checkbox"
              tabindex="0"
              aria-checked="false"
              class="relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
            >
              {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
              <span
                aria-hidden="true"
                class={`${translate} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
              ></span>
            </span>
          </div>
        </div>
        {divider && <hr></hr>}
      </div>
    );
  }
}
