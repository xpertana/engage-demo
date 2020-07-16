import React, { Component } from "react";

//import ImageChip from "../../../ui/imagechips/Image1";
import ImageChip from "../../../ui/imagechips/Image2";
//import ImageChip from "../../../ui/imagechips/Image3";
import color2hex from "../../../lib/color2hex";

export default class Image extends Component {
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
    const {
      style = "square",
      size = 3,
      font = {},
      border,
      color1,
      color2,
      color3,
      item
    } = this.props;

    const sizeMap = [200, 180, 140, 120, 100];

    // color determination..from parent OR from child?
    const COLOR1 = item.color1 ? item.color1 : color1;
    const COLOR2 = item.color2 ? item.color2 : color2;

    switch (style) {
      case "circle":
        return (
          <div onClick={() => this.handleAction("select")}>
            <CircleImage
              size={sizeMap[size]}
              color1={COLOR1}
              color2={COLOR2}
              style={this.props.style}
              item={this.props.item}
            />
          </div>
        );
      case "rounded":
        return (
          <div onClick={() => this.handleAction("select")}>
            <RoundedImage
              size={sizeMap[size]}
              color1={COLOR1}
              color2={COLOR2}
              style={this.props.style}
              item={this.props.item}
            />
          </div>
        );
      case "square":
      default:
        return (
          <div onClick={() => this.handleAction("select")}>
            <SquareImage
              size={sizeMap[size]}
              color1={COLOR1}
              color2={COLOR2}
              style={this.props.style}
              item={this.props.item}
            />
          </div>
        );
    }
  }
}

function CircleImage(props) {
  return (
    <div class="flex flex-col justify-center items-center">
      <div style={{ overflow: "hidden" }} class="">
        <img
          style={{
            borderWidth: 5,
            borderColor: props.color1,
            width: props.size,
            height: props.size,
            overflow: "hidden"
          }}
          src={props.item.image}
          alt="..."
          class="shadow-lg rounded-full max-w-full h-auto align-middle border-lg"
        />
      </div>
      <div style={{ color: props.color1 }} class="text-xs">
        {props.item.text}
      </div>
    </div>
  );
}

function RoundedImage(props) {
  return (
    <div class="flex flex-col justify-center items-center">
      <div style={{ overflow: "hidden" }} class="">
        <img
          style={{
            borderWidth: 5,
            borderColor: props.color1,
            width: props.size,
            height: props.size,
            overflow: "hidden"
          }}
          src={props.item.image}
          alt="..."
          class="shadow-lg rounded-lg max-w-full h-auto align-middle border-lg"
        />
      </div>
      <div style={{ color: props.color1 }} class="text-xs">
        {props.item.text}
      </div>
    </div>
  );
}

function SquareImage(props) {
  return (
    <div class="flex flex-col justify-center items-center">
      <div style={{ overflow: "hidden" }} class="">
        <img
          style={{
            borderWidth: 5,
            borderColor: props.color1,
            width: props.size,
            height: props.size,
            overflow: "hidden"
          }}
          src={props.item.image}
          alt="..."
          class="shadow-lg max-w-full h-auto align-middle border-lg"
        />
      </div>
      <div style={{ color: props.color1 }} class="text-xs">
        {props.item.text}
      </div>
    </div>
  );
}
