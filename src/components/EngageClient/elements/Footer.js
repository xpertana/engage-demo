import React from "react";
import FooterA from "../ui/footers/FooterA";
import color2hex from "../lib/color2hex";

export default function Footer(props) {
  if (props.args.color1) props.args.color1 = color2hex(props.args.color1);
  if (props.args.color2) props.args.color2 = color2hex(props.args.color2);

  return (
    <div
      style={{
        top: "auto",
        fontSize: "1.2em",
        position: "fixed",
        bottom: 42,
        opacity: 1.0
      }}
      // className="w-full flex flex-inline justify-center items-center"
      className="w-full"
    >
      {FooterA(props)}
    </div>
  );
}
