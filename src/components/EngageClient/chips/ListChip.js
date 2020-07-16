import React from "react";
import Checkbox from "./Checkbox";

export default function ImageChip({
  name = "TBD",
  size = "medium",
  image,
  color = "gray-400",
  textColor = "gray-800",
  priceColor = "blue-600",
  description,
  price,
  multiple = false,
  selected = false,
  border = "border"
}) {
  const { base, colorSelected, colorBase, colorText } = colorBreakdown(color);
  const { width, height, fontSize, descripFontSize } = sizeMap[size];

  let C = colorBase;
  let opacity = 75;
  let T = colorText;
  if (selected) {
    opacity = 100;
    C = colorSelected;
  }

  return (
    <div className={`w-full mb-1 flex justify-center items-center`}>
      <div
        style={{
          backgroundImage: `url("${image}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
        className={`${width} ${height} rounded-l`}
      ></div>
      <div
        style={{ fontSize }}
        className={`px-2  ${height} bg-${colorBase} flex-1 text-${colorText} opacity-${opacity}`}
      >
        <div className={`text-left font-semibold`}> {name}</div>
        <div className="px-2 font-thin" style={{ fontSize: descripFontSize }}>
          {description}
        </div>
      </div>

      <div className={`bg-${colorBase} ${height} text-center p-1 rounded-r`}>
        {multiple && <Checkbox checked={selected} />}
        {price && <PricePill price={price} priceColor={priceColor} />}
      </div>
    </div>
  );
}

const sizeMap = {
  small: {
    width: "w-12",
    height: "h-12",
    fontSize: "14px",
    descripFontSize: "10px"
  },
  medium: {
    width: "w-20",
    height: "h-20",
    fontSize: "16px",
    descripFontSize: "12px"
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

function PricePill({ price, priceColor }) {
  return (
    <div className={`rounded bg-${priceColor} text-white p-1`}>${price}</div>
  );
}
