const NRE = require("named-js-regexp");
const TOKENSRE = NRE("(:<token>(@|\\+|&|%|!)[-a-z]+)", "g");

const input =
  "display @element @text-placeholder @kw-subcmd %icon &color !hide";
const tags = {
  "@": "required",
  "%": "optional",
  "&": "multiple",
  "!": "flag"
};

const types = {
  color: x => `#${x}`,
  ctx: x => `{${x}}`,
  flag: x => (x ? `!${x}` : ""),
  icon: x => `+${x}`,
  kw: x => x,
  num: x => x,
  text: x => `"${x}"`
};

module.exports = function() {
  let tokens = [];

  let R = TOKENSRE.exec(input);
  while (R) {
    const { token } = R.groups();
    const [base, suffix] = token.split("-");
    const name = suffix ? suffix : base.slice(1);
    const tag = tags[token[0]];
    const type = tag === "flag" ? "boolean" : base.slice(1);
    tokens.push({
      tag,
      name,
      type,
      template: x => types[type](x)
    });
    R = TOKENSRE.exec(input);
  }
  return tokens;
};
