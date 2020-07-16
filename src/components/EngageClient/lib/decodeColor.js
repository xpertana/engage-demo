module.exports = function(color) {
  // transforms into suffix for tailwind..
  //  blue4 --> blue-400
  const tintnum = color.slice(-1);
  if (/[1-9]{1}/.test(tintnum)) {
    const num = Number(tintnum) * 100;
    return `${color.slice(0, -1)}-${num}`;
  } else return color;
};
