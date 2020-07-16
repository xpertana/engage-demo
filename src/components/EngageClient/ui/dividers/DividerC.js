import React from "react";
import style from "./DividerC.module.css";

export default function DividerC(props) {
  const { text, color = "#ddd" } = props;
  const mark = text ? text : "✶";
  return (
    <div class={style.astrodivider}>
      <div class={style.astrodividermask}></div>
      <span>
        {/* <i>&#10038;</i> */}
        <i>{mark}</i>
      </span>
    </div>
  );
}
