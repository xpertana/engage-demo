import React from "react";

export default function AvatarB(props) {
  const { text = "{text}", image } = props;
  return (
    <a href="#" class="flex-shrink-0 group block focus:outline-none">
      <div class="flex items-center">
        <div>
          <img class="inline-block h-20 w-20 rounded-full" src={image} alt="" />
        </div>
        <div class="ml-3">
          <p class="text-sm leading-5 font-medium text-gray-700 group-hover:text-gray-900">
            {text}
          </p>
          <p class="text-xs leading-4 font-medium text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">
            View Profile
          </p>
        </div>
      </div>
    </a>
  );
}
