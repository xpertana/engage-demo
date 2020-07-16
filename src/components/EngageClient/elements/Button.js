import React from "react";
import ButtonA from "../ui/buttons/ButtonA";
import BannerButton from "../ui/buttons/BannerButton";

export default function ButtonElement(props) {
  if (props.args.banner) return BannerButton(props);

  return (
    <div className="mx-4 p-1 flex flex-inline justify-center items-center">
      {ButtonA(props)}
    </div>
  );
}
