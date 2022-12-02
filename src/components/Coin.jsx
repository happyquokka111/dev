import React from "react";
import "./Coin.css";
export default function Coin(props) {
  const {
    item,
    addFourth,
    addHalf,
    addOne,
    removeOne,
    removeHalf,
    removeFourth,
  } = props;

  return (
    <div className="items" id="items">
      <img className="im" src={item.image} width="10%"></img>
      <h3>{item.name}</h3>
      <div>Price: ${Math.round(item.priceUsd * 100) / 100}</div>

      <div>
        {" "}
        Change Percent: {Math.round(item.changePercent24Hr * 1000) / 1000}%
      </div>
      <div>
        Market Cap in US Dollars: ${Math.round(item.marketCapUsd * 100) / 100}
      </div>
      <div className="buttons">
        <button className="button" onClick={() => addFourth(item)}>
          Add fourth of a coin
        </button>
        <button className="button" onClick={() => addHalf(item)}>
          Add half a coin
        </button>
        <button className="button" onClick={() => addOne(item)}>
          Add one coin
        </button>
        <div className="removal">
          <button className="button" onClick={() => removeOne(item)}>
            remove one coin
          </button>
          <button className="button" onClick={() => removeHalf(item)}>
            remove half a coin
          </button>
          <button className="button" onClick={() => removeFourth(item)}>
            remove fourth of a coin
          </button>
        </div>
      </div>
    </div>
  );
}
