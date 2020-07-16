import React from "react";
import Icon from "../ui/icons/IconA";
import FluentSourceLine from "./FluentSourceLine";
import Source from "./Source";

const TYPE = {
  text: "number",
  subtext: "integer or decimal number"
};

export default function RefType(props) {
  const { args } = props;
  const { item } = args;
  const type = item || TYPE;

  return (
    <div class="m-1 flex-col bg-gray-100 border rounded rounded-lg">
      <div class="flex p-2 border-b bg-teal-100 justify-between items-center">
        <div class="flex-1 p-2 text-3xl text-teal-800">{type.text}</div>
        <div class="flex-2 p-2 text-teal-800">{type.subtext}</div>
        <div class="px-6 text-2xl flex flex-inline justify-center items-center font-mono h-12 bg-teal-800 text-center rounded text-white">
          type
        </div>
      </div>
      <div class="flex px-2 justify-between items-center">
        <div class="text-white bg-teal-600 px-2 rounded">initializer</div>
        <div class="px-4 text-xl text-teal-800">random</div>
        <div class="px-4">random number</div>
        <div class="px-4 font-mono text-sm border bg-gray-200">
          new {type.text} {name} random 1 100
        </div>
      </div>
      <div class="flex px-2 justify-between items-center">
        <div class="text-white bg-teal-500 px-2 rounded">modifier</div>
        <div class="px-4 text-xl text-teal-800">roundup</div>
        <div class="px-4">rounds number up to nearest integer</div>
        <div class="px-4 font-mono">
          roundup {"{"}name{"}"}
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
