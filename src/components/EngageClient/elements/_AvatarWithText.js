import React from "react";

export default function Avatar(props) {
  const {
    alt = "avatar image",
    twsize = 28,
    text,
    text2 = "Founder/CEO",
    image
    //image = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  } = props;

  return (
    <div className="m-4 flex flex-inline justify-center items-center">
      <a href="#" class="flex-shrink-0 group block focus:outline-none">
        <div class="flex items-center">
          <div>
            <img
              class={`inline-block h-${twsize} w-${twsize} rounded-full`}
              src={image}
              alt={alt}
            />
          </div>
          <div class="ml-3">
            <p class="text-sm leading-5 font-medium text-gray-700 group-hover:text-gray-900">
              {text}
            </p>
            <p class="text-xs leading-4 font-medium text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">
              {text2}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
