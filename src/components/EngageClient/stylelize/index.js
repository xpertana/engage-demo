import stylelizeOne from "./stylelizeOne";

function stylelize(stylecodes, theme) {
  if (!stylecodes) return theme;

  if (!theme.layout) theme.layout = {};
  if (!theme.classText) theme.classText = "";

  stylecodes.forEach(sc => {
    const { style, layout, classText } = stylelizeOne(sc);
    if (style) theme.style = { ...theme.style, ...style };
    if (layout) theme.layout = { ...theme.layout, ...layout };
    if (classText) theme.classText = `${theme.classText} ${classText}`;
  });

  return theme;
}

export default stylelize;
