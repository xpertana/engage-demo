import React from "react";
// import InputWithAddon from "../../ui/InputWithAddon";
import Icon from "../icons/IconA";

const sizeMap = [
  [24, "text-xl"],
  [24, "text-xl"],
  [24, ""],
  [16, "text-sm"],
  [14, "text-xs"]
];

export default function InputA(props) {
  const {
    text,
    icon,
    size = 3,
    color1 = "gray",
    color2 = "#eeeeee"
  } = props.args;
  const placeholder = text || "Placholder";

  const [icsz, twc] = sizeMap[size - 1];

  return (
    <div class="mx-6 p-2 relative flex justify-between items-center">
      {icon && (
        <div class="z-10 font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-between w-8">
          <Icon color={color1} size={icsz} icon={icon} />
        </div>
      )}
      <input
        style={{ color: color1, backgroundColor: color2 }}
        type="text"
        onKeyPress={props.onKeyPress}
        onChange={props.onChange}
        value={props.value}
        placeholder={placeholder}
        class="px-2 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none shadow-outline w-full pl-10"
      />
    </div>
  );
}
