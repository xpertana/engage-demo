import React from "react";
import ProgressA from "../ui/progress/ProgressA";
import ProgressB from "../ui/progress/ProgressB";

const VARIANTS = {
  a: props => <ProgressA {...props} />,
  b: props => <ProgressB {...props} />
};

export default function ProgressElement(props) {
  const variant =
    props.args.variant && VARIANTS[props.args.variant]
      ? props.args.variant
      : "a";

  return (
    <div className="m-4 p-4 flex flex-inline justify-center items-center">
      {VARIANTS[variant](props)}
    </div>
  );
}
