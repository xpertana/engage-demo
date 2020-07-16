import React from "react";
import Icon from "../ui/icons/IconA";

export default function BadgeElement(props) {
  if (props.hide) return <div></div>;
  return (
    <div className="rounded my-1 mx-4 p-2 text-blue-800 font-bold bg-blue-100 flex flex-inline justify-between items-center">
      <span class="px-2">
        <Icon icon="dotcircle" size={22} color="blue" />
      </span>
      <span class="flex-1">length</span>
      <span class="font-thin">
        <em>gets length of group</em>
      </span>
    </div>
  );
}
