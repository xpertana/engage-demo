import BASECOLORS from "./BASECOLORS";
//import Color from "color";
/**
 * engage color to hex color...
 * @param {*} colortext
 * @example
 * yellow1 --> "#ff00000"
 * semitransparent yellow --> "#...."
 * dark yellow ---> "#...."
 *
 */

function colorify(colortext) {
  if (!colortext) return BASECOLORS.transparent;
  // do we have a straight hext color?
  if (colortext[0] === "#") return colortext;
  let CT = colortext;
  // do we have an "indirect" color spec? e.g brand1, brand2, brand3

  const words = colortext.split(" ");
  if (words.length > 1) {
    const [prefix, color] = words;
    // if color is "brand1", "brand2", "brand3"..we do a lookup!
    if (prefix === "light") return BASECOLORS[`${color}2`];
    if (prefix === "dark") return BASECOLORS[`${color}8`];
  }

  const c = BASECOLORS[colortext];
  return c ? c : BASECOLORS.transparent;
}
export default colorify;
