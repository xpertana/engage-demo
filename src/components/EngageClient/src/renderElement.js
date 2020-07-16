import React from "react"
import renderMap from "../elements"
// decode to use as needed
import ElemDecode from "../elements/ElemDecode"
import color2hex from "../lib/color2hex"

export default function render(elementRecord, i) {
  // console.log("renderElement", elementRecord);
  const { element } = elementRecord

  // if (elementRecord.color) elementRecord.color = color2hex(elementRecord.color);
  // if (elementRecord.color1)
  //   elementRecord.color1 = color2hex(elementRecord.color1);
  // if (elementRecord.color2)
  //   elementRecord.color2 = color2hex(elementRecord.color2);

  // console.log(`COLOR1: ${elementRecord.color1}`);
  // console.log(`COLOR2: ${elementRecord.color2}`);

  // if we have a data field, sniff the first record for a color field.
  // if we find one in the first, assume they all have them and run
  // color2hex across all
  if (elementRecord.data && elementRecord.data[0].color) {
    elementRecord.data = elementRecord.data.map(x => {
      if (x.color) x.color = color2hex(x.color)
      return x
    })
    // console.log("colorized data");
    // console.log(elementRecord.data);
  }

  // pkey is combines with lower level child keys to make unique..
  const props = {
    pkey: i,
    args: elementRecord,
    // args: this.stylelize(elementRecord),
    theme: this.E.state.theme,
    handler: this.mainHandler.bind(this),
    //SD: this.E.serverDriver.bind(this)
  }

  if (renderMap[element]) return renderMap[element](props)
  else
    return (
      <ElemDecode
        pkey={i}
        //args={this.stylelize(elementRecord)}
        args={props}
        handler={this.mainHandler.bind(this)}
      />
    )
}
