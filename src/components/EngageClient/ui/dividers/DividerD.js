import React from "react";
import style from "./DividerD.module.css";

export default function DividerC(props) {
  const { text, color = "#ddd" } = props;
  return (
    <div class={style.hdivider}>
      <div class={style.hdividershadow}></div>
      {text && (
        <div class={style.hdividertext}>
          <i class={style.hdividertexti}>{text}</i>
        </div>
      )}
    </div>
  );
}
