import style from "./Image3.module.css";
import React from "react";

export default function ImageChip2(props) {
  return (
    <div class="relative">
      <div
        style={{
          backgroundImage: `url("${props.image}")`
          // backgroundSize: "cover"
        }}
        class={style.module}
      >
        {props.text}
      </div>
    </div>
  );
}

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
