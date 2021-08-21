import React, { useState, useEffect } from "react";
import "../App.scss";
import axios from "axios";
import { useSelector } from "react-redux";

function ImageResults() {
  const myState = useSelector((state) => state.searchWeb);
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([]);
  console.log(display);
  useEffect(() => {
    if (myState !== "") {
      axios
        .get(
          `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?rapidapi-key=4c68e56ffcmsh1fe0713b11bd6f8p16852ejsn40f8dbd0e36b&q=${myState}&pageSize=50`
        )
        .then((res) => setData(res.data));
    } else {
      axios
        .get(
          `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?rapidapi-key=4c68e56ffcmsh1fe0713b11bd6f8p16852ejsn40f8dbd0e36b&q=trending&pageSize=100`
        )
        .then((res) => setData(res.data));
    }
  }, [myState]);
  useEffect(() => {
    if (data && data.value !== display) {
      setDisplay(data.value);
    }
  }, [data, display]);

  return (
    <div className="ImageData">
      {display &&
        display.length &&
        display.map((val, key) => {
          return (
            <div className="imageResults" key={key}>
              <img src={val.thumbnail} alt=""></img>
            </div>
          );
        })}
    </div>
  );
}

export default ImageResults;
