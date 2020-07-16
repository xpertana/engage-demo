import React from "react";

export default function ThemePreview(props) {
  const { theme } = props.args;

  console.log(theme);

  const { banner, footer, header, screen, chip, text, heading } = theme;

  return (
    <div
      style={{ backgroundColor: screen.backgroundColor }}
      class="mt-1 mx-8 flex flex-col justify-between items-center rounded-lg"
    >
      <div
        style={{
          fontFamily: header.fontFamily,
          color: header.color,
          backgroundColor: header.backgroundColor
        }}
        class="rounded-t w-full text-center"
      >
        Header
      </div>
      <div
        style={{ color: banner.color, backgroundColor: banner.backgroundColor }}
        class="w-full text-center"
      >
        Banner
      </div>
      <div>
        {/* {JSON.stringify(uistate)} */}
        <div style={{ fontFamily: heading.fontFamily }} class="my-2 p-2">
          Heading Sample Text
        </div>
        <div style={{ fontFamily: text.fontFamily }} class="my-2 p-2">
          This is an example of the how text will appear
        </div>
        <div
          style={{ fontFamily: chip.fontFamily }}
          class="flex my-2 p-2 text-center"
        >
          <div
            style={{ color: chip.color, backgroundColor: chip.backgroundColor }}
            class="text-xs w-16 h-16 m-1 rounded-sm text-center"
          >
            Chip 1
          </div>
          <div
            style={{ color: chip.color, backgroundColor: chip.backgroundColor }}
            class="text-xs w-16 h-16 m-1 rounded-sm text-center"
          >
            Chip 2
          </div>
          <div
            style={{ color: chip.color, backgroundColor: chip.backgroundColor }}
            class="text-xs w-16 h-16 m-1 rounded-sm text-center"
          >
            Chip 3
          </div>
        </div>
      </div>
      <div
        style={{
          color: footer.color,
          fontFamily: footer.fontFamily,
          backgroundColor: footer.backgroundColor
        }}
        class="rounded-b w-full text-center"
      >
        Footer
      </div>
    </div>
  );
}
