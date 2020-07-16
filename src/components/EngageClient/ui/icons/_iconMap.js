import React from "react";

const sizeMap = {
  tiny: 20,
  small: 36,
  medium: 48,
  large: 72,
  huge: 128
};

export default function EngageIcon(props) {
  const { icon, size = 36, color } = props.args;
  // size it
  let S = size;
  if (typeof S === "string") S = sizeMap[S];

  if (!IC[icon]) return <Circle size={S} color={"#D0D0D0"} />;
  else return IC[icon](S, color);
}
