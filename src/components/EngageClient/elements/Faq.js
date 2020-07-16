import React, { Component } from "react";

const D = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  }
];

export default function Faq(props) {
  const { args } = props;
  const { title, data } = args;

  return (
    <div class="bg-gray-50">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            {title ? title : "Frequently asked questions"}
          </h2>
          <div class="mt-6 border-t-2 border-gray-200 pt-6">
            <dl>
              {D.map(qa => (
                <Question qa={qa} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const qa = this.props.qa;
    const iconState = this.state.open ? "-rotate-180" : "rotate-0";
    const invisible = this.state.open ? "visible" : "invisible";

    return (
      <div>
        <dt class="text-lg leading-7">
          <button
            onClick={() => this.setState({ open: !this.state.open })}
            className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
          >
            <span class="font-medium text-gray-900">{qa.question}</span>
            <span class="ml-6 h-7 flex items-center">
              <svg
                class={`${iconState} h-6 w-6 transform" stroke="currentColor" fill="none" viewBox="0 0 24 24`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
        </dt>
        <dd class={`${invisible} mt-2 pr-12`}>
          <p class="text-base leading-6 text-gray-500">{qa.answer}</p>
        </dd>
      </div>
    );
  }
}
