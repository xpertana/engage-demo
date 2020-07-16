import React from "react";
import Icon from "../ui/icons/IconA";

export default function ShareNotice(props) {
  // if (!this.state.sharenotice) return <div></div>;
  const { args } = props;
  const { ctxname, ctxvalue } = args;

  return (
    <div class="bg-gray-100 rounded mx-8 my-1 flex justify-between items-center">
      <div class="mx-2">
        <Icon icon="share" color="#ababab" size={18} />
      </div>
      <div class="flex-1 mx-2 text-sm text-gray-400">
        engage shared {ctxname} automatically
      </div>
    </div>
  );
}
