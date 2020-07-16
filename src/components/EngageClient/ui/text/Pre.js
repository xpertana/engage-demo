import React from "react"

export default function TextA(props) {
  let {
    args: { color1, color2, text, size = 3 },
  } = props

  const sizeMap = [
    ["text-xl"],
    ["text-lg"],
    ["text-xs"],
    ["text-xs"],
    ["text-xs"],
  ]
  let COLOR = color1 ? color1 : "black"
  const [twc] = sizeMap[size - 1]
  const style = {
    textAlign: "left",
    color: COLOR,
    fontFamily: "Courier",
  }

  if (color2) style.backgroundColor = color2

  return (
    <div class="my-2 mx-4 p-2 rounded" style={style}>
      <pre class={`${twc}`}>{text}</pre>
    </div>
  )
}
