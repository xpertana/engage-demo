import React from "react";

export default function FontAsset(props) {
  const { args } = props;

  // can be either a local font in which case we use a @font-face or a google font remote
  if (args.type === "local") {
    // local tff downloaed into the /public/fonts dir ..perfhaps from dafont?
    // current ones: norwester.tff, EnglandSignature.tff
    console.log(`local font load of ${args.name}`);
    return (
      <style jsx>{`
        @font-face {
          src: url(fonts/${args.file});
          font-family: ${args.name};
        }
      `}</style>
    );
  } else {
    // Google Font likely
    console.log(`remote font load of ${args.link}`);
    return (
      <div>
        <link href={args.link} rel="stylesheet" />
      </div>
    );
  }
}
