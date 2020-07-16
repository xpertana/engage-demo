import React, { Component } from "react";
import Cards from "react-credit-cards";

const sizeMap = {
  tiny: 100,
  small: 150,
  medium: 256,
  large: 350,
  huge: 450
};

export default class CreditCard extends Component {
  handler(type, isValid) {
    console.log("update cc:");
    console.log(type);
    console.log(isValid);
    this.props.handler({ data: "yo" });
  }
  render() {
    const { ctx } = this.props.args;

    // return <div>{JSON.stringify(this.props.args)}</div>;

    if (!ctx) return <div>Invalid Card CTX</div>;
    const cardvalue = ctx.cv;

    return (
      <div className="m-4 flex flex-inline justify-center items-center">
        <Cards
          cvc={cardvalue.ccv}
          expiry={cardvalue.ccexp}
          focus={false}
          preview={true}
          name="John Doe"
          number={cardvalue.ccnum}
          callback={this.handler.bind(this)}
        />
      </div>
    );
  }
}
