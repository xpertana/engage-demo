import React from "react";

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
    <div style={{ ...divStyle, borderWidth: 5, borderRadius: 10 }}>
      <img style={{ ...imageStyle }} src={image} />
    </div>
  );
}
