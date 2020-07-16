//const SC = require("./STYLECODES");
//const ELEMENTS = require("./ELEMENTS");
//const CODES = require("./CODES");


const CODES = {
  // FORMATS
  LIST: 40,
  GRID: 41,
  TEXTLINE: 42,
  TEXTAREA: 43,
  HORIZ: 44,
  VERT: 45,
  // SIZES
  SMALL: 50,
  MEDIUM: 51,
  LARGE: 52,
  // SPECIFICS
  COLOR: 60,
  BGCOLOR: 61,
  FONT: 62,
  FONTWEIGHT: 63,
  VOICE: 64,
  VARIANT: 65
};

const ELEMENTS = {
  THEME: 10,
  SCREEN: 11,
  BODY: 12,
  FRAME: 13,
  TEXTBLOCK: 14,
  TEXT: 15,
  TITLE: 16,
  SUBTEXT: 17,
  FINEPRINT: 18,
  SELECT: 19,
  CHIP: 20,
  INPUT: 21,
  BUTTON: 22,
  BUTTONBAR: 23,
  CARD: 24,
  SEPERATOR: 25,
  IMAGE: 26,
  SPEECH: 27,
  SOUND: 28
};

function breakdown(stylecode) {
  const S = String(stylecode);
  const elem = Number(S.slice(0, 2));
  const code = Number(S.slice(2, 4));
  let V = null;
  if (S.length > 4) {
    V = Number(S.slice(4));
    if (!V) V = ERROR;
  }
  return [elem, code, V];
}


function stylelizeCode(stylecode) {
  const [elem, code, value] = breakdown(stylecode);
  console.log(elem, code, value);
  switch (elem) {
    case ELEMENTS.THEME:
      // future
      return { error: SC.ERROR };
    case ELEMENTS.SCREEN:
      return styleScreen(code, value);
    case ELEMENTS.FRAME:
      return styleScreen(code, value);
    case ELEMENTS.TEXTBLOCK:
      return styleTextBlock(code, value);

    case ELEMENTS.TEXT:
      return styleText(code, value);

    case ELEMENTS.TITLE:
      return styleTitle(code, value);

    case ELEMENTS.SUBTEXT:
      return styleSubtext(code, value);

    case ELEMENTS.FINEPRINT:
      return styleFineprint(code, value);

    case ELEMENTS.SELECT:
      return styleSelect(code, value);

    case ELEMENTS.CHIP:
      return styleChip(code, value);

    case ELEMENTS.INPUT:
      return styleInput(code, value);

    case ELEMENTS.BUTTON:
      return styleButton(code, value);
    case ELEMENTS.BUTTONBAR:
      return styleButtonbar(code, value);

    case ELEMENTS.CARD:
      return styleCard(code, value);

    case ELEMENTS.SEPERATOR:
      return styleSeperator(code, value);

    case ELEMENTS.IMAGE:
      return styleImage(code, value);

    case ELEMENTS.SPEECH:
      return styleSpeech(code, value);

    default:
      return { error: SC.ERROR };
  }
}

const FONTS = ["monospace", "Roboto", "Verdana"];
const VOICES = ["tbd"];

export default stylelizeCode;

//
// STYLE SCREEN
//
function styleScreen(code, value) {
  console.log(code, value);
  switch (code) {
    // GENERALIZED
    case CODES.LIST:
      return styleList();
    case CODES.GRID:
      return styleGrid();
    case CODES.COLOR:
      return styleColor();
    case CODES.BGCOLOR:
      return styleBgColor();
    case CODES.FONT:
      return styleFont(value);
    case CODES.FONTWEIGHT:
      return styleFontWeight(value);
    case CODES.SMALL:
      return styleSizeText(CODES.SMALL);
    case CODES.MEDIUM:
      return styleSizeText(CODES.MEDIUM);
    case CODES.LARGE:
      return styleSizeText(CODES.LARGE);

    // SPECIALIZED
    default:
      return { error: SC.ERROR };
  }
}

//
// STYLE FRAME
//
function styleFrame(code, value) {
  switch (code) {
    // GENERALIZED
    case CODES.LIST:
      return styleList();
    case CODES.GRID:
      return styleGrid();
    case CODES.COLOR:
      return styleColor();
    case CODES.BGCOLOR:
      return styleBgColor();
    case CODES.FONT:
      return styleFont(value);
    case CODES.FONTWEIGHT:
      return styleFontWeight(value);
    // SPECIALIZED
    default:
      return { error: SC.ERROR };
  }
}

//
// TEXTBLOCK
//
function styleTextBlock(code, value) {
  switch (code) {
    // GENERALIZED
    case CODES.COLOR:
      return styleColor();
    case CODES.BGCOLOR:
      return styleBgColor();
    case CODES.FONT:
      return styleFont(value);
    case CODES.FONTWEIGHT:
      return styleFontWeight(value);
    case CODES.SMALL:
      return styleSizeText(CODES.SMALL, 1);
    case CODES.MEDIUM:
      return styleSizeText(CODES.MEDIUM, 1);
    case CODES.LARGE:
      return styleSizeText(CODES.LARGE, 1);
    // SPECIALIZED
    default:
      return { error: SC.ERROR };
  }
}

//
// TEXT
//
function styleText(code, value) {
  switch (code) {
    // GENERALIZED
    case CODES.COLOR:
      return styleColor();
    case CODES.BGCOLOR:
      return styleBgColor();
    case CODES.FONT:
      return styleFont(value);
    case CODES.FONTWEIGHT:
      return styleFontWeight(value);
    case CODES.SMALL:
      return styleSizeText(CODES.SMALL, 1);
    case CODES.MEDIUM:
      return styleSizeText(CODES.MEDIUM, 1);
    case CODES.LARGE:
      return styleSizeText(CODES.LARGE, 1);
    // SPECIALIZED
    default:
      return { error: SC.ERROR };
  }
}

//
// TITLE
//
function styleTitle(code, value) {
  switch (code) {
    // GENERALIZED
    case CODES.COLOR:
      return styleColor();
    case CODES.BGCOLOR:
      return styleBgColor();
    case CODES.FONT:
      return styleFont(value);
    case CODES.FONTWEIGHT:
      return styleFontWeight(value);
    case CODES.SMALL:
      return styleSizeText(CODES.SMALL, 1.5);
    case CODES.MEDIUM:
      return styleSizeText(CODES.MEDIUM, 1.5);
    case CODES.LARGE:
      return styleSizeText(CODES.LARGE, 1.5);
    // SPECIALIZED
    default:
      return { error: SC.ERROR };
  }
}

//
// SUBTEXT
//
function styleSubtext(code, value) {
  switch (code) {
    // GENERALIZED
    case CODES.COLOR:
      return styleColor();
    case CODES.BGCOLOR:
      return styleBgColor();
    case CODES.FONT:
      return styleFont(value);
    case CODES.FONTWEIGHT:
      return styleFontWeight(value);
    case CODES.SMALL:
      return styleSizeText(CODES.SMALL, 0.7);
    case CODES.MEDIUM:
      return styleSizeText(CODES.MEDIUM, 0.7);
    case CODES.LARGE:
      return styleSizeText(CODES.LARGE, 0.7);
    // SPECIALIZED
    default:
      return { error: SC.ERROR };
  }
}

//
// FINEPRINT
//
function styleFineprint(code, value) {
  switch (code) {
    // GENERALIZED
    case CODES.COLOR:
      return styleColor();
    case CODES.BGCOLOR:
      return styleBgColor();
    case CODES.FONT:
      return styleFont(value);
    case CODES.FONTWEIGHT:
      return styleFontWeight(value);
    case CODES.SMALL:
      return styleSizeText(CODES.SMALL, 0.5);
    case CODES.MEDIUM:
      return styleSizeText(CODES.MEDIUM, 0.5);
    case CODES.LARGE:
      return styleSizeText(CODES.LARGE, 0.5);
    // SPECIALIZED
    default:
      return { error: SC.ERROR };
  }
}

//
// SELECT
//
function styleSelect(code, value) {
  switch (code) {
    // GENERALIZED
    case CODES.LIST:
      return styleList();
    case CODES.GRID:
      return styleGrid();
    case CODES.COLOR:
      return styleColor();
    case CODES.BGCOLOR:
      return styleBgColor();
    case CODES.FONT:
      return styleFont(value);
    case CODES.FONTWEIGHT:
      return styleFontWeight(value);
    case CODES.SMALL:
      return styleSizeText(CODES.SMALL, 1);
    case CODES.MEDIUM:
      return styleSizeText(CODES.MEDIUM, 2);
    case CODES.LARGE:
      return styleSizeText(CODES.LARGE, 3);
    // SPECIALIZED
    default:
      return { error: SC.ERROR };
  }
}

//
// CHIP
//
function styleChip(code, value) {
  switch (code) {
    // GENERALIZED
    case CODES.COLOR:
      return styleColor();
    case CODES.BGCOLOR:
      return styleBgColor();
    case CODES.FONT:
      return styleFont(value);
    case CODES.FONTWEIGHT:
      return styleFontWeight(value);
    case CODES.SMALL:
      return { style: { width: 150 } };
    case CODES.MEDIUM:
      return { style: { width: 200 } };
    case CODES.LARGE:
      return { style: { width: 250 } };
    // SPECIALIZED
    default:
      return { error: SC.ERROR };
  }
}

//
// INPUT
//
function styleInput(code, value) {
  switch (code) {
    // GENERALIZED
    case CODES.COLOR:
      return styleColor();
    case CODES.BGCOLOR:
      return styleBgColor();
    case CODES.FONT:
      return styleFont(value);
    case CODES.FONTWEIGHT:
      return styleFontWeight(value);
    case CODES.SMALL:
      return { style: { width: 150 } };
    case CODES.MEDIUM:
      return { style: { width: 200 } };
    case CODES.LARGE:
      return { style: { width: 250 } };
    // SPECIALIZED
    case CODES.TEXTLINE:
      return { layout: { format: "textline" } };
    case CODES.TEXTAREA:
      return { layout: { format: "textarea" } };
    case CODES.VARIANT:
      // 1 = enterbutton
      switch (value) {
        case 1:
          // enterbutton
          return { layout: { enterbutton: true } };
        case 2:
          // masked
          return { layout: { masked: true } };
        default:
          return { error: SC.ERROR };
      }
    default:
      return { error: SC.ERROR };
  }
}

//
// BUTTON
//
function styleButton(code, value) {
  switch (code) {
    // GENERALIZED
    case CODES.COLOR:
      return styleColor();
    case CODES.BGCOLOR:
      return styleBgColor();
    case CODES.FONT:
      return styleFont(value);
    case CODES.FONTWEIGHT:
      return styleFontWeight(value);
    case CODES.SMALL:
      return { style: { width: 150 } };
    case CODES.MEDIUM:
      return { style: { width: 200 } };
    case CODES.LARGE:
      return { style: { width: 250 } };
    // SPECIALIZED
    case CODES.HORIZ:
      return { classText: "flex" };
    case CODES.VERT:
      return { classText: "flex flex-col" };

    case CODES.VARIANT:
      // 1 = enterbutton
      switch (value) {
        default:
          return { error: SC.ERROR };
      }
    default:
      return { error: SC.ERROR };
  }
}

//
// BUTTONBAR
//
function styleButtonBar(code, value) {
  switch (code) {
    // GENERALIZED
    case CODES.COLOR:
      return styleColor();
    case CODES.BGCOLOR:
      return styleBgColor();
    case CODES.FONT:
      return styleFont(value);
    case CODES.FONTWEIGHT:
      return styleFontWeight(value);
    case CODES.SMALL:
      return { style: { width: 200 } };
    case CODES.MEDIUM:
      return { style: { width: 400 } };
    case CODES.LARGE:
      return { style: { width: 500 } };
    // SPECIALIZED
    case CODES.HORIZ:
      return { classText: "flex" };
    case CODES.VERT:
      return { classText: "flex flex-col" };

    case CODES.VARIANT:
      switch (value) {
        default:
          return { error: SC.ERROR };
      }
    default:
      return { error: SC.ERROR };
  }
}

//
// CARD
//
function styleCard(code, value) {
  switch (code) {
    // GENERALIZED
    case CODES.COLOR:
      return styleColor();
    case CODES.BGCOLOR:
      return styleBgColor();
    case CODES.FONT:
      return styleFont(value);
    case CODES.FONTWEIGHT:
      return styleFontWeight(value);
    case CODES.SMALL:
      return { style: { width: 200 } };
    case CODES.MEDIUM:
      return { style: { width: 400 } };
    case CODES.LARGE:
      return { style: { width: 500 } };
    // SPECIALIZED
    case CODES.HORIZ:
      return { classText: "flex" };
    case CODES.VERT:
      return { classText: "flex flex-col" };

    case CODES.VARIANT:
      switch (value) {
        default:
          return { error: SC.ERROR };
      }
    default:
      return { error: SC.ERROR };
  }
}

//
// SEPERATOR
//
function styleSeperator(code, value) {
  switch (code) {
    case CODES.VARIANT:
      switch (value) {
        default:
          return { error: SC.ERROR };
      }
    default:
      return { error: SC.ERROR };
  }
}

//
// IMAGE
//
function styleImage(code, value) {
  switch (code) {
    case CODES.VARIANT:
      switch (value) {
        default:
          return { error: SC.ERROR };
      }
    default:
      return { error: SC.ERROR };
  }
}

//
// SPEECH
//
function styleSpeech(code, value) {
  switch (code) {
    case CODES.VOICE:
      const voice = VOICES[value];
      const V = voice ? voice : VOICES[0]; // default..monospace?
      return { speech: { voice: V } };
    case CODES.VARIANT:
      switch (value) {
        default:
          return { error: SC.ERROR };
      }
    default:
      return { error: SC.ERROR };
  }
}
//
// GENERALIZED CODE STYLIZERS
//
function styleList() {
  return { classText: "flex flex-col" };
}

function styleGrid() {
  return { classText: "flex flex-wrap" };
}
function styleColor(value) {
  // this will be a *decimal* value at
  // this point. need hex!
  const hexString = value.toString(16);
  return { style: { color: `#${hexString}` } };
}
function styleBgColor(value) {
  // this will be a *decimal* value at
  // this point. need hex!
  const hexString = value.toString(16);
  return { style: { backgroundColor: `#${hexString}` } };
}
function styleFontWeight(value) {
  // this will be a *decimal* value at
  // this point. need hex!
  return { style: { fontWeight: value } };
}
function styleFont(value) {
  const font = FONTS[value];
  const F = font ? font : FONTS[0]; // default..monospace?
  return { style: { fontFamily: F } };
}

function styleSizeText(code) {
  switch (code) {
    case CODES.SMALL:
      return { style: { fontSize: "1em" } };
    case CODES.MEDIUM:
      return { style: { fontSize: "2em" } };
    case CODES.LARGE:
      return { style: { fontSize: "3em" } };
  }
}

// const CODES = {
//     // FORMATS
//     LIST: 40,
//     GRID: 41,
//     TEXLINE: 42,
//     TEXTAREA: 43,
//     HORIZ: 44,
//     VERT: 45,
//     // SIZES
//     SMALL: 50,
//     MEDIUM: 51,
//     LARGE: 52,
//     // SPECIFICS
//     COLOR: 60,
//     BGCOLOR: 61,
//     FONT: 62,
//     FONTWEIGHT: 63,
//     VOICE: 64,
//     VARIANT: 65
//   };
