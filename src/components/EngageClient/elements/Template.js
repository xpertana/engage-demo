import React from "react";
import Icon from "../ui/icons/IconA";
const sizeMap = [
  ["text-5xl px-4 rounded"],
  ["text-4xl px-6 rounded"],
  ["text-2xl px-4"],
  ["text-xl px-2"],
  ["text-lg px-1"]
];

export default function Template(props) {
  const {
    text = "####",
    size = 3,
    icon,
    color1 = "black",
    color2 = "white",
    ctx,
    borderless
  } = props.args;

  let [twc] = sizeMap[size - 1];
  if (!borderless) twc = twc + " border";

  // we require a scalar sort of ctx value!
  if (!ctx || !ctx.cv.v)
    return <div>ERROR: CANNOT RENDER TEMPLATE - INVALID CTX</div>;

  const value = ctx.cv.v;

  // the text value is a template pattern:
  //  "(###)###-####"

  let template = new Array(text.length).fill("*");
  for (let i = 0; i < text.length; i++) template[i] = text[i];

  return (
    <div className="m-4 flex flex-inline justify-center items-center">
      {genTemplate(value, text, { icon, twc, color1, color2 })}
    </div>
  );
}

function genTemplate(value, template, { icon, twc, color1, color2 }) {
  const out = [];
  if (icon) out.push(<Icon icon={icon} size={18} />);
  let valPointer = 0;
  for (let i = 0; i < template.length; i++) {
    switch (template[i]) {
      case "*":
        // are we beyond the length of the value?
        // placeholder if so..
        if (valPointer < value.length)
          out.push(
            <Digit
              value={value[valPointer]}
              twc={twc}
              color1={color1}
              color2={color2}
            />
          );
        else out.push(<Icon icon="circle" color="lightgray" size={18} />);
        valPointer++;
        break;
      default:
        out.push(<div class={`${twc}`}>{template[i]}</div>);
    }
  }
  return out;
}

function Digit(props) {
  const { value, twc, color1, color2 } = props;
  return (
    <div
      style={{ color: props.color1, backgroundColor: props.color2 }}
      className={`ml-1 font-light text-gray-500 text-center ${twc}`}
    >
      {props.value}
    </div>
  );
}
