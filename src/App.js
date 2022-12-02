import "./App.css";
import { useState } from "react";
import Coin from "./components/Coin";
import { Checkbox } from "antd";
import { Radio } from "antd";

function App() {
  const twelve_items = [
    {
      changePercent24Hr: "0.6181959303337228",
      explorer: "https://blockchain.info/",
      id: "bitcoin",
      marketCapUsd: "313097360742.9081512557357266",
      maxSupply: "21000000.0000000000000000",
      name: "Bitcoin",
      priceUsd: "16290.6039698891402961",
      image: "./images/Bitcoin.svg.png",
    },
    {
      changePercent24Hr: "1.3221587686972659",
      explorer: "https://etherscan.io/",
      id: "ethereum",
      marketCapUsd: "145063773990.2296969118047792",
      maxSupply: null,
      name: "Ethereum",
      priceUsd: "1185.4146516221558759",
      image: "./images/ethereum-eth-logo.png",
    },
    {
      changePercent24Hr: "-0.1187417070943323",
      explorer: "https://www.omniexplorer.info/asset/31",
      id: "tether",
      marketCapUsd: "65443807693.4471733895591660",
      maxSupply: null,
      name: "Tether",
      priceUsd: "1.0012411775172929",
      image: "./images/tether-usdt-logo.png",
    },
    {
      changePercent24Hr: "0.1968041756483687",
      explorer:
        "https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
      id: "binance-coin",
      marketCapUsd: "49542439920.3492082840081952",
      maxSupply: "166801148.0000000000000000",
      name: "BNB",
      priceUsd: "297.0149816975432824",
      image: "./images/Binance_Logo.png",
    },
    {
      changePercent24Hr: "-0.1676651248589683",
      explorer:
        "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      id: "usd-coin",
      marketCapUsd: "43764426359.5135658773034218",
      maxSupply: null,
      name: "USD Coin",
      priceUsd: "1.0012613176134662",
      image: "./images/usd-coin-usdc-logo.png",
    },
    {
      changePercent24Hr: "-0.1099558381980055",
      explorer:
        "https://etherscan.io/token/0x4Fabb145d64652a948d72533023f6E7A623C7C53",
      id: "binance-usd",
      marketCapUsd: "22404923994.1443835891938333",
      maxSupply: null,
      name: "Binance USD",
      priceUsd: "1.0015485957335384",
      image: "./images/binance-usd-busd-logo.png",
    },
    {
      changePercent24Hr: "1.9926478236636720",
      explorer: "https://xrpcharts.ripple.com/#/graph/",
      id: "xrp",
      marketCapUsd: "17545129163.1549676420924960",
      maxSupply: "100000000000.0000000000000000",
      name: "XRP",
      priceUsd: "0.3864222997097239",
      image: "./images/xrp-xrp-logo.png",
    },
    {
      changePercent24Hr: "6.1619295076663955",
      explorer: "http://dogechain.info/chain/Dogecoin",
      id: "dogecoin",
      marketCapUsd: "13558134072.0068347477949322",
      maxSupply: null,
      name: "Dogecoin",
      priceUsd: "0.1021938340639955",
      image: "./images/dogecoin-logo-png-transparent.png",
    },
    {
      changePercent24Hr: "1.1465628372638464",
      explorer: "https://cardanoexplorer.com/",
      id: "cardano",
      marketCapUsd: "10601741151.9109583707943610",
      maxSupply: "45000000000.0000000000000000",
      name: "Cardano",
      priceUsd: "0.3078792801876639",
      image: "./images/cardano-ada-logo.png",
    },
    {
      changePercent24Hr: "1.6438090418117779",
      explorer:
        "https://etherscan.io/token/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      id: "polygon",
      marketCapUsd: "7274037906.1227416068744618",
      maxSupply: "10000000000.0000000000000000",
      name: "Polygon",
      priceUsd: "0.8328112559116073",
      image: "./images/polygon-matic-logo.png",
    },
    {
      changePercent24Hr: "1.3403262712535951",
      explorer: "https://polkascan.io/polkadot",
      id: "polkadot",
      marketCapUsd: "6076686970.2716741983445306",
      maxSupply: null,
      name: "Polkadot",
      priceUsd: "5.1697182266352194",
      image: "./images/polkadot-new-dot-logo.png",
    },
    {
      changePercent24Hr: "-0.1656073948332214",
      explorer:
        "https://etherscan.io/token/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
      id: "multi-collateral-dai",
      marketCapUsd: "5659459167.7999660172537754",
      maxSupply: null,
      name: "Multi Collateral DAI",
      priceUsd: "1.0011942933363594",
      image: "./images/multi-collateral-dai-dai-logo.png",
    },
  ];

  const [count, setCount] = useState([]);
  let [marketType, setMarkType] = useState("All");
  let [percentType, setPercType] = useState("All");
  const [order, setOrder] = useState(null);
  const CheckboxGroup = Checkbox.Group;

  const changePercents = ["Less than 0%", "0% - 1.5%", "Above 1.5%"];
  const marketCap = [
    "Less than $10 billion",
    "$10 - $50 billion",
    "Over $50 billion",
  ];
  const totalPrice = count.reduce((a, c) => a + c.quantity * c.priceUsd, 0);
  const addOne = (item) => {
    const exist = count.find((it) => it.id === item.id);
    if (exist) {
      setCount(
        count.map((it) =>
          it.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : it
        )
      );
    } else {
      setCount([...count, { ...item, quantity: 1 }]);
    }
  };
  const removeOne = (item) => {
    const exist = count.find((it) => it.id === item.id);

    if (exist && exist.quantity >= 1) {
      setCount(
        count.map((it) =>
          it.id === item.id ? { ...exist, quantity: exist.quantity - 1 } : it
        )
      );
    }
    if (exist.quantity === 0) {
      exist = false;
    }
  };
  const removeHalf = (item) => {
    const exist = count.find((it) => it.id === item.id);

    if (exist && exist.quantity >= 1 / 2) {
      setCount(
        count.map((it) =>
          it.id === item.id
            ? { ...exist, quantity: exist.quantity - 1 / 2 }
            : it
        )
      );
    }
    if (exist.quantity === 0) {
      exist = false;
    }
  };
  const removeFourth = (item) => {
    const exist = count.find((it) => it.id === item.id);

    if (exist && exist.quantity >= 1 / 4) {
      setCount(
        count.map((it) =>
          it.id === item.id
            ? { ...exist, quantity: exist.quantity - 1 / 4 }
            : it
        )
      );
    }
    if (exist.quantity === 0) {
      exist = false;
    }
  };
  const addHalf = (item) => {
    const exist = count.find((it) => it.id === item.id);
    if (exist) {
      setCount(
        count.map((it) =>
          it.id === item.id
            ? { ...exist, quantity: exist.quantity + 1 / 2 }
            : it
        )
      );
    } else {
      setCount([...count, { ...item, quantity: 1 / 2 }]);
    }
  };
  const addFourth = (item) => {
    const exist = count.find((it) => it.id === item.id);
    if (exist) {
      setCount(
        count.map((it) =>
          it.id === item.id
            ? { ...exist, quantity: exist.quantity + 1 / 4 }
            : it
        )
      );
    } else {
      setCount([...count, { ...item, quantity: 1 / 4 }]);
    }
  };
  const selectMarketFilterType = (eventkey) => {
    setMarkType(eventkey);
  };
  const selectPercentFilterType = (eventkey) => {
    setPercType(eventkey);
  };
  const matchesPercentFilterType = (item) => {
    if (
      percentType === "All" ||
      percentType.length === 3 ||
      percentType.length === 0
    ) {
      return true;
    } else if (percentType.length === 2) {
      if (
        percentType.includes("Less than 0%") &&
        percentType.includes("0% - 1.5%")
      ) {
        return item.changePercent24Hr <= 1.5;
      } else if (
        percentType.includes("0% - 1.5%") &&
        percentType.includes("Above 1.5%")
      ) {
        return item.changePercent24Hr > 0;
      } else {
        if (item.changePercent24Hr < 0 || item.changePercent24Hr > 1.5) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      if (percentType.includes("Less than 0%")) {
        return item.changePercent24Hr < 0;
      } else if (percentType.includes("0% - 1.5%")) {
        if (item.changePercent24Hr >= 0 && item.changePercent24Hr <= 1.5) {
          return true;
        } else {
          return false;
        }
      } else {
        return item.changePercent24Hr > 1.5;
      }
    }
  };
  const matchesMarketFilterType = (item) => {
    if (
      marketType === "All" ||
      marketType.length === 3 ||
      marketType.length === 0
    ) {
      return true;
    } else if (marketType.length === 2) {
      if (
        marketType.includes("Less than $10 billion") &&
        marketType.includes("$10 - $50 billion")
      ) {
        if (item.marketCapUsd < 50000000000) {
          return true;
        } else {
          return false;
        }
      } else if (
        marketType.includes("Less than $10 billion") &&
        marketType.includes("Over $50 billion")
      ) {
        if (
          item.marketCapUsd > 50000000000 ||
          item.marketCapUsd < 10000000000
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        if (item.marketCapUsd > 10000000000) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      if (marketType.includes("Less than $10 billion")) {
        return item.marketCapUsd < 10000000000;
      } else if (marketType.includes("$10 - $50 billion")) {
        if (
          item.marketCapUsd > 10000000000 &&
          item.marketCapUsd < 50000000000
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return item.marketCapUsd > 50000000000;
      }
    }
  };
  const filtered = twelve_items.filter(
    (e) => matchesMarketFilterType(e) && matchesPercentFilterType(e)
  );
  const sortMethod = (eventkey) => {
    setOrder(eventkey.target.value);
  };
  console.log(order);
  const inOrder = (a, b) => {
    if (order === "lh") {
      return a.priceUsd - b.priceUsd;
    } else {
      return b.priceUsd - a.priceUsd;
    }
  };
  const sorted = twelve_items.sort((a, b) => inOrder(a, b));
  console.log(sorted);

  return (
    <div className="App" id="black">
      <div name="parent">
        <div className="child" id="left">
          <div className="filters">
            <div className="markcap">
              <h3> Market Cap in US Dollars</h3>

              <CheckboxGroup
                style={{
                  width: "100%",
                }}
                className="check"
                options={marketCap}
                onChange={selectMarketFilterType}
                value={marketType}
              ></CheckboxGroup>
            </div>
            <div>
              <h3>24 Hour Change Percentage</h3>
              <CheckboxGroup
                className="check"
                options={changePercents}
                onChange={selectPercentFilterType}
                value={percentType}
              ></CheckboxGroup>
            </div>
          </div>
          <div className="sort">
            {" "}
            <h3>Sort By Price</h3>
            <Radio.Group onChange={sortMethod} value={order}>
              <Radio value={"lh"}>Low to High</Radio>
              <Radio value={"hl"}>High to Low</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="child" id="right">
          <div className="coins">
            <h1>Crypto Coins</h1>
            {filtered
              .sort((a, b) => inOrder(a, b))
              .map((item) => (
                <Coin
                  key={item.id}
                  item={item}
                  addFourth={addFourth}
                  addHalf={addHalf}
                  addOne={addOne}
                  removeOne={removeOne}
                  removeHalf={removeHalf}
                  removeFourth={removeFourth}
                ></Coin>
              ))}
          </div>
        </div>
      </div>

      <div class="child" id="bottom">
        <h2>Cart</h2>
        <div>
          {count.length === 0 && <div> Cart is Empty</div>}

          {count.map((it) =>
            it.quantity > 0 ? (
              <div>
                {it.quantity} x {it.name}
              </div>
            ) : (
              ""
            )
          )}
          {count.length !== 0 && (
            <div className="col-1 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
