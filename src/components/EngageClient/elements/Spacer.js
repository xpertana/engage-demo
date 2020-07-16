import React from "react";

export default function Spacer(props) {
  const sizeMap = [["h-20"], ["h-16"], ["h-12"], ["h-8"], ["h-4"]];
  const { size = 3, color1, color2 } = props.args;
  const [twc] = sizeMap[size - 1];
  return <div class={`${twc}`}></div>;
}
