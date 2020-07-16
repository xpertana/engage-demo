import React from "react"
import marked from "marked"

const sizeMap = [
  [20, "text-xl"],
  [18, "text-lg"],
  [16, ""],
  [14, "text-sm"],
  [12, "text-xs"],
]

// Override link renderer function - link become an onClick that does a fluent go!
const renderer = {
  link(href, title, text) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-")
    return `
    <a
      class="text-blue-500 underline font-bold"
      onClick="()=> function gogo() { console.log('${href}')}"
    >
      ${text}‣
    </a>
     `
  },
}

// Override link tokenizer function
// const tokenizer = {
//   link(src) {
//     const match = src.match(/\[(.+)\|(.+?)\]/);
//     if (match) {
//       return {
//         type: "link",
//         raw: match[0],
//         text: match[1].trim(),
//         title: null,
//         href: match[2].trim()
//       };
//     }
//     // return false to use original codespan tokenizer
//     return false;
//   }
// };

// marked.use({ renderer, tokenizer });
marked.use({ renderer })

function clickHandler(go) {
  // props.handler({ go });
}

function createMarkup(text) {
  return { __html: marked(text) }
}

export default function Markdown(props) {
  let {
    args: { pre, left, right, justify, color1, text, size = 3, font = {} },
  } = props

  const [tsz, twc] = sizeMap[size - 1]

  return (
    <div className="mx-8">
      <div
        style={{ color: color1, fontSize: tsz, fontFamily: font }}
        class={`font-light`}
      >
        {marked(text)}
        <hr />
        <div dangerouslySetInnerHTML={createMarkup(text)} />
      </div>
    </div>
  )
}
