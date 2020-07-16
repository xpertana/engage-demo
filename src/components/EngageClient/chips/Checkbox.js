import React from "react";

export default function Checkbox({ checked }) {
  return (
    <span className="">
      <label className="flex justify-start items-start">
        <div className="bg-white border-2 rounded border-gray-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
          <input type="checkbox" className="opacity-0 absolute" />
          {checked && (
            <svg
              className="fill-current w-4 h-4 text-green-500 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
          {/* {checked && <div>YO!</div>} */}
        </div>
      </label>
    </span>
  );
}
