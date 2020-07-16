import React from "react";
import Icon from "../icons/IconA";

// const sizeMap = {
//   small: "mx-40 border-b",
//   medium: "mx-24 border-b",
//   large: "mx-4 border-b"
// };

const sizeMap = [3, 2, 1, 1, 1];

export default function Divider(props) {
  const {
    args: { color1 = "black", text, left, right, size = 3, cmd }
  } = props;

  const S = sizeMap[size - 1];

  // 3 = dashed, 2= dotted, 1 = regular
  const hrMap = {
    1: <hr style={{ borderColor: color1, borderWidth: `${S}px` }}></hr>,
    2: (
      <hr
        class="my-1"
        style={{
          border: `${S}px dotted ${color1}`,
          color: "#fff",
          borderStyle: "none none dotted",
          backgroundColor: "#fff"
        }}
      ></hr>
    ),
    3: (
      <hr
        class="my-1"
        style={{
          border: `${S}px dashed ${color1}`,
          borderColor: color1,
          borderStyle: "dashed"
        }}
      ></hr>
    )
  };

  return (
    <div>
      <div
        style={{ color: color1 }}
        className={`mx-4 flex justify-center items-center`}
      >
        {left && <Icon icon={left} size={24} color={color1} />}
        {text && <div class="mx-4">{text}</div>}
        {/* {JSON.stringify(props.args, null, 2)} */}
        {right && <Icon icon={right} size={24} color={color1} />}
      </div>
      <div class="w-full my-1">{hrMap[cmd]}</div>
    </div>
  );
}
