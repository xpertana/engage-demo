// https://codepen.io/omarsherifs/pen/KGLYYW
import style from "./SearchA.module.css";
// const { Search } = require("react-feather");

import React from "react";

export default function Search1(props) {
  const { placeholder, value } = props;
  return (
    <div class={style.searchBox}>
      <input
        class={style.searchInput}
        type="text"
        name=""
        placeholder={placeholder}
        value={value}
      />
      <button class={style.searchButton} href="#">
        {/* <Search /> */}
      </button>
    </div>
  );
}
