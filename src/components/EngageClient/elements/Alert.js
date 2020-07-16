import React, { Component } from "react";

import AlertA from "../ui/alerts/AlertA";
import AlertB from "../ui/alerts/AlertB";

const VARIANTS = {
  a: props => <AlertA {...props} />,
  b: props => <AlertB {...props} />
};

export default class Alert extends Component {
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
      <div className="m-4 p-4 flex flex-inline justify-center items-center">
        {VARIANTS[variant]({
          ...this.props.args,
          hideHandler: this.hide.bind(this)
        })}
      </div>
    );
  }
}
