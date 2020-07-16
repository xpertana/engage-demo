import React, { Component } from "react";

export default class Debug extends Component {
  handler(data) {
    console.log(`Debug Element Handler:`);
    console.log(data);
    this.props.handler(data);
  }

  handleClick() {
    if (this.props.args.hideafterclick) this.hide();
  }

  displayName(text) {
    let parts = text.split("-");
    parts = parts.map(p => capitalize(p));
    return parts.join(" ");
  }

  render() {
    return <div>{JSON.stringify(this.props)}</div>;
    const {
      directive,
      element,
      color,
      size,
      returnCtx,
      ...fields
    } = this.props.args;

    return (
      <div onClick={() => this.handler({ directives })}>
        <ElemRecord directive={directive} element={element} fields={fields} />
      </div>
    );
  }
}

// venmo://paycharge?txn=pay recipients=Alex-Beals Amount=10 note=Note

function ElemRecord({ element, returnCtx, color, size, fields }) {
  return (
    <div class="mt-2 bg-white shadow overflow-hidden  sm:rounded-lg">
      <div class="bg-gray-200 px-4 py-2 border-b border-gray-200 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          element: {element}
        </h3>
        <p class={`mt-1 text-sm leading-5 text-${color}-500`}>
          color: {color} size: {size}
        </p>
      </div>
      {returnCtx && (
        <div class="text-xs px-4 bg-green-100">returnCtx: {returnCtx}</div>
      )}

      <div class="px-4 py-5 sm:p-0">
        <dl>
          {/* {JSON.stringify(fields)} */}
          {Object.keys(fields).map(f => (
            <div class="border-t sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-1">
              <dt class="text-xs leading-5 font-medium text-gray-500">{f}</dt>
              <dd class="mt-1 text-xs leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {fields[f]}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
