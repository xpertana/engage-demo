import Typist from "react-typist";
// import Head from "next/head";
import React from "react";
// todo create shadow component for abstration import TextA from "../ui/text/TextA";

export default function TypedText(props) {
  const variant = props.args.variant || "a";

  const sizeMap = [["text-xl"], ["text-lg"], [""], ["text-sm"], ["text-xs"]];

  const {
    text,
    color1 = "black",
    speed = 80,
    font = {},
    size = 3
  } = props.args;
  const [twc] = sizeMap[size - 1];
  return (
    <div>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        ></link>
      </Head> */}

      <div className="mx-4 flex flex-inline justify-center items-center">
        <Typist cursor={{ show: false }} avgTypingDelay={speed}>
          <p
            style={{
              // fontSize: 24,
              // fontFamily: "Permanent Marker"
              color: color1,
              fontFamily: font.fontFace
            }}
            class={`text-left ${twc}`}
          >
            {props.args.text}
          </p>
        </Typist>
      </div>
    </div>
  );
}
