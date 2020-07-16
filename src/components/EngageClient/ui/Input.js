import React from "react";
import Icon from "../elements/Icon";

export default function Avatar(props) {
  const {
    label = "Account Number",
    twsize = 14,
    icon,
    hint = null,
    hiddenLabel = false,
    placeholder = "",
    description,
    text = null,
    onKeyPress,
    onChange,
    value
  } = props;

  return (
    <div>
      <div class="flex justify-between">
        {hiddenLabel ? (
          <label for="email" class="sr-only">
            {text}
          </label>
        ) : (
          <label
            for={text}
            class="block text-sm font-medium leading-5 text-gray-700"
          >
            {text}
          </label>
        )}
        {hint && <span class="text-sm leading-5 text-gray-500">{hint}</span>}
      </div>

      {icon ? (
        <div class="mt-1 relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon type={icon} size={18} color={"gray"} />
          </div>
          <input
            id={text}
            autoFocus={true}
            class="form-input block w-full pl-10 sm:text-sm sm:leading-5"
            placeholder={placeholder}
            //type={MASK ? "password" : "text"}
            onKeyPress={onKeyPress}
            onChange={onChange}
            value={value}
          />
        </div>
      ) : (
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            id={text}
            autoFocus={true}
            class="form-input block w-full sm:text-sm sm:leading-5"
            placeholder={placeholder}
            onKeyPress={onKeyPress}
            onChange={onChange}
            value={value}
          />
        </div>
      )}

      {description && <p class="mt-2 text-xs text-gray-600">{description}</p>}
    </div>
  );
}
