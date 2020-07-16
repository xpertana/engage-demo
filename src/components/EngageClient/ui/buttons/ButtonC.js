import style from "./ButtonC.module.css";

import React from "react";

export default function ButtonC(props) {
  return (
    <button type="button" class={style.btn}>
      {props.text}
    </button>
  );
}
