import React from "react";
import AvatarA from "../ui/avatars/AvatarA";
import AvatarB from "../ui/avatars/AvatarB";
import AvatarC from "../ui/avatars/AvatarC";
import AvatarD from "../ui/avatars/AvatarD";

const VARIANTS = {
  a: props => <AvatarA {...props} />,
  b: props => <AvatarB {...props} />,
  c: props => <AvatarC {...props} />,
  d: props => <AvatarD {...props} />
};

export default function AvatarElement(props) {
  const variant = props.args.variant || "a";
  // if (!props.args.image)
  //   props.args.image = "https://ui-avatars.com/api/?font-size=0.33";
  return (
    <div className="flex flex-inline justify-center items-center">
      {VARIANTS.a(props)}
    </div>
  );
}
