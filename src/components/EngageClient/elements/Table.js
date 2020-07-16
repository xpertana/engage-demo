import React from "react";

export default function ElemTable(props) {
  let { columns, title, data, deletebutton, actions } = props.args;

  // columns --- csv that shows which columns
  // it can also have an optional format designation...
  // e.g. percent:field

  // return <div>{JSON.stringify(props.args)}</div>;

  // get the keys of first Array item. Assume these as columns
  if (data.length === 0) return <div>Empty Table</div>;
  const [header, ...rest] = data;

  let displayColumns = Object.keys(header);
  let FORMATS = {};
  let COLS = displayColumns;
  if (columns) {
    // we will retrict column display to just a few
    displayColumns = columns.split(",");
    displayColumns.forEach(col => {
      const [fmt, c] = col.split(":");
      if (c) {
        FORMATS[c] = fmt;
        COLS.push(c);
      } else COLS.push(fmt);
    });
  }

  function renderRow(index, row, columns, formats) {
    const Row = columns.map(c => {
      return (
        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 border-b border-gray-200 font-medium text-gray-900">
          {formatCell(row[c], formats[c])}
        </td>
      );
    });

    // EDIT ACTION IF PRESENT
    if (actions && actions.detail)
      Row.push(
        <td
          onClick={() => props.handler({ directives: actions.detail, index })}
          class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
        >
          <a
            href="#"
            class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
          >
            Detail
          </a>
        </td>
      );

    // DELETE ACTION IF PRESENT
    if (actions && actions.delete)
      Row.push(
        <td
          onClick={() => props.handler({ directives: actions.delete, index })}
          class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
        >
          <a
            href="#"
            class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
          >
            Delete
          </a>
        </td>
      );
    return Row;
  }

  function formatCell(value, format) {
    switch (format) {
      case "currency":
        const formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2
        });
        return formatter.format(value);
      case "percent":
        return "xxx";
      default:
        return value;
    }
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          {/* {JSON.stringify(data)} */}
          <table className="min-w-full">
            <thead>
              <tr>
                {displayColumns.map(col => (
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    {col}
                  </th>
                ))}
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr className="bg-white">
                  {renderRow(index, row, COLS, FORMATS)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
