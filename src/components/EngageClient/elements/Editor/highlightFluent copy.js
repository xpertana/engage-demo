import React from "react";

const NRE = require("named-js-regexp");
const LINE = NRE("^(:<first>\\S+)( (:<rest>.*))*");
const TEXT = NRE(`(:<x>".*")`, "g");
const ACTIONS = NRE(`(:<x>\\[.*\\]?)`, "g");
const ICON = NRE(`\\+(:<icon>\\S+)`);
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
  color: x => <span class="text-purple-400">{x}</span>,
  ctx: x => <span class="text-purple-400">{x}</span>,
  resword: x => <span class="text-green-400">{x}</span>,
  number: x => <span class="text-orange-400">{x}</span>,
  flop: x => <span class="text-blue-400">{x}</span>,
  error: x => <span class="text-red-400">{x}</span>,
  comment: x => [<span class="text-gray-400">{x}</span>, <br />],
  mark: x => [<span class="text-blue-400 bg-blue-100">{x}</span>, <br />],
  plain: x => [<span class="bg-blue-100">{x}</span>, <br />]
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
    const line = lines[i];
    let tnum = 0;
    const tags = {};

    // empty lines....
    if (line === "") {
      output.push([<br />]);
      continue;
    }

    // comment line?
    R = COMMENT.exec(line);
    if (R) {
      output.push(decorate.comment(line));
    } else if ((R = MARKLINE.exec(line))) {
      output.push(decorate.mark(line));
    } else {
      output.push(decorate.plain(line));
      continue;
      const lineout = [];
      // parse first word...
      R = LINE.exec(line);
      if (R) {
        let { first, rest } = R.groups();
        if (FLOPS[first]) lineout.push(decorate.flop(first));
        else lineout.push(decorate.error(first));

        continue;

        // deal with rest...

        // TEXT
        R = TEXT.exec(rest);
        while (R) {
          const x = R.groups().x;
          tags[`@t${tnum}`] = <span class="text-blue-200">{x}</span>;
          rest = rest.replace(x, `@t${tnum}`);
          tnum++;
          R = TEXT.exec(rest);
        }
        // ACTIONS
        R = ACTIONS.exec(rest);
        while (R) {
          const x = R.groups().x;
          tags[`@t${tnum}`] = <span class="text-green-200">${x}</span>;
          rest = rest.replace(x, `@t${tnum}`);
          tnum++;
          R = ACTIONS.exec(rest);
        }

        // now we just word split and analyze
        const words = rest.split(" ");
        console.log("words:");
        console.log(words);

        for (let i = 0; i < words.length; i++) {
          // icon
          R = ICON.exec(words[i]);
          if (R) {
            const { icon } = R.groups();
            if (ICONS[icon]) lineout.push(decorate.icon(words[i]));
            else lineout.push(decorate.error(words[i]));
          } else if (words[i][0] === "#")
            lineout.push(decorate.color(words[i]));
          else if (RESERVEDWORDS[words[i]])
            lineout.push(decorate.resword(words[i]));
          else if (CTX[words[i]]) lineout.push(decorate.ctx(words[i]));
          else if (TAGS.exec(words[i])) {
            // console.log(words[i]);
            lineout.push(tags[words[i]]);
          } else if (NUMBER.exec(words[i]))
            lineout.push(decorate.number(words[i]));
          else {
            console.log("here:");
            lineout.push(<span>{words[i]}</span>);
          }
        }
        output.push(...lineout);
      }
    }
  }
  return output;
}
