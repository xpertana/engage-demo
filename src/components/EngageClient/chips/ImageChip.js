import React from "react";
import Checkbox from "./Checkbox";
import Image from "../elements/Image";

export default function ImageChip(props) {
  const { multiple, name } = props.args;
  return (
    <div
      style={{
        backgroundPosition: "center"
      }}
    >
      {/* {checkmark && <Checkbox checked={selected} />} */}

      <Image args={props.args} />

      <div className={"m-1"}>{multiple && <Checkbox checked={selected} />}</div>

      {name && (
        <div
          className={`px-1 absolute bottom-0 text-centerleft-0 flex-1 w-full  rounded-b opacity`}
        >
          {name}
        </div>
      )}
    </div>
  );
}

const sizeMap = {
  small: {
    width: "w-20",
    height: "h-20",
    fontSize: "8px"
  },
  medium: {
    width: "w-24",
    height: "h-24",
    fontSize: "10px"
  },
  large: {
    width: "w-32",
    height: "h-32",
    fontSize: "14px"
  }
};
