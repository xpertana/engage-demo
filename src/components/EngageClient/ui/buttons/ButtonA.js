import React from "react";
import Icon from "../icons/IconA";

export default function ButtonA(props) {
  const { args } = props;
  const color = args.color2 || "white";
  const backgroundColor = args.color1 || "gray";
  const { text, action, iconleft, iconright, size = 4, url } = args;

  // if we have a url we need to wrap in a tag?
  if (url)
    return (
      <a href={url}>
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            style={{ color, backgroundColor }}
            class={genSizeClass(size)}
          >
            {iconleft && (
              <span class="pr-2">
                <Icon icon={iconleft} color={color} size={16} />
              </span>
            )}
            {text}
            {iconright && (
              <span class="pl-2">
                <Icon icon={iconright} color={color} size={16} />
              </span>
            )}
          </button>
        </span>
      </a>
    );

  return (
    <span class="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        onClick={() =>
          props.handler({ directives: props.args.action.directives })
        }
        style={{ color, backgroundColor }}
        class={genSizeClass(size)}
      >
        {iconleft && (
          <span class="pr-2">
            <Icon icon={iconleft} color={color} size={16} />
          </span>
        )}
        {text}
        {iconright && (
          <span class="pl-2">
            <Icon icon={iconright} color={color} size={16} />
          </span>
        )}
      </button>
    </span>
  );
}

function genSizeClass(size, color) {
  switch (size) {
    case 5:
      return `inline-flex items-center px-3 py-2 border border-transparent text-xs leading-4 font-medium rounded-md hover:opacity-75 focus:outline-none active:bg-indigo-700 transition ease-in-out duration-150`;
    case 4:
      return `inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md hover:opacity-75 focus:outline-none active:bg-indigo-700 transition ease-in-out duration-150`;
    case 3:
      return `inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md hover:opacity-75 focus:outline-none active:bg-indigo-700 transition ease-in-out duration-150`;
    case 2:
      return `inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md hover:opacity-75 focus:outline-none active:bg-indigo-700 transition ease-in-out duration-150`;
    case 1:
      return `inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md hover:opacity-75 focus:outline-none active:bg-indigo-700 transition ease-in-out duration-150`;
  }
}
