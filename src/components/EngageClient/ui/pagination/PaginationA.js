import React from "react";

// see https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/pagination/with-numbers

export default function PaginationA(props) {
  const {
    color = "green-400",
    value,
    showValue = false,
    text = "Task"
  } = props;

  return (
    <div class="py-2">
      <nav class="block">
        <ul class="flex pl-0 rounded list-none flex-wrap">
          <li>
            <a
              href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500"
            >
              <i class="fas fa-chevron-left -ml-px"></i>
              <i class="fas fa-chevron-left -ml-px"></i>
            </a>
          </li>
          <li>
            <a
              href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500"
            >
              <i class="fas fa-chevron-left -ml-px"></i>
            </a>
          </li>
          <li>
            <a
              href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500"
            >
              <i class="fas fa-chevron-right -mr-px"></i>
            </a>
          </li>
          <li>
            <a
              href="#pablo"
              class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500"
            >
              <i class="fas fa-chevron-right -mr-px"></i>
              <i class="fas fa-chevron-right -mr-px"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
