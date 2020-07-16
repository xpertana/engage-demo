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
        <button
          type="button"
          className={`inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-${color}-700 bg-${color}-100 hover:bg-${color}-50 focus:outline-none focus:border-${color}-300 focus:shadow-outline-${color} active:bg-${color}-200 transition ease-in-out duration-150`}
        >
          {text}
        </button>
      );

    case "small":
      return (
        <button
          type="button"
          className={`inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-${color}-700 bg-${color}-100 hover:bg-${color}-50 focus:outline-none focus:border-${color}-300 focus:shadow-outline-${color} active:bg-${color}-200 transition ease-in-out duration-150`}
        >
          {text}
        </button>
      );

    case "large":
      return (
        <button
          type="button"
          className={`inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-${color}-700 bg-${color}-100 hover:bg-${color}-50 focus:outline-none focus:border-${color}-300 focus:shadow-outline-${color} active:bg-${color}-200 transition ease-in-out duration-150`}
        >
          {text}
        </button>
      );
    case "huge":
      return (
        <button
          type="button"
          className={`inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-${color}-700 bg-${color}-100 hover:bg-${color}-50 focus:outline-none focus:border-${color}-300 focus:shadow-outline-${color} active:bg-${color}-200 transition ease-in-out duration-150`}
        >
          {text}
        </button>
      );

    case "medium":
    default:
      return (
        <button
          type="button"
          className={`inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-${color}-700 bg-${color}-100 hover:bg-${color}-50 focus:outline-none focus:border-${color}-300 focus:shadow-outline-${color} active:bg-${color}-200 transition ease-in-out duration-150`}
        >
          {text}
        </button>
      );
  }
}
