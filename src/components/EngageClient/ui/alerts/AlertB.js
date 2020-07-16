import React from "react";

export default function AlertB(props) {
  const { title, text, action, returnCtx } = props.args;

  console.log(props);

  return (
    <div class="rounded-md bg-blue-50 p-4">
      <div class="flex">
        <div
          class="
        flex-shrink-0"
        >
          <svg
            class="h-5 w-5 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3 flex-1 md:flex md:justify-between">
          <p class="text-sm leading-5 text-blue-700">
            A new software update is available. See what’s new in version 2.0.4.
          </p>
          <p class="mt-3 text-sm leading-5 md:mt-0 md:ml-6">
            <a
              href="#"
              class="whitespace-no-wrap font-medium text-blue-700 hover:text-blue-600 transition ease-in-out duration-150"
            >
              Details &rarr;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
