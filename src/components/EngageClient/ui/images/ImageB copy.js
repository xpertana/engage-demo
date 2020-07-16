import React from "react";

export default function CircleImage(props) {
  const { image, text, color } = props;

  const divStyle = {
    width: 200,
    height: 200,
    position: "relative",
    overflow: "hidden",
    borderRadius: "50%",
    borderColor: "#444"
  };

  const imageStyle = {
    display: "inline",
    margin: "0 auto",
    height: "100%",
    width: "auto"
  };

  return (
    <div style={{ ...divStyle, borderWidth: 5 }}>
      <img style={{ ...imageStyle }} src={image} />
    </div>
  );
}
