import React from "react";
import { createTempVariable } from "typescript";
import color2hex from "../lib/color2hex";

const sizeMap = [
  ["w-64 h-64 text-xl", "w-64"],
  ["w-56 h-56 text-lg", "w-56"],
  ["w-48 h-48", "w-48"],
  ["w-40 h-40 text-sm", "w-40"],
  ["w-32 h-32 text-xs", "w-32"]
];

export default function ColorSwatch(props) {
  let { ctx, text, size = 3 } = props.args;

  // return <div>{JSON.stringify(ctx)}</div>;
  const labelColor = ctx ? color2hex(`${ctx.cv.tag}5`) : "gray";
  const backgroundColor = ctx ? ctx.cv.v : text ? color2hex(text) : "gray";
  const label = ctx ? ctx.cv.text : text ? text : "Color";

  const [twc, w] = sizeMap[size - 1];
  return (
    <div
      class={`py-1 flex flex-col rounded justify-between items-center ${twc}`}
    >
      <div style={{ backgroundColor }} class={`flex-1 font-light ${twc}`}></div>
      <div
        style={{ color: "white", backgroundColor: labelColor }}
        class={`px-2 text-center ${w}`}
      >
        {label} - {backgroundColor}
      </div>
    </div>
  );
}
