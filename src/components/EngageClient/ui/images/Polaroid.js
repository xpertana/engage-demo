import React from "react";
import style from "./Polaroid.module.css";

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
    <a href="" title="This is a test">
      <div title="This is a test" class={style.polaroids}>
        <img src={image} />
      </div>
    </a>
  );
}
