import React from "react";
import CoinItem from "./CoinItem.jsx";

const Coins = (props) => {
  return (
    <div className="max-w-screen-lg m-auto">
      <div>
        <div className="flex justify-between items-center shadow-xl shadow-slate-900 rounded-lg my-2 mx-1 text-white">
          <p className="pl-2">#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hidden sm:block">Volume</p>
          <p className="pr-2 hidden sm:block">Market Cap</p>
        </div>
        {props.coins.map((coins) => {
          return <CoinItem coins={coins} key={coins.id} />;
        })}
      </div>
    </div>
  );
};

export default Coins;
