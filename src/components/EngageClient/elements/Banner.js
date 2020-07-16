import React from "react";
import BannerA from "../ui/banners/BannerA";
import color2hex from "../lib/color2hex";

export default function BannerElement(props) {
  if (props.args.color1) props.args.color1 = color2hex(props.args.color1);
  if (props.args.color2) props.args.color2 = color2hex(props.args.color2);

  return BannerA(props);
}
