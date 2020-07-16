import React from "react";
import Icon from "../ui/icons/IconA";

export default function BadgeElement(props) {
  if (props.hide) return <div></div>;
  return (
    <div className="my-1 text-red-800 text-xs font-bold bg-red-100 flex flex-inline justify-between items-center">
      <span class="px-2">
        <Icon icon="pause" size={14} color="darkred" />
      </span>
      <span>FLOW BREAK</span>
      <span class="inline-flex rounded-md shadow-sm">
        <button
          onClick={() => props.handler({ directives: [[54]] })}
          type="button"
          class="inline-flex items-center px-1 py-2 border border-transparent text-xs leading-4 font-medium text-red-800 bg-red-200 hover:bg-red-300 focus:outline-none focus:border-red-300 focus:shadow-outline-red active:bg-red-300 transition ease-in-out duration-150"
        >
          CONTINUE
          <Icon icon="resume" size={18} color="darkred" />
        </button>
      </span>
    </div>
  );
}
