import React from "react";

export default function BadgeB(props) {
  
  const colorbase = props.colorbase || "gray"


  return (
    <span class={`m-1 text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-${colorbase}-600 bg-${colorbase}-200 uppercase last:mr-0 mr-1`}>
      {props.text}
    </span>
  );
}
