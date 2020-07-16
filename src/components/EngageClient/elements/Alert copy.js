import React from "react";
import Card from "../ui/Card";

export default function ElemCallToAction(props) {
  const { title, text, action, returnCtx } = props.args;

  console.log(props);

  return (
    <div class="rounded-md bg-green-50 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg
            class="h-5 w-5 text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm leading-5 font-medium text-green-800">{title}</h3>
          <div class="mt-2 text-sm leading-5 text-green-700">
            <p>{text}</p>
          </div>
          <div class="mt-4">
            <div class="-mx-2 -my-1.5 flex">
              <button
                onClick={() => props.handler({ ctxout: { foo: true } })}
                class="ml-3 px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150"
              >
                Set Foo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
