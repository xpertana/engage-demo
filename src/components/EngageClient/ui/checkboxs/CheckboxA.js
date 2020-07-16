import style from "./CheckboxA.module.css";

import React from "react";

export default function Round1(props) {
  return (
    <label class={style.container}>
      {props.text}
      <input type="checkbox" checked="checked" />
      <span class={style.checkmark}></span>
    </label>
  );
}
