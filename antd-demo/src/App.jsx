import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import Options from "./optionsComponent/option";
import Cards from "./cards/card";

function App() {
  const [getResult, setData] = useState([]);
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  const [searchResult, setSearch] = useState([]);
  const images = [
    "src/assets/bag.png",
    "src/assets/mensSlimfit.png",
    "src/assets/jacket.png",
    "src/assets/t-shirt.png",
    "src/assets/cara.png",
    "src/assets/silver-cara.png",
    "src/assets/Ml3.png",
    "src/assets/coppercolor.png",
    "src/assets/wd.png",
    "src/assets/ssd.png",
    "src/assets/sp.png",
    "src/assets/4tb.png",
    "src/assets/lcd.png",
    "src/assets/lcdblack.png",
    "src/assets/purplewomendress.png",
    "src/assets/blackjacketwomen.png",
    "src/assets/womencoat.png",
    "src/assets/t-shirtwomen.png",
    "src/assets/halfsleevewomen.png",
    "src/assets/purpledresswomen.png",
  ];

  useEffect(() => {
    getData();
  }, []);
  console.log(getResult);

  const getData = () => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => setData(res));
    } catch (err) {
      console.log(err);
    }
  };

  const serched = () => {
    const filteredResults = getResult.filter(
      (elem) => elem.category === val && elem.title === val2
    );
    setSearch(filteredResults);
  };
  console.log(searchResult);

  // Get unique categories
  const uniqueCategories = [...new Set(getResult.map((elem) => elem.category))];

  return (
    <>
      <nav className="">
        <div>
          <h2>FAKE API</h2>
        </div>
        <div>
          <select
            name=""
            id=""
            onChange={(e) => {
              setVal(e.target.value);
            }}
            className="bg-black rounded h-10 outline-none text-white w-1/3"
          >
            <Options keys={null} value={"Select Category"} />
            {uniqueCategories.map((category, index) => (
              <Options keys={index} value={category} />
            ))}
          </select>
          <select
            name=""
            id=""
            onChange={(e) => {
              setVal2(e.target.value);
            }}
            className="bg-black rounded h-10 outline-none text-white w-1/3"
          >
            <Options keys={null} value={"Select Items"} />
            {getResult.map((elem, index) => {
              // console.log(elem);
              if (elem.category === val) {
                return <Options keys={index} value={elem.title} />;
              }
            })}
          </select>
          <button className="search-btn" onClick={serched}>
            <i className="fa-solid fa-magnifying-glass"></i> Search
          </button>
          <button
            className="clear-btn"
            onClick={() => {
              setSearch([]);
              
            }}
          >
            <i className="fa-solid fa-filter-circle-xmark"></i>
            Clear
          </button>
        </div>
      </nav>
      <div className="mt-5">
        {searchResult.length > 0
          ? searchResult.map((elem) => (
              <Cards elem={elem} images={images} getResult={getResult} />
            ))
          : getResult.map((elem) => (
              <Cards elem={elem} images={images} getResult={getResult} />
            ))}
      </div>
    </>
  );
}

export default App;
