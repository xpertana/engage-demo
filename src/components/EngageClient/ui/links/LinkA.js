// https://codepen.io/omarsherifs/pen/KGLYYW
import style from "./InputA.module.css";
import React from "react";

export default function Search1(props) {
  const { icon, text } = props;
  return (
    <button
      class="text-pink-500 background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1"
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      <i class="fas fa-heart"></i>
      {text}
    </button>
  );
}
