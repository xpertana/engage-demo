import CODES from "./CODES";
import ELEMENTS from "./ELEMENTS";
const ERROR = 98;
const UNKNOWN = 99;

module.exports = {
  encode: (elem, code, value) => {
    const ELEM = ELEMENTS[elem.toUpperCase()];
    const CODE = CODES[code.toUpperCase()];
    const E = ELEM ? ELEM : UNKNOWN;
    const C = CODE ? CODE : UNKNOWN;
    let V = "";
    if (value) {
      V = Number(value);
      if (!V) V = ERROR;
    }
    return Number(`${E}${C}${V}`);
  },
  breakdown,
  decode: stylecode => {
    const [e, c, value] = breakdown(stylecode);
    const elem = LU_ELEMENTS[e];
    const code = LU_CODES[c];
    return { elem, code, value };
  },
  ERROR,
  UNKNOWN
};

function breakdown(stylecode) {
  const S = String(stylecode);
  const elem = Number(S.slice(0, 2));
  const code = Number(S.slice(2, 4));
  let V = null;
  if (S.length > 4) {
    V = Number(S.slice(4));
    if (!V) V = ERROR;
  }
  return [elem, code, V];
}

// create reverse lookup obj LU_ELEMENTS
const ELEMKEYS = Object.keys(ELEMENTS);
const LU_ELEMENTS = {};
ELEMKEYS.forEach(ek => {
  const ev = ELEMENTS[ek];
  LU_ELEMENTS[ev] = ek.toLowerCase();
});

// create reverse lookup obj LU_CODES
const CODEKEYS = Object.keys(CODES);
const LU_CODES = {};
CODEKEYS.forEach(k => {
  const v = CODES[k];
  LU_CODES[v] = k.toLowerCase();
});
