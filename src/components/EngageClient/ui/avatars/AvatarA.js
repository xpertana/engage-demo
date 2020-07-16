import React from "react";
import Icon from "../icons/IconA";

const sizeMap = [
  [32, "text-xl", "text-5xl", 60],
  [24, "text-lg", "text-4xl", 50],
  [20, "", "text-3xl", 40],
  [16, "text-sm", "text-2xl", 30],
  [12, "text-xs", "text-xl", 24]
];

export default function Avatar(props) {
  let args = props.args;
  let { size = 3, ctx } = args;

  if (ctx) {
    if (ctx.cv.text) args.text = ctx.cv.text;
    if (ctx.cv.image) args.image = ctx.cv.image;
    if (ctx.cv.icon) args.icon = ctx.cv.icon;
  }

  // image preferred
  if (args.image) {
    const [avsz, twc, avc] = sizeMap[size - 1];
    return (
      <div className="my-1 flex flex-col justify-center items-center">
        <img
          class={`inline-block h-${avsz} w-${avsz} rounded-full`}
          src={args.image}
        />
        {args.text && <div style={{ color: args.color1 }}>{args.text}</div>}
      </div>
    );
  } else if (args.icon) return <IconAvatar args={args} />;
  else {
    return <InitialsAvatar args={args} />;
  }
}

function IconAvatar(props) {
  const {
    text,
    color1 = "white",
    color2 = "gray",
    icon = "user",
    size = 3
  } = props.args;
  const [avsz, twc, avc, icsz] = sizeMap[size - 1];
  return (
    <div className="my-1 flex flex-col justify-between items-center">
      <div
        style={{ backgroundColor: color2 }}
        class={`pt-1 flex-1 h-${avsz} w-${avsz} rounded-full flex flex-col justify-between items-center`}
      >
        <div class="flex-1">
          <Icon icon={icon} size={icsz} color={color1} />
        </div>
      </div>
      {text && (
        <div class={twc} style={{ color: color1 }}>
          {text}
        </div>
      )}
    </div>
  );
}

function InitialsAvatar(props) {
  const { size = 3, text, color1 = "white", color2 = "gray" } = props.args;
  const [avsz, twc, avc] = sizeMap[size - 1];

  const initials = text ? getInitials(text) : "??";

  return (
    <div className="my-1 flex flex-inline justify-center items-center">
      <span
        style={{ backgroundColor: color2 }}
        class={`inline-flex items-center justify-center h-${avsz} w-${avsz} rounded-full`}
      >
        <span
          style={{ fontFamily: "Arial", fontWeight: "100", color: color1 }}
          class={`pl-1 ${avc}`}
        >
          {initials}
        </span>
      </span>
    </div>
  );
}

function getInitials(text) {
  const [first, second] = text.split(" ");
  if (second) return `${first[0].toUpperCase()}${second[0].toUpperCase()}`;
  else return `${first[0].toUpperCase()}${first[1].toUpperCase()}`;
}
