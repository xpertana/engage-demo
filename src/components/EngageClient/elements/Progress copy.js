import React from "react";

export default function ProgressBar(props) {
  const { color = "green-400", value, showValue = false } = props.args;
  return (
    <div className="shadow w-full bg-grey-100">
      <div
        className={`bg-${color} text-xs leading-none py-1 text-center text-white`}
        style={{ width: `${value}%` }}
      >
        {showValue && <span>{value}%</span>}
      </div>
    </div>
  );
}
