import React from "react";
//const { Search } = require("react-feather");
import SearchA from "../ui/search/SearchA";
import SearchB from "../ui/search/SearchB";

const VARIANT = {
  a: props => <SearchA {...props} />,
  b: props => <SearchB {...props} />
};

export default function SearchBox(props) {
  let {
    searchHandler,
    value,
    variant = "b",
    placeholder = "Search..."
  } = props.args;

  // value = "";

  return (
    <div className="m-4 flex flex-inline justify-center items-center">
      {VARIANT[variant]({ value, placeholder })}
    </div>
  );

  // return (
  //   <div className="flex flex-inline items-center justify-center text-gray-600">
  //     <input
  //       type="search"
  //       name="serch"
  //       placeholder={searchPlaceholder}
  //       className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none "
  //       value={searchText}
  //       onChange={searchHandler}
  //     />

  //     {/* <button type="submit" className="absolute right-0 top-0 mt-3 mr-4"> */}
  //     <button type="submit" className="mx-2 h-10 text-gray-600">
  //       <span className="h-10">
  //         <Search color="lightgray" size={28} />
  //       </span>
  //     </button>
  //   </div>
  // );
}
