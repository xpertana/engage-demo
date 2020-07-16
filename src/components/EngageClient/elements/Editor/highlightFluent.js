import React from "react";

const NRE = require("named-js-regexp");
const LINE = NRE("(:<first>\\S+) ( (:<rest>.*))*");
const TEXT = NRE(`(:<x>".*")`, "g");
const ACTIONS = NRE(`(:<x>\\[.*\\]?)`, "g");
const ICON = NRE(`(:<pre>.*)(:<icon>\\+\\S+)(:<post>.*)`);
const CTX = NRE(`(:<ctx>{\\S+})`);
const COMMENT = NRE("^//.*");
const MARKLINE = NRE("^(:<label>[_a-zA-Z]+):$");
const NUMBER = NRE("[0-9%\\+\\.]+");
const TAGS = NRE("(:<tag>@t[0-9]+)");

const RESERVEDWORDS = {
  to: 1,
  new: 1,
  into: 1,
  using: 1
};

const { flops, icons } = require("@xpertana/engage-flowbuild");

const decorate = {
  icon: x => <span class="text-teal-400">{x}</span>,
  partial: x => [<span class="text-gray-400">{x}</span>, <br />],
  ctx: x => <span class="text-purple-400">{x}</span>,
  resword: x => <span class="text-green-400">{x}</span>,
  number: x => <span class="text-orange-400">{x}</span>,
  flop: x => [<span class="text-green-400">{x}</span>, <br />],
  error: x => [<span class="text-red-400">{x}</span>, <br />],
  comment: x => [<span class="text-gray-400">{x}</span>, <br />],
  mark: x => [<span class="text-blue-400 bg-blue-100">{x}</span>, <br />],
  plain: x => [<span class="text-gray-600">{x}</span>, <span>ok</span>, <br />],
  valid: x => [<span class="text-black">{x}</span>, <br />]
};

const FLOPS = {};
const ICONS = {};
flops.forEach(f => (FLOPS[f.text.toLowerCase()] = 1));
icons.forEach(f => (ICONS[f.text.toLowerCase()] = 1));

export default function highlightFluent(text) {
  let R;
  let output = [];
  const lines = text.split("\n");
  console.log(lines);
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let tnum = 0;
    const tags = {};

    // full lines....
    if (line === "") {
      output.push([<br />]);
      continue;
    }

    // todo we will need to handle block mode for set ....

    // comment line?
    R = COMMENT.exec(line);
    if (R) {
      output.push(decorate.comment(line));
    } else if ((R = MARKLINE.exec(line))) {
      output.push(decorate.mark(line));
    } else {
      R = LINE.exec(line);
      const partial = R && R.groups().first;
      if (partial) {
        if (FLOPS[R.groups().first]) {
          // we have a valid first word...decorate more!

          // tokenize...
          // const words = line.split(" ")

          let lineout = [<span>{line}</span>, <br />];
          // CTX
          R = ICON.exec(line);
          if (R) {
            const { pre, icon, post } = R.groups();
            lineout = [
              <span>{pre}</span>,
              <span class="text-purple-500">{icon}</span>,
              <span>{post}</span>,
              <br />
            ];
          }
          output.push(lineout);
        } else output.push(decorate.error(line));
      } else output.push(decorate.partial(line));
      continue;
    }
  }
  return output;
}
