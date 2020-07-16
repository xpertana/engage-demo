import React from "react";
import Icon from "../icons/IconA";
import Badge from "../badges/BadgeA";

const sizeMap = [
  [100, 80],
  [80, 60],
  [50, 30],
  [60, 40],
  [50, 30]
];

export default function AvatarHeader(props) {
  const {
    left,
    right,
    image,
    icon,
    prev,
    next,
    color1 = "white",
    color2 = "darkslategray",
    color3,
    size = 3
  } = props.args;

  // return <div>{JSON.stringify(props, null, 2)}</div>;
  const [avsz, icsz] = sizeMap[size - 1];

  return (
    <div
      onClick={() => props.handler()}
      style={{ backgroundColor: color2 }}
      class="w-full"
    >
      <div class="flex items-center justify-between h-12">
        {prev && (
          <div
            onClick={
              () => props.handler({ directives: [prev] }) // return
            }
            class="mx-3"
          >
            <Icon icon="chevronleft" size={24} color={color1} />
          </div>
        )}
        {left && (
          <div style={{ color: color1 }} class="pr-4 font-thin text-xs">
            {left}
          </div>
        )}
        <div style={{ color: color1 }} class="text-center flex-1">
          <div class="w-32"> </div>
          <div
            onClick={() => props.handler({ directives: [props.args.home] })}
            style={{
              top: 5,
              align: "center",
              fontSize: "1.2em",
              position: "fixed",
              bottom: "auto",
              right: 0,
              left: 0,
              margin: "auto 20%"
            }}
            // class="w-24 h-24"
          >
            <Avatar {...props} avsz={avsz} icsz={icsz} />
          </div>
        </div>
        {right && (
          <div style={{ color: color1 }} class="pl-2 font-thin text-xs">
            {right}
          </div>
        )}
        {next && (
          <div
            onClick={
              () => props.handler({ directives: [next] }) // return
            }
            class="mx-3"
          >
            <Icon icon="user" size={24} color={color1} />
          </div>
        )}
      </div>
    </div>
  );
}

function Avatar(props) {
  const {
    text,
    icon,
    image,
    color1 = "steelblue",
    color2 = "gainsboro",
    color3
  } = props.args;

  // image preferred
  return (
    <div>
      <div className="flex justify-between items-center">
        <div class="flex-1">
          {image ? (
            <img
              style={{
                width: props.avsz,
                height: props.avsz,
                borderColor: color1,
                backgroundColor: color3 ? color3 : color2,
                borderWidth: 5
              }}
              class={`inline-block rounded-full`}
              src={image}
            />
          ) : text ? (
            <InitialsAvatar {...props} />
          ) : (
            <IconAvatar {...props} />
          )}
        </div>
      </div>
    </div>
  );
}

function IconAvatar(props) {
  const {
    text,
    icon,
    image,
    color1 = "white",
    color2 = "lightslategray",
    color3
  } = props.args;
  return (
    <div className="flex justify-center items-center">
      <span
        style={{
          width: props.avsz,
          height: props.avsz,
          backgroundColor: color3 ? color3 : color2,
          borderColor: color1,
          borderWidth: 5
        }}
        class={`text-center h-24 w-24 rounded-full`}
      >
        <Icon icon={icon} size={props.icsz} color={color1} />
      </span>
    </div>
  );
}

function InitialsAvatar(props) {
  const {
    text,
    color1 = "darkslategray",
    color2 = "lightslategray",
    color3
  } = props.args;
  const initials = text ? getInitials(text) : "--";

  return (
    <div className="flex flex-inline justify-center items-center">
      <span
        style={{
          backgroundColor: color2,
          borderColor: color3 ? color3 : color2,
          borderWidth: 5
        }}
        class={`inline-flex items-center justify-center h-24 w-24 rounded-full`}
      >
        <span
          style={{
            fontFamily: "Arial",
            fontWeight: 100,
            color: color1
          }}
          class="pl-1 text-4xl font-hairline"
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
