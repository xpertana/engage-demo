import React from "react";

const sizeMap = [
  [20, "text-xl"],
  [18, "text-lg"],
  [16, ""],
  [14, "text-sm"],
  [12, "text-xs"]
];

export default function TextA(props) {
  let {
    args: { pre, left, right, justify, color1, text, size = 3, font = {} }
  } = props;

  const [tsz, twc] = sizeMap[size - 1];

  const align = left
    ? "text-left"
    : right
    ? "text-right"
    : justify
    ? "text-justify"
    : "text-center";

  return (
    <div className="mx-8">
      <div
        style={{ color: color1, fontSize: tsz, fontFamily: font }}
        class={`font-light ${align}`}
      >
        {text}
      </div>
    </div>
  );
}
