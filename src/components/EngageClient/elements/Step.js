import React from "react";
import Icon from "../ui/icons/IconA";

export default function Step(props) {
  const { ctx, _index, _parent } = props.args;

  if (!ctx) return <div>NO VALID STEP TO DISPLAY</div>;

  const {
    icon = "circle",
    text = "sometext",
    comment = false,
    color1 = "gray",
    group = "group"
  } = ctx.cv;

  const stepColor = comment ? "gray" : "blue";

  // return <div>{JSON.stringify(props.args)}</div>;

  if (comment)
    return (
      <div className="my-1 px-2 flex flex justify-between items-center">
        <div
          class={`flex-1 flex jusitfy-between items-center rounded bg-gray-100`}
        >
          <div
            onClick={() => props.handler({ yo: "comment", directives: [[99]] })}
            class={`bg-gray-100 text-gray-400 rounded-full w-8 p-1 text-center`}
          >
            <Icon icon={icon} color="#dddddd" size={14} />
          </div>
          <div
            onClick={() => props.handler({ yo: "edit", directives: [[99]] })}
            class={`pl-2 flex-1 text-xs text-gray-300`}
          >
            {text}
          </div>
        </div>
        <div
          onClick={() => props.handler({ action: "moveup", _index, _parent })}
          class="ml-1 bg-gray-100 text-gray-600 rounded w-8 p-1 text-center"
        >
          <Icon icon="arrowup" color="#dddddd" size={14} />
        </div>
        <div
          onClick={() => props.handler({ action: "movedown", _index, _parent })}
          class="ml-1 bg-gray-100 text-gray-800 rounded w-8 p-1 text-center"
        >
          <Icon icon="arrowdown" color="#dddddd" size={14} />
        </div>
        <div
          onClick={() => props.handler({ yo: "delete", _index, _parent })}
          class="ml-2 bg-gray-100 text-gray-800 rounded w-8 p-1 text-center"
        >
          <Icon icon="delete" color="#dddddd" size={14} />
        </div>
      </div>
    );

  return (
    <div className="my-1 px-2 flex flex justify-between items-center">
      <div
        class={`flex-1 flex jusitfy-between items-center rounded bg-${stepColor}-200`}
      >
        <div
          onClick={() =>
            props.handler({
              action: "comment",
              target: group,
              directives: [[99]]
            })
          }
          class={`bg-blue-800 rounded w-8 p-1 text-center`}
        >
          <Icon icon={icon} color={"white"} size={14} />
        </div>
        <div
          onClick={() => props.handler({ yo: "edit", directives: [[99]] })}
          class={`pl-2 flex-1 text-xs text-${stepColor}-700`}
        >
          {text}
        </div>
      </div>
      <div
        onClick={() =>
          props.handler({
            action: "moveup",
            _index,
            _parent
          })
        }
        class="ml-1 bg-gray-100 text-gray-600 rounded w-8 p-1 text-center"
      >
        <Icon icon="arrowup" color={color1} size={14} />
      </div>
      <div
        onClick={() =>
          props.handler({
            action: "movedown",
            _index,
            _parent
          })
        }
        class="ml-1 bg-gray-100 text-gray-800 rounded w-8 p-1 text-center"
      >
        <Icon icon="arrowdown" color={color1} size={14} />
      </div>
      <div
        onClick={() => props.handler({ action: "delete", _index, _parent })}
        class="ml-2 bg-gray-200 text-red-200 rounded w-8 p-1 text-center"
      >
        <Icon icon="delete" color="gray" size={14} />
      </div>
    </div>
  );
}
