import React from "react";
import DividerA from "../ui/dividers/DividerA";

export default function Divider(props) {
  props.args.color = props.args.color1 ? props.args.color1 : "black";
  return DividerA(props);
}
