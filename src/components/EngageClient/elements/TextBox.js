import React from "react";
import sizeMap from "../lib/sizeMap";

export default function TextCard(props) {
  let {
    color1 = "#718096",
    color2 = "#f7fafc",
    fcolor,
    font,
    fsize,
    text,
    size = 3
  } = props.args;

  const fontSize = fsize - (size - 1) * 4;
  let COLOR = color1 ? color1 : fcolor;

  return (
    <div
      style={{ color: color1, backgroundColor: color2 }}
      className="my-2 mx-4 p-4 flex rounded flex-inline justify-center items-center"
    >
      <p
        style={{ color: COLOR, fontSize, fontFamily: font }}
        class={`font-light leading-relaxed`}
      >
        {text}
      </p>
    </div>
  );
}
