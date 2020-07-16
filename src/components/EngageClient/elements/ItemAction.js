import React from "react";
import Icon from "../ui/icons/IconA";
import color2hex from "../lib/color2hex";

export default function ItemAction(pr) {
  // if (props.hide) return <div></div>;

  const args = {
    icon: "info",
    text: "if _choice is....",
    color1: color2hex("gray6")
  };

  return (
    <div className="my-1 px-2 flex flex justify-between items-center">
      <div class="mr-1 bg-gray-200 text-gray-600 rounded w-8 p-1 text-center">
        //
      </div>
      <div class="flex-1 flex jusitfy-between items-center rounded bg-blue-100">
        <div class="bg-blue-300 text-blue-800 rounded w-8 p-1 text-center">
          <Icon icon="branch" color={args.color1} size={14} />
        </div>
        <div class="pl-2 flex-1 text-sm text-blue-800">{args.text}</div>
      </div>
      <div class="ml-1 bg-gray-100 text-gray-600 rounded w-8 p-1 text-center">
        <Icon icon="arrowup" color={args.color1} size={14} />
      </div>
      <div class="ml-1 bg-gray-100 text-gray-800 rounded w-8 p-1 text-center">
        <Icon icon="arrowdown" color={args.color1} size={14} />
      </div>
      <div class="ml-2 bg-red-100 text-red-800 rounded w-8 p-1 text-center">
        <Icon icon="delete" size={14} />
      </div>
    </div>
  );
}
