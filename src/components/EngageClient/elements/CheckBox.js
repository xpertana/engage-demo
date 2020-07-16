import React from "react";
import Icon from "../ui/icons/IconA";
const sizeMap = [1, 2, 3, 4, 5];

export default function Toggle(props) {
  const {
    text,
    size = 5,
    color1 = "gray",
    color2 = "#eeeeee",
    retctx,
    value = true
  } = props.args;

  console.log("toggle elem args:");
  console.log(props);

  const color = value ? color1 : "#aaaaaa"; //  on or off color
  const backgroundColor = color2;
  const icon = value ? "checksquare" : "squareoutline";

  function handleClick() {
    const ctxout = {};
    ctxout[props.args.retctx.n] = !props.args.value;
    props.handler({ ctxout });
  }

  return (
    <div
      style={{ color, backgroundColor }}
      class="my-1 flex bg-gray-100 justify-between items-center"
    >
      <div onClick={() => handleClick()} class="pl-8">
        <Icon size={28} color={color} icon={icon} />
      </div>
      <div class="flex-1 px-4">{text}</div>
    </div>
  );
}
