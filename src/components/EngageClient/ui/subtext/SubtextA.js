import React from "react";
export default function TitleA(props) {
  const {
    args: { text },
    theme: { textcolor }
  } = props;
  return (
    <small
      style={{ color: textcolor }}
      class="text-sm font-normal leading-normal mt-0 mb-4"
    >
      I will be the leader of a company that ends up being worth billions of
      dollars, because I got the answers. I understand culture. I am the
      nucleus. I think that’s a responsibility that I have, to push
      possibilities, to show people, this is the level that things could be at.
    </small>
  );
}
