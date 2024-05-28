import React, { useState, useEffect } from "react";
import Coins from "./Coins.jsx";
import Navbar from "./Navbar.jsx";

const cache = new Map();

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => response.json())
      .then((result) => {
        setCoins(result);
        cache.set("result", result);
        console.log(cache);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Navbar cache={cache} />
      <Coins coins={coins} cache={cache} />
    </>
  );
}

export default App;
