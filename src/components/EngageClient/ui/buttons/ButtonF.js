import style from "./ButtonF.module.css";
import React from "react";

export default function Round1(props) {
  return (
    <button type="button" class={style.btn}>
      {props.text}
    </button>
  );
}
