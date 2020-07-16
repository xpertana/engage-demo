import React, { Component } from "react";
import rowify from "./rowify";

// Variants
import Avatar from "./types/Avatar";
import Button from "./types/Button";
import Checkbox from "./types/Checkbox";
import CtxItem from "./types/CtxItem";
import Date from "./types/Date";
import Dot from "./types/Dot";
import Emoji from "./types/Emoji";
import FontSwatch from "./types/FontSwatch";
import Icon from "./types/Icon";
import IconText from "./types/IconText";
import Image from "./types/Image";
import ImageText from "./types/ImageText";
import Char from "./types/Char";
import PinPad from "./types/PinPad";
import Pushbutton from "./types/Pushbutton";
import Swatch from "./types/Swatch";
import Tag from "./types/Tag";
import Test from "./types/Test";
import Time from "./types/Time";

const VARIANT = {
  avatar: props => <Avatar {...props} />,
  button: props => <Button {...props} />,
  checkbox: props => <Checkbox {...props} />,
  char: props => <Char {...props} />,
  ctx: props => <CtxItem {...props} />,
  date: props => <Date {...props} />,
  dot: props => <Dot {...props} />,
  emoji: props => <Emoji {...props} />,
  fontswatch: props => <FontSwatch {...props} />,
  icon: props => <Icon {...props} />,
  icontext: props => <IconText {...props} />,
  image: props => <Image {...props} />,
  imagetext: props => <ImageText {...props} />,
  menu: props => <Test {...props} />,
  pinpad: props => <PinPad {...props} />,
  pushbutton: props => <Pushbutton {...props} />,
  swatch: props => <Swatch {...props} />,
  tag: props => <Tag {...props} />,
  time: props => <Time {...props} />,
  test: props => <Test {...props} />
};

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: false };
  }

  hide() {
    this.setState({ hidden: true });
  }

  clickHandler(data) {
    // if (data.item._hideparent) this.setState({ hidden: true });
    if (this.props.args.hide) this.setState({ hidden: true });
    if (data.action == "delete") {
      console.log("delete in grid componennt");
      this.props.handler({ target: this.props.args._ctxgrp, ...data });
    }
    console.log(this.props.args);
    console.log(data);
    data.returnCtx = this.props.args.returnCtx || "input";
    console.log("GRID CLICK HANDLER", data);
    this.props.handler(data);
  }

  renderVariantItem(variant, props) {
    return <div class="m-1">{VARIANT[variant](props)}</div>;
  }

  render() {
    if (this.state.hidden) return <div></div>;
    // let {
    //   pkey,
    //   color1,
    //   color2,
    //   ctx,
    //   ctxvalues,
    //   rowlength,
    //   rowbreaks,
    //   data, // injected via the choose command only!
    //   actions,
    //   hide,
    //   size = 5,
    //   wait,
    //   ifneed,
    //   variant = "swatch",
    //   qualifier = "medium"
    // } = this.props.args;
    console.log(this.props.args);
    const { args } = this.props;

    if (!args.data && args.ctxvalues) {
      // do we need this? yes..for display only grid stuff!
      //data = ctx.cv.v;
      args.data = args.ctxvalues[0].cv.v;
    }
    console.log(args.data);
    console.log(args.variant);

    // we also want to pass down border and shape..
    const style = this.props.circle
      ? "circle"
      : this.props.rounded
      ? "rounded"
      : "square";

    if (!args.data) return <div>error: no data</div>;

    // do we have a specified columns?
    if (args.rowlength || args.rowbreaks) {
      const output = args.data.map((i, index) =>
        VARIANT[args.variant]({
          key: `k${args.pkey}${index}`,
          index: index,
          item: i,
          actions: args.actions,
          size: args.size,
          style,
          border: args.border,
          color1: args.color1,
          color2: args.color2,
          color3: args.color3,
          font: args.font,
          qualifier: args.qualifier,
          wait: args.wait, // used to  show hover
          handler: this.clickHandler.bind(this)
        })
      );
      const rows = rowify(output, {
        rowlength: args.rowlength,
        rowbreaks: args.rowbreaks
      });
      return <div class="content-center">{rows}</div>;
    }

    return (
      <div className="content-center">
        <div class="flex justify-center items-center flex-wrap">
          {args.data.map((i, index) =>
            this.renderVariantItem(args.variant, {
              key: index,
              index: index,
              item: i,
              actions: args.actions,
              size: args.size,
              border: args.border,
              style: args.style,
              color1: args.color1,
              color2: args.color2,
              color3: args.color3,
              font: args.font,

              qualifier: args.qualifier,
              wait: args.wait,
              handler: this.clickHandler.bind(this)
            })
          )}
        </div>
      </div>
    );
  }
}
