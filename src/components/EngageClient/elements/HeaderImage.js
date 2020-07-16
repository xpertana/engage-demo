import React from "react";

export default function HeaderImage(props) {
  const { args } = props;
  const { text, image } = args;
  return (
    <div
      style={{ height: 64, background: "rgba(194, 100, 255, 0.9)" }}
      class="flex justify-center items-center relative inline-block w-full"
    >
      <div style={{ background: "rgba(194, 100, 255, 0.9)" }} class="absolute">
        <img
          style={{ objectFit: "cover", height: 64 }}
          src="https://images.unsplash.com/photo-1590423456572-0fe39c8f62f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
          width="100%"
          alt="..."
          class="max-w-full h-auto opacity-50 align-middle"
        />
      </div>
      <div
        style={{ textAlign: "center", fontFamily: "arial" }}
        class="z-10 text-xl text-white font-hairline  "
      >
        {text}
      </div>
    </div>
  );
}
