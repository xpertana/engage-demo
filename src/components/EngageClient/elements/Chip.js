import React from "react";
import Icon from "../ui/icons/IconA";
import Badge from "../ui/badges/BadgeA";

const sizeMap = [
  [24, "xl", "", ""],
  [20, "lg", "mx-8 rounded", "mt-1"],
  [18, "", "mx-8 rounded", "mt-1"],
  [14, "sm", "mx-32 rounded", "mt-1"],
  [12, "xs", "mx-48 w-20 text-center rounded", "mt-1 flex-col"]
];

export default function Chip(props) {
  const {
    ctx,
    text,
    icon,
    size = 3,
    tag,
    color1 = "black",
    color2 = "gray"
  } = props.args;

  let TEXT;
  if (ctx && ctx.cv.text) TEXT = ctx.cv.text;
  else if (text) TEXT = text;

  let ICON;
  if (ctx && ctx.cv.icon) ICON = ctx.cv.icon;
  else if (icon) ICON = icon;

  let TAG;
  if (ctx && ctx.cv.tag) TAG = ctx.cv.tag;
  else if (tag) TAG = tag;

  if (!TEXT) return <div>missing info for chip</div>;

  // return <div>{JSON.stringify(props.args)}</div>;
  const S = sizeMap[size - 1];
  const [icsize, textsz, mp, mt] = S;

  return (
    <div class={`${mt} w-full flex justify-between items-center`}>
      <div
        style={{ color: color1, backgroundColor: color2 }}
        class={`flex-1 ${mp} px-2 flex justify-between items-center`}
      >
        {ICON && (
          <div class="pr-2">
            <Icon icon={ICON} size={icsize} color={color1} />
          </div>
        )}
        <div class={`flex-1 text-${textsz}`}>{TEXT}</div>
        {TAG && (
          <div>
            <Badge args={{ text: TAG, size }} />
          </div>
        )}
      </div>
    </div>
  );
}
