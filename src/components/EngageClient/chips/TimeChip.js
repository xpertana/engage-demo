import React from "react";
import Checkbox from "./Checkbox";
import Icon from "../elements/Icon";

export default function TextChip(props) {
  const {
    name = "n/a",
    size = "medium",
    icon,
    color = "#292929",
    backgroundColor = "#ABABAB",
    border,
    multiple = false,
    selected = false,
    value
  } = props.args;

  //const { base, colorSelected, colorBase, colorText } = colorBreakdown(color);
  const { width, height, fontSize } = styleMap[size];

  // let C = colorBase;
  // let opacity = 75;
  // let T = colorText;
  // if (selected) {
  //   opacity = 100;
  //   C = colorSelected;
  // }

  return (
    <div
      style={{ color, backgroundColor, borderWidth: border }}
      className={`mb-1 ml-1 flex flex-col justify-center items-center p-1 rounded`}
    >
      {/* {checkmark && <Checkbox checked={selected} />} */}
      <div style={{ fontSize }} className={`px-1 ${width} ${height} flex-1`}>
        {name}
      </div>
      <div className={`p-1`}>{multiple && <Checkbox checked={selected} />}</div>
    </div>
  );
}

const styleMap = {
  tiny: {
    width: "w-20",
    height: "h-20",
    fontSize: "12px"
  },
  small: {
    width: "w-20",
    height: "h-20",
    fontSize: "14px"
  },
  medium: {
    width: "w-24",
    height: "h-24",
    fontSize: "16px"
  },
  large: {
    width: "w-32",
    height: "h-32",
    fontSize: "18px"
  },
  huge: {
    width: "w-32",
    height: "h-32",
    fontSize: "20px"
  }
};
