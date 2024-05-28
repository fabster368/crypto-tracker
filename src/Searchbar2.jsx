import React, { useState, useRef } from "react";
import CoinItem from "./CoinItem.jsx";
import { IoMdSearch } from "react-icons/io";

const Searchbar = ({ cache }) => {
  const [input, setInput] = useState("");

  function handleInput(e) {
    // handle user input
    setInput("#" + e.target.value);
  }

  return (
    <>
      <div className="max-w-screen-lg m-auto ">
        <div className="flex flex-row justify-center align-center p-2 m-4">
          <input
            placeholder="search by name"
            className="placeholder-gray-500 border border-grey-400 text-gray-900 text-sm rounded-lg block p-2 "
            onChange={handleInput}
          ></input>
          <a href={input}>
            <IoMdSearch className="font-bold p-1 text-white size-8" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
