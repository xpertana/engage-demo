import React, { Component } from "react";

import TabsA from "../ui/tabs/TabsA";

const VARIANTS = {
  a: props => <TabsA {...props} />
};

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: false };
  }

  hide() {
    console.log("hide");
    this.setState({ hidden: true });
  }

  render() {
    if (this.state.hidden) return <div></div>;

    const variant = this.props.args.variant || "a";

    //render prep
    //if (this.props.args.icon);
    //this.props.hideHandler = this.hide.bind(this);

    return (
      <div className="">
        {VARIANTS[variant]({
          ...this.props.args,
          hideHandler: this.hide.bind(this)
        })}
      </div>
    );
  }
}
