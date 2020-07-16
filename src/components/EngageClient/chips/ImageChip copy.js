import React from "react";
import Checkbox from "./Checkbox";
import Image from "../elements/Image";

export default function ImageChip({
  name = "n/a",
  size = "medium",
  image,
  color = "gray-400",
  textColor = "gray-800",
  multiple = true,
  selected = false,
  border = true
}) {
  const { base, colorSelected, colorBase, colorText } = colorBreakdown(color);
  const { width, height, fontSize } = sizeMap[size];

  let C = colorBase;
  let opacity = 75;
  let T = colorText;
  if (selected) {
    opacity = 100;
    C = colorSelected;
  }

  return (
    <div
      style={{
        backgroundImage: `url("${image}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      className={`relative mb-1 ml-1 ${border} ${width} ${height} bg-${C} p-1 rounded`}
    >
      {/* {checkmark && <Checkbox checked={selected} />} */}

      <div className={`${width} ${height}`}>
        {multiple && <Checkbox checked={selected} />}
      </div>

      {name && (
        <div
          style={{ fontSize }}
          className={`px-1 absolute bottom-0 text-center bg-${colorBase} left-0 flex-1 w-full text-${colorText} rounded-b opacity-${opacity}`}
        >
          {name}
        </div>
      )}
    </div>
  );
}

const sizeMap = {
  small: {
    width: "w-20",
    height: "h-20",
    fontSize: "8px"
  },
  medium: {
    width: "w-24",
    height: "h-24",
    fontSize: "10px"
  },
  large: {
    width: "w-32",
    height: "h-32",
    fontSize: "14px"
  }
};

function colorBreakdown(color) {
  const [base, l] = color.split("-");
  const level = l ? parseInt(l) : 400;
  const colorSelected = `${base}-${level + 100}`;
  const colorText = `${base}-${level + 400}`;
  const colorBase = `${base}-${level}`;
  return { base, colorText, colorSelected, colorBase };
}
