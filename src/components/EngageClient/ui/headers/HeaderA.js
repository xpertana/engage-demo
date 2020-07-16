import React from "react";
import Icon from "../icons/IconA";

export default function HeaderA(props) {
  const {
    args: { text, image, left, color1 = "white", color2 = "gray" }
  } = props;

  return (
    <nav style={{ backgroundColor: color2 }} class="w-full">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div class="relative flex items-center justify-between h-12">
          <div class="flex-1 flex items-center justify-center sm:items-center sm:justify-start">
            {left && (
              <div onClick={() => props.handler()} class="">
                <Icon icon={left[0]} size={20} color={color1}></Icon>
              </div>
            )}
            <div class="flex-shrink-0">
              {/* {mark && (
                <img class="block lg:hidden h-8 w-auto" src={mark} alt="" />
              )} */}
              {image && (
                <img class="hidden lg:block h-8 w-auto" src={image} alt="" />
              )}
            </div>
            <div style={{ color: color1 }} class="mx-4 flex-1">
              {text}
            </div>
          </div>

          {/* <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
