import style from "./ButtonG.module.css";
import React from "react";

export default function Round3(props) {
  return (
    <button type="button" class={style.btn}>
      {props.text}
    </button>
  );
}
