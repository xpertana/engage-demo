import React from "react";
import Card from "./Card";

export default function ItemData({ name, description, fields }) {
  return (
    <div class="bg-white shadow overflow-hidden  sm:rounded-lg">
      <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">{name}</h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          {description}
        </p>
      </div>
      <div class="px-4 py-5 sm:p-0">
        <dl>
          {/* {JSON.stringify(fields)} */}
          {Object.keys(fields).map(f => (
            <div class="border-t sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-3">
              <dt class="text-sm leading-5 font-medium text-gray-500">{f}</dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {fields[f]}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
