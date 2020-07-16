import React from "react";

export default function Image(props) {
  const { item, qualifier } = props;
  let { image, shape = "normal", border = "yes", color = "#292929" } = item;

  const B = borderMap[border];

  const size = qualifier;

  switch (shape) {
    case "circle":
      return (
        <div style={{ textAlign: "center" }}>
          <CircleImage image={image} size={size} border={B} color={color} />
        </div>
      );

    case "square":
      return <SquareImage image={image} size={size} border={B} />;
    case "wide":
      return <WideImage image={image} size={size} border={B} />;
    case "rounded":
      return <RoundedImage image={image} size={size} border={B} />;
    case "normal":
    default:
      return <NormalImage image={image} size={size} border={B} />;
  }
}

const sizeMap = {
  tiny: "70px",
  small: "150px",
  medium: "300px",
  large: "400px",
  huge: "100%"
};

const brSizeMap = {
  tiny: "5px",
  small: "5px",
  medium: "15px",
  large: "20px",
  huge: "20px"
};

const borderMap = {
  no: 0,
  thin: 2,
  normal: 10,
  wide: 20
};

function NormalImage(props) {
  const { image, size, border, color } = props;

  const divStyle = {
    width: sizeMap[size],
    position: "relative",
    overflow: "hidden",
    borderColor: color
  };

  const imageStyle = {
    display: "inline",
    margin: "0 auto",
    height: "100%",
    width: "auto"
  };

  return (
    <div className="m-4 flex flex-inline justify-center items-center">
      <div style={{ ...divStyle, borderWidth: border }}>
        <img src={image} />
      </div>
    </div>
  );
}

function WideImage(props) {
  const { image } = props;
  return (
    <div
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        height: "auto"
      }}
    >
      <img src={image} />
    </div>
  );
}

function CircleImage(props) {
  const { image, size, border, color } = props;

  const divStyle = {
    width: sizeMap[size],
    height: sizeMap[size],
    position: "relative",
    overflow: "hidden",
    borderRadius: "50%",
    borderColor: color
  };

  const imageStyle = {
    display: "inline",
    margin: "0 auto",
    height: "100%",
    width: "auto"
  };

  return (
    <div style={{ ...divStyle, borderWidth: border }}>
      <img style={{ ...imageStyle }} src={image} />
    </div>
  );
}

function SquareImage(props) {
  const { image, size, border, color } = props;

  const divStyle = {
    width: sizeMap[size],
    height: sizeMap[size],
    position: "relative",
    overflow: "hidden",
    borderColor: color
  };

  const imageStyle = {
    display: "inline",
    margin: "0 auto",
    height: "100%",
    width: "auto"
  };

  return (
    <div style={{ ...divStyle, borderWidth: border }}>
      <img style={{ ...imageStyle }} src={image} />
    </div>
  );
}

function RoundedImage(props) {
  const { image, size, border, color } = props;

  const divStyle = {
    width: sizeMap[size],
    height: sizeMap[size],
    position: "relative",
    overflow: "hidden",
    borderColor: color
  };

  const imageStyle = {
    display: "inline",
    margin: "0 auto",
    height: "100%",
    width: "auto"
  };

  return (
    <div
      style={{
        ...divStyle,
        borderWidth: border,
        borderRadius: brSizeMap[size]
      }}
    >
      <img style={{ ...imageStyle }} src={image} />
    </div>
  );
}
