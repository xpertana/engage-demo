import React from "react";

export default function CircleImage(props) {
  const { image, color, border = 5 } = props;

  return (
    <div class="flex flex-wrap justify-center">
      <div class="w-6/12 sm:w-4/12 px-4">
        <img
          src={props.image}
          alt="..."
          class="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
        />
      </div>
    </div>
  );
}
