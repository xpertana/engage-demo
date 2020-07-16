import React from "react";
// import { CreditCard } from "react-feather";

export default function PaymentInfo({ handler, ccnum, ccexp, ccv }) {
  return (
    <div className="bg-white my-4 shadow p-8 rounded-lg">
      <div className="w-full">
        {/* <CreditCard size="24" color="gray" /> */}
        <label for="payment" className="block text-sm mb-2">
          Credit Card
        </label>
        <div className="flex">
          <input
            type="text"
            id="payment"
            className="w-5/6 flex-1 text-sm bg-grey-light text-grey-darkest rounded-l p-3 focus:outline-none"
            placeholder="Card Number"
          />
          <input
            type="text"
            id="payment"
            className="w-1/6 inline-block text-sm bg-grey-light text-grey-darkest p-3 focus:outline-none"
            placeholder="MM / YY"
          />
          <input
            type="text"
            id="payment"
            className="w-1/6 inline-block text-sm bg-grey-light text-grey-darkest rounded-r p-3 focus:outline-none"
            placeholder="CVC"
          />
        </div>
      </div>
    </div>
  );
}
