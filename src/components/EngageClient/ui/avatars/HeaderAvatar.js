import React from "react";
import Icon from "../icons/IconA";

export default function Avatar(props) {
  const { text, icon, size = "medium", image, color1, color2 } = props.args;

  props.args.color1 = props.args.color1 ? props.args.color1 : "black";
  props.args.color2 = props.args.color2 ? props.args.color2 : "gray";

  props.args.twsize = size ? sizeMap[size] : 24;

  // image preferred
  if (image)
    return (
      <div className="flex flex-inline justify-center items-center">
        <img
          style={{ borderSize: 5, borderColor: "red" }}
          class={`inline-block w-24 h-24 rounded-full`}
          src={image}
        />
      </div>
    );
  else if (icon) return <IconAvatar {...props} />;
  else {
    return <InitialsAvatar {...props} />;
  }
}

function IconAvatar(props) {
  return (
    <div className="m-4 flex flex-inline justify-center items-center">
      <span
        style={{ backgroundColor: props.args.color2 }}
        class={`inline-block h-${props.args.twsize} w-${props.args.twsize} rounded-full overflow-hidden`}
      >
        <Icon icon={props.args.icon} size={50} color={props.args.color1} />
      </span>
    </div>
  );
}

function InitialsAvatar(props) {
  const { twsize, text, color1, color2 } = props.args;
  const initials = text ? getInitials(text) : "??";

  return (
    <div className="m-4 flex flex-inline justify-center items-center">
      <span
        style={{ backgroundColor: color2 }}
        class={`inline-flex items-center justify-center h-${twsize} w-${twsize} rounded-full`}
      >
        <span
          style={{ fontFamily: "Arial", fontWeight: "100", color: color1 }}
          class="pl-1 text-3xl font-thin"
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
