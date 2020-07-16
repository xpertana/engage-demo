import React from "react";

export default function Card(props) {
  if (props.hidden) return <div></div>;
  return (
    <div class="mt-1 bg-white overflow-hidden shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">{props.children}</div>
    </div>
  );
}
