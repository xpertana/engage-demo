import React from "react";

export default function ButtonGroup(props) {
  const { data, returnCtx = "result" } = props.args;

  function handleSubmit(data) {
    const ctxout = {};
    ctxout[returnCtx] = data;
    props.handler({ ctxout });
  }

  return (
    <div className="m-4 p-2 flex flex-inline justify-center items-center">
      <div class="bg-white shadow overflow-hidden sm:rounded-md">
        <span class="relative z-0 inline-flex shadow-sm">
          <ul>
            {data.map(i => (
              <Button item={i} handler={handleSubmit} />
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <button
      onClick={() => props.handler(props.item)}
      type="button"
      class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
    >
      {props.item.name}
    </button>
  );
}
