import React from "react";
import Icon from "../ui/icons/IconA";
import FluentSourceLine from "./FluentSourceLine";
import Source from "./Source";

const FLOP1 = {
  tag: "output",
  name: "Alert",
  subtext: "Alert user via some magical means. avavkardarva....",
  value: "screen",
  icon: "bell",
  variants: [
    {
      pattern: ["main", "^action @kw-name @action"] // suffix:
    }
  ]
};

export default function FluentRef(props) {
  const { args } = props;
  const flop = args.item || FLOP1;

  return (
    <div class="m-4 flex-col bg-gray-50 border rounded rounded-md">
      <div class="flex px-2 border-b bg-blue-100 justify-between items-center">
        <div class="text-blue-700">
          <Icon color={"#2c5282"} icon={"flop"} />
        </div>
        <div class="text-blue-700 text-3xl">{flop.text}</div>

        <div class="flex-2 text-sm text-blue-700 text-center">
          {flop.subtext}
        </div>
      </div>
      {flop.variants.map(v => (
        <div class="flex px-4 items-center">
          <div class="flex-1">
            <FluentSourceLine variant={v} />
          </div>
          <div class="text-gray-500">{v.text}</div>
        </div>
      ))}

      {flop.params && (
        <div>
          <div class="px-2 bg-gray-200 uppercase font-thin">parameters</div>
          {showParams(flop)}
        </div>
      )}
      <div class="bg-blue-700 text-blue-200">fluent operation</div>

      {/* <div class="px-2 bg-gray-200 uppercase font-thin">Examples</div>
      <div class="p-2 font-mono">
        <Source args={{ text: flop.example }} />
      </div> */}
    </div>
  );
}

const showParams = flop =>
  flop.params.map(p => (
    <div class="flex px-2 items-center">
      <div class="px-4 text-xl font-bold">{p.text}</div>
      <div class="px-4">{p.subtext}</div>
    </div>
  ));
