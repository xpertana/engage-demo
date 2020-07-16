import React, { Component } from "react";
import styles from "./Pushbutton.module.css";

import Round1 from "../../../ui/buttons/Round1";

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
      <div
        onClick={() => this.handleAction("select")}
        class={styles.roundbutton}
      >
        <div class={styles.roundbuttoncircle}>
          <span class={styles.roundbuttona}>{this.props.item.text}</span>
        </div>
      </div>
    );
  }
}
