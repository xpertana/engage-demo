import React from "react";
import Container from "../ui/Container";

export default function Body(props) {
  const { header, footer, banner } = props;

  let topMargin = header ? "mt-12" : "";
  if (banner) {
    if (header) topMargin = "mt-24";
    else topMargin = "mt-12";
  }

  const bottomMargin = footer ? "mb-12" : "";

  return (
    <div
      className={`py-2 ${topMargin} ${bottomMargin} flex-col justify-center items-center`}
    >
      <Container>{props.children}</Container>
    </div>
  );
}
