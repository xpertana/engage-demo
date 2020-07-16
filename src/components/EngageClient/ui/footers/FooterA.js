import React from "react";
import Icon from "../icons/IconA";

// varieties of footer:
//   - text only
//   - one center action
//   - left / right actions

const sizeMap = [["text-xl"], ["text-xl"], [""], ["text-lg"], ["text-sm"]];

export default function FooterA(props) {
  let {
    text,
    action,
    icon,
    size = 3,
    iconleft,
    iconright,
    color1,
    color2,
    prev,
    next,
    left,
    center,
    right
  } = props.args;

  const [twc] = sizeMap[size - 1];

  switch (props.args.cmd) {
    case 3:
      // text only
      return (
        <div
          style={{ color: color1, backgroundColor: color2 }}
          class="py-1 w-full flex justify-between items-center"
        >
          <div class="flex-1 mx-2 text-center">{text}</div>
        </div>
      );

    case 4:
      // single button
      return (
        <div class={`w-full flex justify-between items-center ${twc}`}>
          <button
            onClick={() => props.handler({ directives: action.directives })}
            style={{ color: color1, backgroundColor: color2 }}
            type="button"
            class="flex-1 px-6 py-2 border border-transparent text-base leading-6 font-medium hover:opacity-75 focus:outline-none transition ease-in-out duration-150"
          >
            {iconleft && (
              <span class="mr-2">
                <Icon color={color1} size={22} icon={iconleft} />
              </span>
            )}
            <span class={`pl-2`}>{text}</span>
            {iconright && (
              <span class="ml-2">
                <Icon color={color1} size={22} icon={iconright} />
              </span>
            )}
          </button>
        </div>
      );

    case 7:
      // human help
      text = text || "Need help? Click Here";

      return (
        <div class="w-full flex justify-between items-center">
          <button
            onClick={() => props.handler({ directives: "" })}
            style={{ color: color1, backgroundColor: color2 }}
            type="button"
            class="flex-1 px-6 py-2 border border-transparent text-base leading-6 font-medium hover:opacity-75 focus:outline-none transition ease-in-out duration-150"
          >
            {icon && (
              <span class="mr-2">
                <Icon color={color1} size={22} icon={icon} />
              </span>
            )}
            <span class="pl-2">{text}</span>
          </button>
        </div>
      );

    case 5:
    case 8:
      // double/triple action
      return (
        <div class="w-full flex justify-between items-center">
          <button
            onClick={() => props.handler({ directives: left.dir })}
            type="button"
            class="flex-1 inline-flex items-center px-6 py-2 border border-transparent text-base leading-6 font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          >
            {left.ic && <Icon color="white" size={24} icon={left.ic} />}
            {left.tx && <span class="px-2">{left.tx}</span>}
          </button>
          {center && (
            <button
              onClick={() => props.handler({ directives: center.dir })}
              type="button"
              class="flex-1 inline-flex items-center px-6 py-2 border border-transparent text-base leading-6 font-medium text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150"
            >
              {center.ic && <Icon color="white" size={24} icon={center.ic} />}
              {center.tx && <span class="px-2">{center.tx}</span>}
            </button>
          )}
          <button
            onClick={() => props.handler({ directives: right.dir })}
            type="button"
            class="flex-1 inline-flex items-center px-6 py-2 border border-transparent text-base leading-6 font-medium text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150"
          >
            {right.ic && <Icon color="white" size={24} icon={right.ic} />}
            {right.tx && <span class="px-2">{right.tx}</span>}
          </button>
        </div>
      );
    case 6:
      // PREV / NEXT!
      // return <div>{JSON.stringify(props.args)}</div>;
      return (
        <div class="w-full flex justify-between items-center">
          {prev && (
            <button
              onClick={() => props.handler({ directives: [prev] })}
              type="button"
              class="flex-1 inline-flex items-center px-6 py-2 border border-transparent text-base leading-6 font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >
              <Icon color="white" size={24} icon="chevronleft" />
              <span class="px-2">Previous</span>
            </button>
          )}
          {next && (
            <button
              onClick={() => props.handler({ directives: [next] })}
              type="button"
              class="flex-1 inline-flex items-center px-6 py-2 border border-transparent text-base leading-6 font-medium text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150"
            >
              <span class="px-2">Next</span>
              <Icon color="white" size={24} icon="chevronright" />
            </button>
          )}
        </div>
      );
    default:
      return <div>FOOTER ERROR</div>;
  }
}
