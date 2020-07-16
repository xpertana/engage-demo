import React from "react";
import Icon from "../ui/icons/IconA";

const sizeMap = [
  [64, "w-24 h-24 pt-1"],
  [48, "w-20 h-20 pt-2"],
  [36, "w-16 h-16 pt-2"],
  [24, "w-12 h-12 pt-2"],
  [18, "w-8 h-8 pt-1"]
];

export default function EngageIcon(props) {
  const {
    color1,
    color2,
    size = 3,
    icon,
    circle,
    banner,
    square,
    rounded
  } = props.args;

  let r = "";
  let bg = false;
  if (rounded) {
    r = "rounded";
    bg = true;
  } else if (circle) {
    r = "rounded-full";
    bg = true;
  } else if (square) {
    bg = true;
  }
  const [S, twc] = sizeMap[size - 1];

  if (banner)
    return (
      <div style={{ backgroundColor: color2 }} class={`flex justify-center`}>
        <Icon icon={icon} size={S} color={color1} />
      </div>
    );
  else if (bg)
    return (
      <div class={`mt-1 flex justify-center items-center`}>
        <div
          class={`text-center ${r} ${twc}`}
          style={{ backgroundColor: color2 }}
        >
          <Icon icon={icon} size={S} color={color1} />
        </div>
      </div>
    );
  else
    return (
      <div class={`flex justify-center`}>
        <Icon icon={icon} size={S} color={color1} />
      </div>
    );
}
