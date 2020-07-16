import React from "react";
import Checkbox from "./Checkbox";
import Icon from "../elements/Icon";

export default function IconChip(props) {
  const {
    name = "n/a",
    size = "medium",
    icon,
    color,
    backgroundColor,
    border,
    multiple = false,
    selected = false,
    value
  } = props.args;

  // let C = colorBase;
  // let opacity = 75;
  // let T = colorText;
  // if (selected) {
  //   opacity = 100;
  //   C = colorSelected;
  // }

  const V = value ? value : name;

  const { width, height, fontSize } = styleMap[size];

  return (
    <div
      style={{ backgroundColor, borderWidth: border }}
      className={`flex flex-col mb-1 ml-1 ${width} items-center justify-between ${height} ${border} p-1 rounded`}
    >
      {/* {checkmark && <Checkbox checked={selected} />} */}
      <div className="flex-1 p-2">
        <Icon type={icon} color={color} size={size} />
      </div>
      <div style={{ fontSize, color }} className={`text-center rounded-b`}>
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
    fontSize: "8px",
    iconSize: 36
  },
  small: {
    width: "w-20",
    height: "h-20",
    fontSize: "12px",
    iconSize: 36
  },
  medium: {
    width: "w-24",
    height: "h-24",
    fontSize: "14px",
    iconSize: 42
  },
  large: {
    width: "w-36",
    height: "h-36",
    fontSize: "15px",
    iconSize: 54
  },
  huge: {
    width: "w-32",
    height: "h-32",
    fontSize: "18px",
    iconSize: 54
  }
};
