import React from "react";
import ImageA from "../ui/images/ImageA";

export default function ImageElement(props) {
  props.args.image = props.args.image || "https://source.unsplash.com/random";
  return ImageA(props);
}
