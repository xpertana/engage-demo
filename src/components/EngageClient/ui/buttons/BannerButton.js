import React from "react";
import Icon from "../icons/IconA";

export default function BannerButton(props) {
  const sizeMap = [
    ["h-16"],
    ["h-12 text-lg"],
    ["h-10 rounded"],
    ["h-8 rounded text-sm"],
    ["h-8 text-xs"]
  ];
  const {
    text,
    action,
    color1,
    color2,
    iconleft,
    iconright,
    size = 3,
    url
  } = props.args;

  const [twc] = sizeMap[size - 1];

  return (
    <span class="mx-2 my-1 flex justify-between text-center items-center">
      <button
        type="button"
        onClick={() =>
          props.handler({ directives: props.args.action.directives })
        }
        style={{ color: color1, backgroundColor: color2 }}
        class={`flex-1 hover:opacity-75 ${twc}`}
      >
        {iconleft && (
          <span class="pr-2">
            <Icon icon={iconleft} color={color1} size={16} />
          </span>
        )}
        {text}
        {iconright && (
          <span class="pl-2">
            <Icon icon={iconright} color={color1} size={16} />
          </span>
        )}
      </button>
    </span>
  );
}
