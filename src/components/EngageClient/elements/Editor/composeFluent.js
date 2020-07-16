const O = {
  element: "foo",
  text: "this is cool",
  icon: "home"
};

const pattern = {
  element: { type: "input|secureinput|choose" }
};

const NRE = require("named-js-regexp");
const VI = NRE("\\{(:<x>\\S+)\\}", "g");
const T = [`flow {element!}`, ` +{icon+}`, ` "{text*}"`];

module.exports = function(object, template) {
  const OBJECT = object || O;
  const TEMPLATE = template || T;

  TEMPLATE.forEach(segment => {});
};
