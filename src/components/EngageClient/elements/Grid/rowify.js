import React from "react";

export default function rowify(array, { rowlength, rowbreaks }) {
  // row breaks is an array with the breakpoints for each row [10,9,7] for qwerty kb

  const rows = [];
  let numinrow = 0;
  let row = [];
  for (let i = 0; i < array.length; i++) {
    row.push(<div class="flex-none m-1">{array[i]}</div>);
    numinrow++;
    const num = i + 1;

    // do we rowbreak?
    let rbreak;
    if (rowlength) rbreak = num % rowlength === 0 ? true : false;
    else if (rowbreaks) {
      // what row are we on?
      const rownum = rows.length;
      const rowlimit = rowbreaks[rownum] || rowbreaks[0]; // if over rowlin use the first one..kludge
      rbreak = numinrow >= rowlimit ? true : false;
    }

    if (rbreak) {
      rows.push(<div class="flex justify-center items-center">{row}</div>);
      row = [];
      numinrow = 0;
    }
  }
  if (row.length !== 0)
    rows.push(<div class="flex justify-center items-center">{row}</div>);
  return <div class="flex-col justify-center items-center">{rows}</div>;
}
