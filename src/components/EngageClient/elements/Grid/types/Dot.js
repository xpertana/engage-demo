import React from "react";

const sizeMap = [[50], [40], [30], [30], [20]];

export default function Dot(props) {
  // return <div class="text-xs">{JSON.stringify(props, null, 2)}</div>;
  const { size = 3, item } = props;
  const S = sizeMap[size - 1];
  const [wh] = S;

  return (
    <div
      style={{
        width: wh,
        height: wh,
        backgroundColor: item.color
      }}
      onClick={() =>
        props.handler({
          action: "select",
          index: props.index,
          item: props.item
        })
      }
      class={`rounded-full bg-green-100`}
    ></div>
  );
}
