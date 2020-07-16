import React from "react";
import Icon from "../ui/icons/IconA";

export default function ElemCode(props) {
  let { text, size = "medium", color1 = "#ededed", length = 6 } = props.args;

  let VALUE = props.args.ctx ? props.args.ctx.cv.v : "";

  // if we have numdigits option, we show blank entries.
  // otherwise it grows as we enter digits
  if (length) {
    VALUE = new Array(length).fill(
      <span>
        <Icon icon="circle" size={18} color={color1} />
      </span>
    );
    for (let i = 0; i < VALUE.length; i++) VALUE[i] = <span>{VALUE[i]}</span>;
  } else VALUE = text.split("");

  return (
    <div class="mt-4 mb-6 flex flex-col justify-between items-center">
      <div style={{ color: color1 }} class="font-light text-3xl">
        {text}
      </div>
      <div className="m-2 flex flex-inline justify-center items-center">
        {VALUE.map(d => (
          <Digit value={d} color={color1} />
        ))}
      </div>
    </div>
  );
}

function Digit({ value, color }) {
  return (
    <div
      style={{ color }}
      className="px-4 ml-1 text-4xl font-light text-gray-500 text-center"
    >
      {value}
    </div>
  );
}

function BorderDigit({ value, color }) {
  return (
    <div
      style={{ color }}
      className="px-4 ml-1 border rounded rounded-lg text-4xl font-light text-gray-500 text-center"
    >
      {value}
    </div>
  );
}
