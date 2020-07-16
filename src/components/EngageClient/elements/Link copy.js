import React, { Component } from "react";
import Icon from "../ui/icons/IconA";

export default class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  render() {
    const {
      cmd,
      text,
      target,
      option,
      size = "medium",
      color = "gray"
    } = this.props.args;
    const A = actionMap[cmd];
    const { icon, hrefPrefix, popout, autoText, hideafterclick } = A;

    const T = popout ? "_blank" : "_self";
    const { fontSize, padding } = sizeMap[size];
    const TEXT = text ? text : autoText(target);
    const { basecolor, selectedcolor, textcolor } = colorize(color, option);

    return (
      <div className="my-2 w-full text-center flex-1 mx-4">
        <button
          className={`${basecolor} ${textcolor} hover:${selectedcolor} ${padding} mx-4 rounded rounded-lg`}
          onClick={() => this.handleClick()}
        >
          <a target={T} href={`${hrefPrefix}${target}`}>
            <div className="flex justify-between p-2 items-center">
              <div className="p-1">
                <Icon type={icon} size={fontSize} />
              </div>
              <div style={{ fontSize }} className="flex-1 mx-4 text-left">
                {TEXT}
              </div>
            </div>
          </a>
        </button>
      </div>
    );
  }
}

// const sizeMap = {
//   small: {
//     fontSize: 14,
//     padding: ""
//   },
//   medium: {
//     fontSize: 18,
//     padding: "my-1"
//   },
//   large: {
//     fontSize: 24,
//     padding: "my-2"
//   }
// };

const actionMap = {
  call: {
    autoText: v => `Call ${v}`,
    hrefPrefix: `tel:`,
    icon: "phone",
    popout: false,
    hideafterclick: false
  },
  text: {
    autoText: v => `Send text to ${v}`,
    hrefPrefix: `sms:`,
    icon: "smartphone",
    popout: false,
    hideafterclick: false
  },
  email: {
    autoText: v => `Send email to ${v}`,
    hrefPrefix: `mailto:`,
    icon: "mail",
    popout: false,
    hideafterclick: false
  },
  directions: {
    autoText: v => `Direction to ${v}`,
    hrefPrefix: `https://goo.gl/maps/pJcdxzPWhkoWMXdn6`,
    icon: "location",
    popout: true,
    hideafterclick: false
  },
  link: {
    autoText: v => `Link to ${v}`,
    hrefPrefix: "", // value must be the full link
    icon: "link",
    popout: true,
    hideafterclick: false
  },
  venmo: {
    autoText: v => `Pay ${v} with Venmo`,
    hrefPrefix: `venmo://paycharge?txn=pay&recipients=Glenn-Schleicher&Amount=10&note=forsomething`,
    icon: "dollarsign",
    popout: true,
    hideafterclick: false
  }
};

// venmo://paycharge?txn=pay recipients=Alex-Beals Amount=10 note=Note
