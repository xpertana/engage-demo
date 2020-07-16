import React from "react";
import Icon from "../ui/icons/IconA";
import FluentSourceLine from "./FluentSourceLine";
import Source from "./Source";

export default function RefInfo(props) {
  return (
    <div class="m-1 flex-col bg-gray-100 border rounded rounded-lg">
      <div class="flex p-2 border-b bg-green-100 justify-between items-center">
        <div class="flex-1 p-2 text-3xl text-green-800">
          {" "}
          {"{"}user.name{"}"}
        </div>
        <div class="flex-2 p-2 text-teal-800">Gooten via ask</div>

        <div class="px-6 text-2xl flex flex-inline justify-center items-center font-mono h-12 bg-green-800 text-center rounded text-white">
          address
        </div>
      </div>
    </div>
  );
}

const template = {
  tag: "output",
  name: "Banner",
  value: "banner",
  icon: "monitor",
  variants: [
    {
      text: "On",
      subtext: "turns banner on",
      pattern: ["on", "^banner on$"]
    },
    {
      text: "Off",
      subtext: "turns banner off",
      pattern: ["off", "^banner off$"]
    },
    {
      text: "Clear",
      subtext: "clears banner text",
      pattern: ["clear", "^banner clear$"]
    },
    {
      text: "Set",
      subtext: "sets banner text",
      pattern: [
        "set",
        "^banner @text %action-banneraction %url-bannerlink &color"
      ]
    }
  ]
};
