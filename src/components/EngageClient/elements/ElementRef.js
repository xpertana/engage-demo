import React from "react";
import FluentSourceLine from "./FluentSourceLine";
import Source from "./Source";

import element from "./index";

const ELEM = {
  text: "qrcode",
  subtext: "Displays a QR code",
  variants: [
    {
      text: "qrcode {item}",
      example: `qrcode "Hello"`,
      args: { text: "hello" }
    },
    {
      text: "using text",
      example: `display icon "user"`,
      args: { icon: "user" }
    }
  ]
};

const ELEM2 = {
  text: "icon",
  subtext: "Displays an Icon",
  variants: [
    {
      text: "icon +iconname",
      example: `display icon +home`,
      args: { icon: "home" }
    },
    {
      text: "using text",
      example: `display icon "user"`,
      args: { icon: "user" }
    }
  ]
};

const ELEM3 = {
  text: "divider",
  subtext: "Displays a section divider",
  variants: [
    {
      text: "a",
      example: `a`,
      args: { icon: "home", variant: "d" }
    }
  ]
};

export default function RefElement(props) {
  const { args } = props;
  const elem = args.data || ELEM;

  return (
    <div class="m-4 flex-col bg-gray-100 border rounded rounded-lg">
      <div class="flex p-2 border-b bg-indigo-100 justify-between items-center">
        <div class="flex-1 p-2 text-3xl text-indigo-800">{elem.text}</div>
        <div class="flex-2 p-2 text-indigo-800 content-left">
          {elem.subtext}
        </div>
        <div class="px-6 text-2xl flex flex-inline justify-center items-center font-mono h-12 bg-indigo-800 text-center rounded text-white">
          elem
        </div>
      </div>
      {elem.variants.map(ex => (
        <div class="flex flex-col px-2 justify-between items-center border-b">
          <div class="px-4 text-xl text-indigo-800">
            display {ex.text} {ex.subtext}{" "}
          </div>

          <div>{element[elem.text](ex)}</div>
          <div class="px-4 font-mono bg-gray-200 border text-sm">
            {ex.example}
          </div>
        </div>
      ))}
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
