import React from "react";
import tinycolor from "tinycolor2";

export default function FineprintA(props) {
  const {
    args: { text },
    theme: { textcolor = "#000000" }
  } = props;

  const color = tinycolor(`${textcolor}77`);

  return (
    <div style={{ color }} className={`flex mx-8 text-center text-xs my-1`}>
      <div className="flex-1 m-2 p-2">{text}</div>
    </div>
  );
}
