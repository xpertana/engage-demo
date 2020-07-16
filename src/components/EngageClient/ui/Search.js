import React from "react";
const { Search } = require("react-feather");

const sizeMap = {
  medium: {
    ct: "bg-gray-500",
    fontSize: 24,
    iconSize: 40
  },
  small: {
    ct: "bg-gray-200",
    fontSize: 20,
    iconSize: 36
  },
  large: {
    ct: "bg-gray-700",
    fontSize: 36,
    iconSize: 54
  }
};

export default function SearchBox(props) {
  const {
    size = "medium",
    searchHandler,
    searchText,
    searchPlaceholder = "search..."
  } = props;
  const { fontSize, iconSize, ct } = sizeMap[size];

  return (
    <div className="flex flex-inline items-center justify-center text-gray-600">
      <input
        type="search"
        name="serch"
        placeholder={searchPlaceholder}
        className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none "
        value={searchText}
        onChange={searchHandler}
      />

      {/* <button type="submit" className="absolute right-0 top-0 mt-3 mr-4"> */}
      <button type="submit" className="mx-2 h-10 text-gray-600">
        <span className="h-10">
          <Search color="lightgray" size={28} />
        </span>
      </button>
    </div>
  );
}
