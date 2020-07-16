import React, { Component } from "react";
import Button from "./Button";
import stylelize from "../stylelize";

export default class ButtonBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  submitValue({ value, action }) {
    const ctxout = {};
    ctxout[this.props.returnCtx] = value;
    this.props.handler({ ctxout, action });
    this.hide();
  }
  hide() {
    this.setState({ hidden: true });
  }

  render() {
    if (this.state.hidden) return <div />;
    const { theme = {}, buttonTheme, sc, args } = this.props;
    const { style, classText } = stylelize(sc, theme);
    const { choices, color } = args;

    const CHOICES = [
      { icon: "check", label: "Yes, do it", action: "yes", value: true },
      { icon: "home", label: "Maybe", action: "dope", value: "boob" },
      { icon: "delete", label: "No way!", action: "nope", value: false }
    ];
    const CH = choices || CHOICES;

    return (
      <div style={style} className={classText}>
        {CH.map(ch => (
          <Button
            theme={buttonTheme}
            args={{
              color,
              icon: ch.icon,
              label: ch.label,
              onClick: () =>
                this.submitValue.bind(this)({
                  value: ch.value,
                  action: ch.action
                })
            }}
          />
        ))}
      </div>
    );
  }
}
