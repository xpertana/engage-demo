import React, { Component } from "react";

// Variants
import Bullet from "./types/Bullet";
import Button from "./types/Button";
import Detail from "./types/Detail";
import Icon from "./types/Icon";

const VARIANT = {
  bullet: props => <Bullet {...props} />,
  button: props => <Button {...props} />,
  detail: props => <Detail {...props} />,
  icon: props => <Icon {...props} />
};

export default class List extends Component {
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
    console.log(this.props.args);
    const { args } = this.props;

    if (!args.data && args.ctxvalues) {
      // do we need this? yes..for display only grid stuff!
      //data = ctx.cv.v;
      args.data = args.ctxvalues[0].cv.v;
    }
    console.log(args.data);
    console.log(args.variant);

    args.variant = args.variant ? args.variant : "bullet";

    if (!args.data) return <div>error: no data</div>;

    return (
      <div class="flex justify-center flex-col">
        {args.data.map((i, index) =>
          this.renderVariantItem(args.variant, {
            key: index,
            index: index,
            item: i,
            actions: args.actions,
            size: args.size,
            color1: args.color1,
            color2: args.color2,
            color3: args.color3,
            font: args.font,
            fsize: args.fsize,
            fcolor: args.fcolor,
            qualifier: args.qualifier,
            wait: args.wait,
            handler: this.clickHandler.bind(this)
          })
        )}
      </div>
    );
  }
}
