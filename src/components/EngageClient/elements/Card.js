import React from "react";

export default function Card(props) {
  const { args, handler } = props;

  return (
    <div class="mt-1 bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {args.title}
        </h3>
        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
          <p>{args.text}</p>
        </div>
        {args.actions && (
          <div class="mt-5">
            <button
              type="button"
              class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-50 focus:outline-none focus:border-red-300 focus:shadow-outline-red active:bg-red-200 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              Delete account
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
