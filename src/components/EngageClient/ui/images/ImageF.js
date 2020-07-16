import React from "react";
import style from "./ImageF.module.css";

export default function CircleImage(props) {
  const { image, text, color, border = 5 } = props;

  const divStyle = {
    width: 200,
    height: 200,
    position: "relative",
    overflow: "hidden",
    borderColor: "#444"
  };

  const imageStyle = {
    display: "inline",
    margin: "0 auto",
    height: "100%",
    width: "auto"
  };

  return (
    <div>
      <img class={style.imagedropshadow} src={image} />
    </div>
  );
}
