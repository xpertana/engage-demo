import React from "react";
// import { Calendar } from "react-feather";

//const Checkbox = require("./Checkbox");
export default function DateChip({
  name = "n/a",
  size = "medium",
  color = "gray-400",
  textColor = "gray-800",
  multiple = true,
  selected = false
}) {
  const { base, colorSelected, colorBase, colorText } = colorBreakdown(color);

  let C = colorBase;
  let iconOpacity = 25;
  let T = colorText;
  if (selected) {
    iconOpacity = 75;
    C = colorSelected;
  }

  return (
    <div
      className={`mb-1 ml-1 flex w-full bg-${C} p-1 items-center justify-between rounded rounded-lg`}
    >
      {/* {checkmark && <Checkbox checked={selected} />} */}
      <div className={`p-1 opacity-${iconOpacity}`}>
        {/* <Calendar size={28} color={base} /> */}
      </div>
      <div className={`flex-1 text-${textColor} opacity-${iconOpacity}`}>
        {name}
      </div>
      <span className="p-1"></span>
    </div>
  );
}

function colorBreakdown(color) {
  const [base, l] = color.split("-");
  const level = l ? parseInt(l) : 400;
  const colorSelected = `${base}-${level + 100}`;
  const colorText = `${base}-${level + 400}`;
  const colorBase = `${base}-${level}`;
  return { base, colorText, colorSelected, colorBase };
}
