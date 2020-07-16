import React from "react";
//import Background from "../background";
import color2hex from "../lib/color2hex";
import tinycolor from "tinycolor2";

// export default function genGradiant(name) {
//   const colors = GRADIANTS[name] || ["#bf5ae0", "#a811da"];
//   const [color1, color2] = colors;
//   return (
//     <style jsx>{`
//       .xpescreen {
//         background: ${color2};
//         background: -webkit-linear-gradient(to right, ${color1}, ${color2});
//         background: linear-gradient(to right, ${color1}, ${color2});
//       }
//     `}</style>
//   );
// }
const gradientMap = {
  radial: ["radial", "circle"],
  horizontal: ["linear", "90deg"],
  vertical: ["linear", "180deg"]
};

export default function Screen(props) {
  const { args } = props;

  let {
    opacity = 1.0,
    image,
    color1,
    color2,
    color3,
    alpha = 30,
    font = "Arial",
    fontSize = "1em",
    gradient = "vertical" // radial, horizontal, vertical
  } = args;

  const style = {
    // background: `rgba(255, 255, 0, 0.2)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    fontSize,
    height: "100vh",
    fontFamily: args.font || "Arial"
  };

  // handle background image
  let bgimagestyle = <style></style>;
  if (args.image) {
    let bg = "";
    if (color1) {
      let c = tinycolor(color2hex(color1));
      c.setAlpha(alpha / 100);
      style.filter = `grayscale(100%); brightness(1.0);`;
      style.background = c.toRgbString();
    }
    style.backgroundImage = `url("${image}")`;
    style.position = "fixed";
    style.height = "100vh";
    style.top = 0;
    style.right = 0;
    style.left = 0;
    style.bottom = 42;

    // style.backgroundImage = `url("https://res.cloudinary.com/ops1/image/upload/v1583755966/sites/hpe/545420138-16-9.jpg")`;
    // bgimagestyle = (
    //   <style jsx>{`
    //     .xpescreen:before {
    //       content: "";
    //       position: absolute;
    //       top: 0;
    //       right: 0;
    //       left: 0;
    //       bottom: 0;
    //       ${bg}
    //     }
    //     // .xpescreen {
    //     // }
    //   `}</style>
    // );
  } else if (color2) {
    // if we have a color1 and color2 specified we have a gradient
    let gr = gradientMap[gradient][0];
    let direction = gradientMap[gradient][1];
    color1 = color2hex(color1);
    color2 = color2hex(color2);
    let colorstring = `${color1}, ${color2}`;
    if (color3) colorstring = colorstring + `,${color2hex(color3)}`;
    style.background = color2;
    style.background = `-webkit-${gr}-gradient(${direction}, ${colorstring} 100%)`;
    style.background = `${gr}-gradient(${direction}, ${colorstring} 100%)`;
    // style.background = `-webkit-linear-gradient(180deg, ${colorstring})`;
    // style.background = `linear-gradient(180deg, ${colorstring})`;
  } else if (color1) {
    color1 = color2hex(color1);
    style.backgroundColor = color1;
  }

  // if (args.color1) style.color = color2hex(args.color1);
  // if (args.color2) style.backgroundColor = color2hex(args.color2);

  return (
    // <div id="screen" className="flex-1 flex flex-col">
    <div>
      {bgimagestyle}
      <div id="screen" style={style} className="xpescreen flex-1 flex flex-col">
        <div class="relative">{props.children}</div>
      </div>
    </div>
  );
}
