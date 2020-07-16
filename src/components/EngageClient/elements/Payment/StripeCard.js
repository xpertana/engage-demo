import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const SubmitButton = ({ args, processing, error, children, disabled }) => (
  <button
    style={{ color: args.color2, backgroundColor: args.color1 }}
    className={`my-4 p-2 rounded SubmitButton ${
      error ? "SubmitButton--error" : ""
    }`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? "Processing..." : children}
  </button>
);

const CheckoutForm = props => {
  const stripe = useStripe();
  const elements = useElements();

  const { size = 3, color1, color2 } = props.args;

  const sizeMap = [
    [24, ""],
    [22, ""],
    [20, ""],
    [18, ""],
    [16, ""]
  ];

  const [fsz] = sizeMap[size - 1];

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: color1,
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: `${fsz}px`,
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: "#87bbfd" }
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee"
      }
    }
  };

  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement
    });

    if (error) {
      console.log("[error]", error);
      props.handler({ yo: "error" });
    } else {
      console.log("[PaymentMethod]", paymentMethod);

      // we build a Stripe Payment Method object
      const pm = {
        provider: "stripe",
        id: paymentMethod.id,
        cardbrand: paymentMethod.card.brand,
        icon: paymentMethod.card.brand,
        last4: paymentMethod.card.last4,
        exp: `${paymentMethod.card.exp_month}/${paymentMethod.card.exp_year}`
      };

      // we call MAIN HANDLER!
      const setctx = { name: "_lv", type: 39, value: pm };
      props.handler({ setctx });
    }
  };

  return (
    <div style={{ color: color1, backgroundColor: color2 }} class="m-8 p-2">
      {/* <fieldset className="FormGroup">
        <div className="FormRow">
          <CardElement options={CARD_OPTIONS} onChange={onChange} />
        </div>
      </fieldset> */}

      <form onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />

            <SubmitButton
              args={props.args}
              processing={false}
              error={false}
              disabled={!stripe}
            >
              Stripe Pay
            </SubmitButton>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CheckoutForm;
