import React from "react";

export default function AlertA(props) {
  const {
    title,
    text,
    icon,
    actions,
    color1 = "white",
    color2 = "gray"
  } = props;
  console.log(props);

  return (
    <div
      style={{ color: color1, backgroundColor: color2 }}
      class="w-full px-6 py-4 border-0 rounded relative mb-4"
    >
      <span class="text-xl inline-block mr-5 align-middle">
        <i class={`fas fa-${icon}`} />
      </span>
      <span class="inline-block align-middle mr-8">
        <b class="capitalize">ALERT</b> {text}
      </span>
      <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
        <span onClick={() => props.hideHandler()}>×</span>
      </button>
    </div>
  );
}
