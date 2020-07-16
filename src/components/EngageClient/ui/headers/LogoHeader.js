import React from "react";
import Icon from "../icons/IconA";

export default function HeaderA(props) {
  const {
    args: { text, image, left, color1 = "white", color2 = "lightslate" }
  } = props;

  return (
    <nav style={{ backgroundColor: color2 }} class="w-full">
      <div class="relative flex items-center justify-between h-12">
        {/* {left && (
            <div onClick={() => props.handler()} class="">
              <Icon icon={left[0]} size={20} color={color1}></Icon>
            </div>
          )} */}
        <div class="px-4">
          <img class="block lg:hidden h-8 w-auto" src={image} alt="" />
        </div>
        <div style={{ color: color1 }} class="flex-1">
          {text}
        </div>
        <div class="px-4">
          <Icon icon="user" color={color1} size={18} />
        </div>
      </div>
    </nav>
  );
}
