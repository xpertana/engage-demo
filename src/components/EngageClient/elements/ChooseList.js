import React from "react";

export default function List(props) {
  const { data, returnCtx = "result" } = props.args;

  function handleSubmit(data) {
    const ctxout = {};
    ctxout[returnCtx] = data;
    props.handler({ ctxout });
  }

  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul>
        {data.map(i => (
          <Item item={i} handler={handleSubmit} />
        ))}
      </ul>
    </div>
  );
}

function Item(props) {
  return (
    <li
      onClick={() => props.handler(props.item)}
      class="border-t border-gray-200"
    >
      <a
        href="#"
        class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
      >
        <div class="flex items-center px-4 py-4 sm:px-6">
          <div class="min-w-0 flex-1 flex items-center">
            {/* <div class="flex-shrink-0">
              <ElemAvatar />
            </div> */}
            <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                  {props.item.name}
                </div>
              </div>
              <div class="md:block">
                <div>
                  <div class="text-sm leading-5 text-gray-900">
                    {props.item.value}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <svg
              class="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </a>
    </li>
  );
}
