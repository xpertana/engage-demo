import React, { Component } from "react";
import Icon from "../elements/Icon";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import ItemDetail from "../ui/ItemDetail";
import { capitalize } from "lodash";

export default class ElemItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  hide() {
    this.setState({ hidden: true });
  }

  handler(data) {
    console.log(`here in handler...`);
    console.log(data);
    this.props.handler(data);
  }

  handleClick() {
    if (this.props.args.hideafterclick) this.hide();
  }

  displayName(text) {
    let parts = text.split("-");
    parts = parts.map(p => capitalize(p));
    return parts.join(" ");
  }

  render() {
    return <div>{JSON.stringify(this.props.args, null, 2)}</div>;
    const {
      cmd,
      text,
      icon,
      target,
      name,
      description,
      directives,
      size = "medium",
      color = "gray",
      ...fields
    } = this.props.args;

    console.log("fields");
    console.log(fields);

    // display-nameify
    // remove the name and description field

    // const keys = Object.keys(fields);
    // const ITEMFIELDS = keys.map(k => {
    //   const value = item[k];
    //   return { name: this.displayName(k), value };
    // });

    return (
      <div onClick={() => this.handler({ directives })}>
        <ItemDetail name={name} description={description} fields={fields} />
      </div>
    );
  }
}

// venmo://paycharge?txn=pay recipients=Alex-Beals Amount=10 note=Note
