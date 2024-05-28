import React from "react";
import { FaCoins } from "react-icons/fa";
import Searchbar2 from "./Searchbar2.jsx";

const Navbar = ({ cache }) => {
  return (
    <div className="m-auto p-4">
      <div className="flex justify-center align-center">
        <FaCoins className="text-4xl text-amber-500" />
        <h1 className="text-4xl text-white font-bold">
          {" "}
          Crypto<span className="text-4xl text-amber-500 font-bold">Hunt</span>
        </h1>
      </div>
      <Searchbar2 cache={cache} />
    </div>
  );
};

export default Navbar;
