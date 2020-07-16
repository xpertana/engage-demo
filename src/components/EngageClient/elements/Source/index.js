import React from "react";
import Editor from "react-simple-code-editor";
import highlight from "./highlightFluent";

// const lineMark = {
//   comment: <div class="text-center text-gray-400">#</div>,
//   new: <div class="text-center text-gray-400">○</div>,
//   ok: <div class="text-center text-green-400">●</div>,
//   ok: <div class="text-center text-gray-200">●</div>,
//   error: <div class="text-center text-red-400">●</div>
// };

function lineMarks(source) {
  const lines = source.split("\n");
  return lines.map((l, i) => (
    <div
      style={{ fontSize: 12, height: 24.5 }}
      class="w-4 text-center text-gray-400"
    >
      {i + 1}
    </div>
  ));
}

export default function Source(props) {
  console.log(props);

  const flowName = "Fluent Source";
  let source = props.args.text;
  //source = source.split("->");
  //source = source.join("\n");

  return (
    <div class="mx-4 my-2 flex bg-white flex-col border rounded justify-between items-center">
      <div class="w-full text-white bg-gray-300 px-2 ">fluent steps</div>

      <div class="w-full bg-blue-50 flex flex-between">
        <div style={{ paddingTop: 10 }} class="w-6 bg-blue-100">
          {lineMarks(source)}
        </div>
        <div class="flex-1 flex justify-between items-center">
          <div class="text-blue-600 bg-blue-50 px-2 max-w-7xl">
            <Editor
              value={source}
              onValueChange={source => {}}
              //highlight={source => highlight(source)}
              highlight={source => source}
              padding={4}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                border: "none"
              }}
            />
          </div>
        </div>
        {/* {JSON.stringify(this.state.flow)} */}
      </div>
    </div>
  );
}
