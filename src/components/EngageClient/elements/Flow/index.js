import React, { Component } from "react";
import Button from "../../ui/buttons/ButtonA";
import Icon from "../../ui/icons/IconA";

const FLOW = [
  {
    icon: "settings",
    flop: "profile",
    variant: "save",
    source: "set profile to 3"
  },
  { icon: "cube", flop: "site", variant: "list", source: "site list" },
  { icon: "settings", flop: "Save Profile", source: "set profile to 3" }
];

export default class Flow extends Component {
  renderStep(step) {
    return (
      <li>
        <a
          href="#"
          class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
        >
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
              <Icon size={24} icon={step.icon} />
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                  {step.text}
                </div>
                <div class="hidden md:block">
                  <div class="text-gray-400 text-xs">
                    <pre>{step.source}</pre>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span class="relative z-0 inline-flex shadow-sm">
                <button
                  type="button"
                  class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                >
                  <Icon icon="trash" size={16} />
                </button>
                <button
                  type="button"
                  class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                >
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </span>
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
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </a>
      </li>
    );
  }
  render() {
    return (
      <div>
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <ul>
            {FLOW.map(step => this.renderStep(step))}
            <li class="border-t border-gray-200">
              <a
                href="#"
                class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                <span class="w-full inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    class="w-full inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >
                    <i class="fas fa-plus"></i>
                    Add Step
                  </button>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
