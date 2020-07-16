import React from "react"
import LogoHeader from "../ui/headers/LogoHeader"
import AvatarHeader from "../ui/headers/AvatarHeader"
import ImageHeader from "../ui/headers/ImageHeader"
import TextHeader from "../ui/headers/TextHeader"
import color2hex from "../lib/color2hex"

export default function Header(props) {
  const { variant = "image" } = props.args
  if (props.args.color1) props.args.color1 = color2hex(props.args.color1)
  if (props.args.color2) props.args.color2 = color2hex(props.args.color2)
  if (props.args.color3) props.args.color3 = color2hex(props.args.color3)

  switch (variant) {
    case "avatar":
      return <AvatarHeader {...props} />
    case "image":
      return <ImageHeader {...props} />
    case "logo":
      return <LogoHeader {...props} />
    case "text":
      return <TextHeader {...props} />
    default:
      return <div>Invalid header</div>
  }
}
