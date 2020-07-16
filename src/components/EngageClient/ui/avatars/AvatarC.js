import React from "react";

export default function Round1(props) {
  const { image, flag } = props;
  return (
    <span class="inline-block relative">
      <img class="h-16 w-16 rounded-md" src={image} alt="" />
      {flag && (
        <span class="absolute top-0 right-0 block h-4 w-4 transform -translate-y-1/2 translate-x-1/2 rounded-full text-white shadow-solid bg-green-400"></span>
      )}
    </span>
  );
}
