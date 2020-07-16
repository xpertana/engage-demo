import React from "react";
import LoadingA from "../ui/loading/LoadingA";
import LoadingB from "../ui/loading/LoadingB";
import LoadingC from "../ui/loading/LoadingC";
import LoadingD from "../ui/loading/LoadingD";

const VARIANTS = {
  a: props => <LoadingA {...props} />,
  b: props => <LoadingB {...props} />,
  c: props => <LoadingC {...props} />,
  d: props => <LoadingD {...props} />
};

export default function ElemLoading(props) {
  const variant =
    props.args.variant && VARIANTS[props.args.variant]
      ? props.args.variant
      : "a";

  props.args.color = props.args.color1 ? props.args.color1 : "black";

  return (
    <div className="m-4 p-4 flex flex-inline justify-center items-center">
      {VARIANTS[variant](props.args)}
    </div>
  );
}
