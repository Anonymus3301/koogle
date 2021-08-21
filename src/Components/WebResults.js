import React, { useState, useEffect } from "react";

import "../App.scss";
import axios from "axios";
import { useSelector } from "react-redux";

function WebResults() {
  const myState = useSelector((state) => state.searchWeb);

  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    if (myState !== "") {
      axios
        .get(
          `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?rapidapi-key=4c68e56ffcmsh1fe0713b11bd6f8p16852ejsn40f8dbd0e36b&q=${myState}`
        )
        .then((res) => setData(res.data));
    } else {
      axios
        .get(
          `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?rapidapi-key=4c68e56ffcmsh1fe0713b11bd6f8p16852ejsn40f8dbd0e36b&q=trending`
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
    <div className="displayData">
      <div className="resultCount">
        Total Results:{data.totalCount ? data.totalCount : 0}
      </div>
      {display &&
        display.length &&
        display.map((val, key) => {
          const len = val.description.length;

          return (
            <div className="results" key={key}>
              <div className="url">{val.url}</div>
              <a href={val.url}>
                <div className="title">
                  {val.title.substring(
                    0,
                    val.title.length > 100 ? 100 : val.title.length
                  )}
                </div>
              </a>
              <div className="description">
                {val.description.substring(0, len > 100 ? 100 : len)}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default WebResults;
