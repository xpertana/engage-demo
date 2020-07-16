import React from "react";
import Icon from "../elements/Icon";

export default function Avatar(props) {
  const {
    label = "Account Number",
    twsize = 14,
    icon = false,
    hint = null,
    hiddenLabel = false,
    button = "Enter",
    placeholder = "",
    description,
    onChange,
    onKeyPress,
    value,
    prompt = null
  } = props;

  return (
    <div>
      {prompt && (
        <label
          for="email"
          class="block text-sm font-medium leading-5 text-gray-700"
        >
          {prompt}
        </label>
      )}

      <div class="mt-1 flex rounded-md shadow-sm">
        <div class="relative flex-grow focus-within:z-10">
          {icon && (
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                class="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
          )}
          <input
            id={label}
            class="form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            placeholder={placeholder}
            onKeyPress={onKeyPress}
            onChange={onChange}
            value={value}
          />
        </div>
        <button class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          <span class="ml-2">{button}</span>
        </button>
      </div>
      {description && <p class="mt-2 text-xs text-gray-600">{description}</p>}
    </div>
  );
}
