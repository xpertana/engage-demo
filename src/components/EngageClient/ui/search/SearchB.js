// https://codepen.io/omarsherifs/pen/KGLYYW
import style from "./SearchB.module.css";
// const { Search } = require("react-feather");
import React from "react";

export default function Search1(props) {
  const { placeholder, value } = props;
  return (
    <div class={style.wrap}>
      <div class={style.search}>
        <input
          type="text"
          class={style.searchTerm}
          placeholder={placeholder}
          value={value}
        />
        <button type="submit" class={style.searchButton}>
          {/* <Search /> */}
        </button>
      </div>
    </div>
  );
}
