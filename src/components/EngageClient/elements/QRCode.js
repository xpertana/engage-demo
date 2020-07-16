import React, { Component } from "react";
import { QRCode } from "react-qr-svg";
import sizeMap from "../lib/sizeMap";

export default class PresentQRCode extends Component {
  render() {
    const { text, ctxvalues, color1, color2, size = 5 } = this.props.args;
    const width = sizeMap.width[size];

    let value = text ? text : ctxvalues ? ctxvalues[0].cv.v : null;
    if (!value) return <div>CANNOT DISPLAY QR CODE VALUE!</div>;

    return (
      <div className="m-4 flex flex-inline justify-center items-center">
        <QRCode
          // bgColor="#FFFFFF"
          fgColor={color1 ? color1 : "black"}
          bgColor={color2 ? color2 : "white"}
          level="Q"
          style={{ width }}
          value={value}
        />
      </div>
    );
  }
}
