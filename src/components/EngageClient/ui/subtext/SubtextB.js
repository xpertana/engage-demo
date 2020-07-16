import React from "react";
export default function TitleA(props) {
  const { title, color = "black" } = props;
  return <div class="text-2xl">{title}</div>;
}
