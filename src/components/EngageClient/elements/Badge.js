import React from "react";
import BadgeA from "../ui/badges/BadgeA";
import BadgeB from "../ui/badges/BadgeB";

const VARIANTS = {
  a: props => <BadgeA {...props} />,
  b: props => <BadgeB {...props} />
};

export default function BadgeElement(props) {
  const variant = props.args.variant || "a";
  return (
    <div className="w-full flex flex-inline justify-center items-center">
      {VARIANTS[variant](props.args)}
    </div>
  );
}
