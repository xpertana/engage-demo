import React from "react";
import Icon from "../ui/icons/IconA";

const iconMap = {
  success: <i class="fas fa-check"></i>,
  fail: <i class="fas fa-times"></i>,
  inprogress: <i class="fas fa-spinner fa-spin"></i>
};

const sizeMap = [["text-3xl"], ["text-2xl"], ["text-lg"], [""], ["text-sm"]];

export default function ShareNotice(props) {
  // if (!this.state.sharenotice) return <div></div>;
  const { args } = props;
  const {
    text = "step status",
    status = "inprogress",
    size = 3,
    color1 = "black",
    color2 = "red"
  } = args;

  const [twc] = sizeMap[size - 1];
  const icon = iconMap[status];

  return (
    <div
      class={`bg-gray-100 rounded mx-8 my-1 flex justify-between items-center`}
    >
      <div class="mx-2 text-gray-400">{iconMap[status]}</div>
      <div class={`flex-1 mx-2 text-gray-400 ${twc}`}>{text}</div>
    </div>
  );
}
