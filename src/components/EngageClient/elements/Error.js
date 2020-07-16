import React from "react";

export default function Error(props) {
  const {
    args: { text = "this is an engage run time error" }
  } = props;
  return (
    <div class="my-2 flex justify-between items-center bg-red-100 text-red-800">
      <div class="mx-2">
        <i class="far fa-exclamation-triangle"></i>
      </div>
      <div class="flex-1 text-xs">{text}</div>
    </div>
  );
}
