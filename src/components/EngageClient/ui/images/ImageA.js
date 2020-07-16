import React from "react";

export default function ImageA(props) {
  let { size = 3, image, color1, color2, border } = props.args;

  const sizeMap = [
    ["w-full", "100%", 10, "h-32"],
    ["w-9/12", 400, 6, "h-24"],
    ["w-1/2 py-1", 300, 4, "h-20"],
    ["w-24", 200, 3, "h-16"],
    ["w-1/12", 150, 2, "h-12"]
  ];

  let [twc, wh, bw] = sizeMap[size - 1];

  if (image === "./random") image = "https://source.unsplash.com/random";

  const imageStyle = {
    width: wh,
    objectFit: "cover",
    borderColor: color1 || "black"
  };

  let rounded = props.args.rounded ? "rounded-lg" : "";
  let height = "h-auto";

  if (props.args.circle) {
    rounded = "rounded-full";
    imageStyle.height = wh;
  } else if (props.args.square) {
    rounded = "";
    imageStyle.height = wh;
  }

  // BORDER
  if (props.args.border) {
    const B = props.args.border === true ? 3 : props.args.border;
    imageStyle.borderWidth = sizeMap[B - 1][2];
  }
  // BANNER

  if (props.args.banner) {
    const B = props.args.banner === true ? 3 : props.args.banner;
    height = sizeMap[B - 1][3];
    return (
      <div class="flex justify-center items-center">
        <div class={`flex-1 ${twc}`}>
          {/* <div class="text-5xl text-black">width: {width}</div> */}
          {/* <div style={{ background: "rgba(204, 0, 255, 0.5)" }}> */}
          <img
            style={{
              objectFit: "cover"
            }}
            src={image}
            class={`max-w-full w-full ${height} align-middle`}
          />
          {/* </div> */}
        </div>
      </div>
    );
  }

  // regular image

  return (
    <div class="flex justify-center items-center flex-col">
      <div class={`flex-1 text-center`}>
        {/* <div class="text-5xl text-black">width: {width}</div> */}
        {/* <div style={{ background: "rgba(204, 0, 255, 0.5)" }}> */}
        <img
          style={imageStyle}
          src={image}
          class={`max-w-full ${rounded} align-middle`}
        />
        {/* </div> */}
      </div>
    </div>
  );
}
