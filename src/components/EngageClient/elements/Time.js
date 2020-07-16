import React from "react";
import Icon from "../ui/icons/IconA";
import dayjs from "dayjs";
import Badge from "../ui/badges/BadgeA";

const sizeMap = [
  [48, "4xl", "full"],
  [36, "3xl", "1/2"],
  [24, "2xl", "1/5"],
  [20, "xl", "3/8"],
  [18, "lg", "1/8"]
];

//const Checkbox = require("./Checkbox");
export default function TimeElement(props) {
  let {
    color1 = "gray",
    color2 = "#eeeeee",
    ctx,
    text,
    size = 3,
    dateformat = "h:mm a"
  } = props.args;

  // return <div>{JSON.stringify(props.args)}</div>;

  // ts from ctx first, then just a ts..
  let format = dateformat;
  let ts;
  if (ctx && ctx.cv.ts) {
    ts = ctx.cv.ts[0];
    if (ctx.cv.format) format = ctx.cv.format;
  } else ts = new Date().toISOString();

  const timetext = dayjs(ts).format(format);
  // uses dayjs format string: https://day.js.org/docs/en/display/format

  const S = sizeMap[size - 1] || sizeMap[2]; // handles s1-s5 and defaults to s3 otherwise
  const [iconsz, textsz, w] = S;

  return (
    <div class={`w-${w}`}>
      <div
        style={{
          color: color1,
          backgroundColor: color2
        }}
        class="m-8 flex rounded justify-between items-center"
      >
        <div class="flex-1 p-2">
          {/* {JSON.stringify(props.args)} */}
          <Icon icon="clock" color={color1} size={iconsz} />
        </div>
        <div class={`px-2 text-${textsz} text-thin`}>{timetext}</div>
        {text && (
          <div>
            <Badge args={{ text, color1: color2, color2: color1, size }} />
          </div>
        )}
      </div>
    </div>
  );
}
