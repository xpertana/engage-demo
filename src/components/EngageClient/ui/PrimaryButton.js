import React from "react";

export default function Button(props) {
  const {
    text = "Button Text",
    size = "small",
    color = "gray",
    icon = true
  } = props;

  switch (size) {
    case "tiny":
      return (
        <span className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-${color}-600 hover:bg-${color}-500 focus:outline-none focus:border-${color}-700 focus:shadow-outline-${color} active:bg-${color}-700 transition ease-in-out duration-150`}
          >
            {text}
          </button>
        </span>
      );

    case "small":
      return (
        <span className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-${color}-600 hover:bg-${color}-500 focus:outline-none focus:border-${color}-700 focus:shadow-outline-${color} active:bg-${color}-700 transition ease-in-out duration-150`}
          >
            {text}
          </button>
        </span>
      );

    case "large":
      return (
        <span className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-${color}-600 hover:bg-${color}-500 focus:outline-none focus:border-${color}-700 focus:shadow-outline-${color} active:bg-${color}-700 transition ease-in-out duration-150`}
          >
            {text}
          </button>
        </span>
      );
    case "huge":
      return (
        <span className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-${color}-600 hover:bg-${color}-500 focus:outline-none focus:border-${color}-700 focus:shadow-outline-${color} active:bg-${color}-700 transition ease-in-out duration-150`}
          >
            {text}
          </button>
        </span>
      );

    case "medium":
    default:
      return (
        <span className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-${color}-600 hover:bg-${color}-500 focus:outline-none focus:border-${color}-700 focus:shadow-outline-${color} active:bg-${color}-700 transition ease-in-out duration-150`}
          >
            {text}
          </button>
        </span>
      );
  }
}
