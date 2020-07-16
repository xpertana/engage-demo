import React from "react"
import Icon from "../ui/icons/IconA"
import Button from "../ui/buttons/ButtonA"

export default function Link(props) {
  let { cmd, url, icon, text, nonew, color1 = "blue", color2 } = props.args

  if (props.args.button) {
    props.args.iconleft = icon
    return (
      <div class="my-2 flex justify-center items-center">
        <Button {...props} />
      </div>
    )
  }

  const T = nonew ? "_self" : "_blank"
  return (
    <div
      style={{ color: color1 }}
      class="my-2 flex justify-center items-center"
    >
      <a target={T} href={url}>
        {text} &rarr;
      </a>
    </div>
  )

  // return (
  //   <div className="my-2 w-full text-center flex-1 mx-4">
  //     <button
  //       className={`${basecolor} ${textcolor} hover:${selectedcolor} ${padding} mx-4 rounded rounded-lg`}
  //       onClick={() => this.handleClick()}
  //     >
  //       <a target={T} href={`${hrefPrefix}${target}`}>
  //         <div className="flex justify-between p-2 items-center">
  //           <div className="p-1">
  //             <Icon type={icon} size={fontSize} />
  //           </div>
  //           <div style={{ fontSize }} className="flex-1 mx-4 text-left">
  //             {TEXT}
  //           </div>
  //         </div>
  //       </a>
  //     </button>
  //   </div>
  // );
}

const actionMap = {
  call: {
    hrefPrefix: `tel:`,
  },
  text: {
    hrefPrefix: `sms:`,
  },
  email: {
    hrefPrefix: `mailto:`,
  },
  directions: {
    hrefPrefix: `https://goo.gl/maps/pJcdxzPWhkoWMXdn6`,
  },
  link: {
    hideafterclick: false,
  },
  venmo: {
    hrefPrefix: `venmo://paycharge?txn=pay&recipients=Glenn-Schleicher&Amount=10&note=forsomething`,
  },
}
