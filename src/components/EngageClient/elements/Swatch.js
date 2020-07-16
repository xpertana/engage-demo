import React from "react";
import Icon from "../elements/Icon";
import decodeColor from "../lib/decodeColor";

const sizeMap = {
  small: {
    iconSize: 16,
    width: "w-24"
  },
  medium: {
    iconSize: 20,
    width: "w-32"
  },
  large: {
    iconSize: 24,
    width: "w-1/4"
  }
};

export default function Swatch(props) {
  const {
    color = "black",
    bgcolor = "blue4",
    text,
    size = "medium",
    icon,
    circle
  } = props.args;

  const { width, iconSize } = sizeMap[size];

  const R = circle ? "rounded-full" : "rounded";

  const BGC = `bg-${decodeColor(bgcolor)}`;
  const C = `text-${decodeColor(color)}`;

  return (
    <div className={`${width} text-center m-1 p-1 text-xs ${R} ${C} ${BGC}`}>
      {icon && <Icon type={icon} size={iconSize} />} {text}
    </div>
  );
}
