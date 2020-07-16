import React from "react";

// text, colorbase

export default function Badge(props) {
  return (
    <span
      class={`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium leading-5 bg-${props.colorbase}-100 text-${props.colorbase}-800`}
    >
      {props.text}
    </span>
  );
}
