import React from "react";

const sizeMap = [
  ["text-sm"],
  ["text-sm"],
  [""],
  ["text-xs"],
  ["text-xs rounded-full"]
];

export default function Badge(props) {
  const {
    color1 = "white",
    color2 = "slategray",
    size = 3,
    text = "badgetext"
  } = props.args;

  // size logic
  const S = sizeMap[size - 1];
  const [twc] = S;

  return (
    <span
      style={{ color: color1, backgroundColor: color2 }}
      class={`m-1 font-semibold inline-block px-2 uppercase rounded uppercase last:mr-0 mr-1 ${twc}`}
    >
      {text}
    </span>
  );
}
