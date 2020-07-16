import React, { Component } from "react";
//import styles from "./Pushbutton.module.css";

//import Button from "../../../ui/buttons/Round1";
//import Button from "../../../ui/buttons/Round2";
import Button from "../../../ui/buttons/ButtonD";

export default class Pushbutton extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: false };
  }

  handleAction(action) {
    if (this.props.item._hide) this.setState({ hidden: true });
    this.props.handler({
      action,
      index: this.props.index,
      item: this.props.item
    });
  }

  render() {
    if (this.state.hidden) return <span></span>;
    return (
      <div onClick={() => this.handleAction("select")}>
        <Button text={this.props.item.text} />
      </div>
    );
  }
}
