import React from "react";
import TextA from "../ui/text/TextA";
import Pre from "../ui/text/Pre";

export default function TextElement(props) {
  if (!props.args.text) {
    console.log("ctx", props.args.ctx);
    if (props.args.ctx) {
      props.args.text = props.args.ctx.cv.text
        ? props.args.ctx.cv.text
        : props.args.ctx.cv.v
        ? props.args.ctx.cv.v
        : "ctx has no v or text field";
    } else props.args.text = "no text or ctx to display";
  }
  if (props.args.banner) return BannerText(props);
  if (props.args.pre) return Pre(props);
  else return TextA(props);
}

function BannerText(props) {
  const { text, color1 = "white", color2 = "gray", size = 3 } = props.args;

  const sizeMap = [["text-xl"], ["text-lg"], [""], ["text-sm"], ["text-xs"]];
  const [twc] = sizeMap[size - 1];
  return (
    <div
      style={{ color: color1, backgroundColor: color2 }}
      class={`mt-1 text-center w-full ${twc}`}
    >
      {text}
    </div>
  );
}
