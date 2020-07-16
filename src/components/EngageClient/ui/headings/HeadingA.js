import React from "react";
import Icon from "../icons/IconA";

const sizeMap = [
  [28, "text-3xl"],
  [24, "text-2xl"],
  [22, "text-xl"],
  [18, "text-lg"],
  [16, ""]
];

export default function HeadingA(props) {
  const {
    args: { text, color1, icon, size = 3, font = {} }
  } = props;

  const [icsz, twc] = sizeMap[size - 1];
  return (
    <div className="flex flex-col w-full flex-inline justify-center items-center">
      <div
        style={{
          color: color1,
          fontFamily: font.fontFamily,
          fontWeight: font.fontWeight
        }}
        class={`${twc}`}
      >
        {icon && <Icon icon={icon} size={icsz} color={color1} />} {text}
      </div>
    </div>
  );
}
