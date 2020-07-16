import React from "react";

const pattern = "^forget @ctx";

export default function FluentSourceLine(props) {
  const { pattern = ["ctx", "^add @ctx to @ctx-target"] } = props.args;

  return (
    <div class="flex p-2">
      <div class="font-bold text-blue-800 mr-1">{pattern[1]}</div>
    </div>
  );

  return (
    <div class="flex p-2 text-xl">
      <div class="font-bold mr-1">display</div>
      <div class="text-gray-300 text-hairline italic mr-1">element</div>
      <div class="text-heavy mr-1">element</div>
      <div class="text-heavy text-gray-400 mr-1">
        {"{"}ctx{"}"}
      </div>
      <div class="text-heavy">"</div>
      <div class="text-heavy text-gray-300 mr-1 italic">text to display</div>
      <div class="text-heavy mr-1">"</div>
      <div class="text-heavy mr-1 text-blue-700">+user</div>
      <div class="text-heavy mr-1 text-blue-700">!hide</div>
      <div class="text-heavy mr-1 text-blue-700">!wait</div>
      <div class="text-heavy mr-1 text-blue-700">#red3</div>
      <div class="text-heavy mr-1 text-blue-700">#blue8</div>
    </div>
  );
}
