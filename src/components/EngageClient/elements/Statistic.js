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

export default class PresentQRCode extends Component {
  render() {
    const { text, value, size = "medium", color = "black" } = this.props.args;

    const width = sizeMap[size];

    return (
      <div className="m-4 flex flex-inline justify-center items-center">
        <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                  {text}
                </dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                  {value}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
