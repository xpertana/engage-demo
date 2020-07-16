import React from "react";
import Button from "../ui/buttons/ButtonA";
import color2hex from "../lib/color2hex";

export default function Buttons(props) {
  const { left, right, retctx, size } = props.args;

  function handleSubmit(data) {
    const ctxout = {};
    ctxout[retctx] = data;
    props.handler({ ctxout });
  }

  // const { text, action, iconleft, iconright, size = 4 } = args;

  // map args
  const L = {
    text: left.tx,
    iconleft: left.ic,
    action: { directives: left.dir },
    size,
    color1: left.color1 ? color2hex(left.color1) : "ghostwhite",
    color2: left.color2 ? color2hex(left.color2) : "gray"
  };
  const R = {
    text: right.tx,
    iconleft: right.ic,
    action: { directives: right.dir },
    size,
    color1: right.color1 ? color2hex(right.color1) : "ghostwhite",
    color2: right.color2 ? color2hex(right.color2) : "lightgray"
  };

  return (
    <div className="m-4 p-2 flex flex-inline flex-wrap justify-center items-center">
      <div class="mr-1">
        <Button handler={props.handler} args={L} />
      </div>
      <div class="mr-1">
        <Button handler={props.handler} args={R} />
      </div>
    </div>
  );
}

// function Button(props) {
//   return (
//     <span class="m-1 inline-flex rounded-md shadow-sm">
//       <button
//         onClick={() => props.handler(props.item)}
//         type="button"
//         class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
//       >
//         {props.item.name}
//       </button>
//     </span>
//   );
// }
