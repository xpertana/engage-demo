const BASECOLORS = require("./BASECOLORS");

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
const RGB = /^[a-fA-F0-9]{6}/;
//const BGCOLOR = /^bg/;
//const BRAND = /^brand/;

module.exports = function colorify(colortext) {
  // "raw" RGB?
  if (RGB.test(colortext)) return colortext;
  // decode color word and return
  return BASECOLORS[colortext] ? BASECOLORS[colortext] : colortext;
};
