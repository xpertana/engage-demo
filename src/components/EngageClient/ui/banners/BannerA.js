import React from "react";
import Icon from "../icons/IconA";

const sizeMap = [["text-xl"], ["text-xl"], [""], ["text-lg"], ["text-sm"]];

export default function BannerA(props) {
  const { args } = props;
  let {
    text,
    action,
    color1,
    color2,
    prev,
    font = {},
    icon,
    size = 3,
    next,
    link,
    linktag
  } = args;

  let color = color1 || "white";
  let backgroundColor = color2 || "gray";
  const [twc] = sizeMap[size - 1];

  if (prev)
    return (
      <div
        onClick={
          () => props.handler({ directives: [prev] }) // return
        }
        style={{ color, backgroundColor }}
        class={`py-1 h-10 w-full flex justify-between items-center ${twc}`}
      >
        <div class="mx-4">
          <Icon icon="chevron-left" size={20} color={color} />
        </div>
        <div class="flex-1">
          <div class="flex justify-center text-center items-center">
            {icon && (
              <div class="mr-2">
                <Icon icon={icon} size={24} color={color} />
              </div>
            )}
            <div class="">{text}</div>
          </div>
        </div>
        <div class="mx-4"> </div>
      </div>
    );
  else
    return (
      <div
        style={{ color, backgroundColor }}
        class={`py-1 h-10 w-full flex justify-between items-center ${twc}`}
      >
        <div class="mx-4"> </div>
        <div class="flex-1">
          <div class="flex justify-center text-center items-center">
            {icon && (
              <div class="mr-2">
                <Icon icon={icon} size={24} color={color} />
              </div>
            )}
            <div class="">{text}</div>
          </div>
        </div>
        <div class="mx-4"> </div>
      </div>
    );
}
