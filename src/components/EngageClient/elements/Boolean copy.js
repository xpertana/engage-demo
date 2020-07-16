import React from "react";

export default function Boolean(props) {
  const { args, handler } = props;
  const { value } = args;

  if (value === true)
    return (
      <span className="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className={`inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none transition ease-in-out duration-150`}
        >
          TRUE!
        </button>
      </span>
    );
  else
    return (
      <span className="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className={`inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none transition ease-in-out duration-150`}
        >
          FALSE!
        </button>
      </span>
    );
}
