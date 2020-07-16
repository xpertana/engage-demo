import React from "react";
import InputWithAddon from "../../ui/InputWithAddon";
import TextArea from "../../ui/TextArea";

export default function InputWithLeadingText({ leadingText, prompt, handler }) {
  return <TextArea leadingText={leadingText} />;
  return <InputWithAddon leadingText={leadingText} />;

  return (
    <div className="my-8">
      <div className="pb-6 md:pb-0 flex flex-col">
        <label for="name" className="input-label text-base mb-2">
          {prompt}
        </label>
        <div>
          <label className="input-field inline-flex items-baseline border-none shadow-md bg-white p-4">
            <span className="flex-none text-dusty-blue-darker select-none leading-none">
              https://renner.engage.run/
            </span>
            <div className="flex-1 leading-none">
              <input
                id="handle"
                type="text"
                className="placeholder-blue w-full p-0 no-outline text-dusty-blue-darker"
                name="handle"
                placeholder="start"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
