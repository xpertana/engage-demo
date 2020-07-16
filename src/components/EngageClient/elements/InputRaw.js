import React from "react";
import Icon from "../ui/icons/IconA";

export default function TextField(props) {
  const { args } = props;
  const { text, icon, color1 = "gray", color2 = "#eeeeee" } = args;
  const placeholder = text || "Placholder";
  const value = props.args.ctx.cv.v;

  return (
    <div class="mx-6 p-2 relative flex justify-between items-center">
      {icon && (
        <div class="z-10 font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-between w-8">
          <Icon color={color1} size={18} icon={icon} />
        </div>
      )}
      <input
        style={{ color: color1, backgroundColor: color2 }}
        type="text"
        value={value}
        placeholder={placeholder}
        class="px-2 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
      />
    </div>
  );
}
