import React, { useState, useRef } from "react";
import CoinItem from "./CoinItem.jsx";
import { IoMdSearch } from "react-icons/io";

const Searchbar = ({ cache }) => {
  const [result, setResult] = useState([]);
  const input = useRef("");

  function handleInput(e) {
    // handle user input
    input.current = e.target.value;
  }

  function handleSearch() {
    // handle search by symbol and name/id
    const values = cache.get("result");
    for (let i = 0; i < values.length; i++) {
      if (
        values[i].symbol === input.current ||
        values[i].id === input.current
      ) {
        setResult(values[i]);
        break;
      }
    }
  }

  return (
    <>
      <div className="max-w-screen-lg m-auto ">
        <div className="flex flex-row justify-center align-center">
          <input
            className="bg-gray-50 border border-grey-400 text-gray-900 text-sm rounded-lg block p-2"
            onChange={handleInput}
          ></input>
          <button className="p-1 text-white" onClick={handleSearch}>
            <IoMdSearch className="font-bold" />
          </button>
        </div>
        {result.length != 0 ? <CoinItem coins={result} /> : <></>}
      </div>
    </>
  );
};

export default Searchbar;
