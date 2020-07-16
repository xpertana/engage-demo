import React from "react";
import Icon from "../icons/IconA";

export default function HeaderA(props) {
  const {
    args: { text, image, left, icon, color1 = "white", color2 = "gray" }
  } = props;

  if (true)
    return (
      <nav style={{ backgroundColor: color2 }} class="w-full">
        <div class="relative flex items-center justify-center h-10">
          <div
            onClick={() =>
              props.handler({ directives: [[7, { "40": 1, flow: "_home" }]] })
            }
          >
            <img class="block lg:hidden h-8 w-auto" src={image} alt="" />
          </div>
          <div
            onClick={() =>
              props.handler({ directives: [[7, { "40": 1, flow: "_pr" }]] })
            }
            style={{
              top: 0,
              right: 0,
              align: "right",
              fontSize: "1.2em",
              position: "fixed",
              bottom: "auto",
              left: 0,
              margin: "auto 92%"
            }}
            class="mt-2 "
          >
            <Icon icon="user" color={color1} size={20} />
          </div>
        </div>
      </nav>
    );
  else
    return (
      <nav style={{ backgroundColor: color2 }} class="w-full">
        <div class="relative flex items-center justify-center h-10">
          {/* <div class="w-1/2"> */}
          <img class="block lg:hidden h-8 w-auto" src={image} alt="" />
          {/* </div> */}
        </div>
      </nav>
    );
}
