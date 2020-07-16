import React from "react";

export default function Round1(props) {
  return (
    <button
      class="text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3  rounded-full outline-none focus:outline-none mr-1 mb-1"
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      {props.icon && <i class="fas fa-heart mr-4"></i>}
      {props.text}
    </button>
  );
}
