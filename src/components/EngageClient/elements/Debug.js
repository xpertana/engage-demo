import React from "react";

export default function Error(props) {
  const {
    args: { text = "engage debug" }
  } = props;
  return (
    <div class="my-2 flex justify-between items-center bg-gray-100 text-gray-500">
      <div class="mx-2 bg-gray-300">
        <i class="fal fa-exclamation-triangle"></i>
      </div>
      <div class="flex-1 text-xs">
        <div>{text}</div>
        {props.args.ctxtext && <pre>{props.args.ctxtext}</pre>}
      </div>
    </div>
  );
}
