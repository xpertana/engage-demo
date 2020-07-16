import React from "react";
import Icon from "../ui/icons/IconA";

export default function Continue(props) {
  const color = props.args.color1 || "white";
  const backgroundColor = props.args.color2 || "gray";
  const { size = 4, icon = "arrowright" } = props.args;

  return (
    <div className="mx-4 p-1 flex flex-inline justify-center items-center">
      <span class="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          onClick={() => props.handler({ directives: props.args.dir })}
          style={{ color, backgroundColor }}
          class={genSizeClass(size)}
        >
          {props.args.text}
          <span class="pl-2">
            <Icon icon={icon} color={color} size={16} />
          </span>
        </button>
      </span>
    </div>
  );
}

function genSizeClass(size, color) {
  switch (size) {
    case 1:
    case 2:
      return `inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:opacity-75 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`;
    case 3:
    case 4:
      return `inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:opacity-75 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`;
    case 5:
    case 6:
      return `inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:opacity-75 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`;
    case 7:
    case 8:
    case 9:
      return `inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:opacity-75 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`;
  }
}

// "inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-blue-600 hover:opacity-75 focus:outline-none focus:opacity-80 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
