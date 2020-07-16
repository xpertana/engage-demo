import React from "react";
import Icon from "../icons/IconA";
import color2hex from "../../lib/color2hex";

const sMap = [32, 32, 32, 48, 48, 64, 64, 128, 128, 255];

export default function HeaderA(props) {
  const { args } = props;
  const {
    image = "https://images.unsplash.com/photo-1590423456572-0fe39c8f62f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
    text = "header text",
    home,
    logo,
    color1 = "white",
    color2 = "black",
    size = 5
  } = args;

  const height = sMap[size];

  console.log("HeaderB args");
  console.log(args);

  return (
    <div
      style={{ color: color1, height, background: "rgba(194, 100, 255, 0.5)" }}
      class="flex justify-center items-center relative inline-block w-full"
    >
      <div style={{ background: "rgba(194, 100, 255, 0.9)" }} class="absolute">
        <img
          style={{ objectFit: "cover", height }}
          src={image}
          width="100%"
          alt="..."
          class="max-w-full h-auto opacity-50 align-middle"
        />
      </div>
      {home && (
        <div>
          <Icon icon="home" size={18} color={color1} />
        </div>
      )}
      {text && (
        <div
          style={{ textAlign: "center", fontFamily: "arial" }}
          class="z-10 text-xl text-white font-hairline  "
        >
          {text}
        </div>
      )}
    </div>
  );
}
