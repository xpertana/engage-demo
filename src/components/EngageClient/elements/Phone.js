import React, { Component } from "react";
import PropTypes from "prop-types";
import { QRCode } from "react-qr-svg";
import Card from "../ui/Card";

const sizeMap = {
  tiny: 100,
  small: 150,
  medium: 256,
  large: 350,
  huge: 450
};

export default class PhoneTemplate extends Component {
  render() {
    const {
      title,
      name,
      text = "919720388",
      size = "medium",
      color = "black"
    } = this.props.args;

    let template = new Array(10).fill("*");
    for (let i = 0; i < text.length; i++) template[i] = text[i];

    const width = sizeMap[size];

    const areacode = template.slice(0, 3).join("");
    const prefix = template.slice(3, 6).join("");
    const suffix = template.slice(6, 10).join("");

    return (
      <div className="m-4 flex flex-inline justify-center items-center">
        <div className="text-5xl font-light">
          ({areacode}){prefix}-{suffix}
        </div>
      </div>
    );
  }
}

function Digit(props) {
  return (
    <div className="px-6 ml-1 border rounded rounded-lg text-6xl font-light text-gray-500 text-center">
      {props.value}
    </div>
  );
}
