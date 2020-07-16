const optionMap = {
  regular: {
    base: 400,
    selected: 500,
    text: 700
  },
  light: {
    base: 200,
    selected: 300,
    text: 500
  },
  dark: {
    base: 800,
    selected: 900,
    text: 300
  }
};

module.exports = function(baseColor, option = "regular") {
  const { base, selected, text } = optionMap[option];
  return {
    basecolor: `bg-${baseColor}-${base}`,
    selectedcolor: `bg-${baseColor}-${selected}`,
    textcolor: `text-${baseColor}-${text}`
  };
};
