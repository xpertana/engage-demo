import style from "./Image2.module.css";
import React from "react";

export default function ImageChip2(props) {
  return (
    <div class="relative">
      <div
        style={{
          // backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5)),url("${props.image}")`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("${props.image}")`,
          backgroundSize: "cover"
        }}
        class={style.module}
      >
        {props.text}
      </div>
    </div>
  );
}

// linear-gradient(rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5));
// <div class="module top">
//   <h2>Skyscrapers</h2>
// </div>

// <div class="module mid">
//   <h2>Skyscrapers</h2>
// </div>

// <br style="clear: both;">

// <div class="module cap">
//   <p>Skyscraper are really neat and stuff because they are tall.</p>
// </div>

// <div class="module lr">
//   <p>Skyscrapers sometimes have nicknames like jim or shim.</p>
// </div>
