import React, { useState, useEffect } from "react";
import "../App.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { searchweb } from "../actions";
import Search from "@material-ui/icons/Search";

function WebResults() {
  const myState = useSelector((state) => state.searchWeb);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (myState !== "") {
      axios
        .get(
          `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?rapidapi-key=4c68e56ffcmsh1fe0713b11bd6f8p16852ejsn40f8dbd0e36b&q=${myState}&pageNumber=${page}`
        )
        .then((res) => setData(res.data));
    } else {
      axios
        .get(
          `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?rapidapi-key=4c68e56ffcmsh1fe0713b11bd6f8p16852ejsn40f8dbd0e36b&q=trending&pageNumber=${page}`
        )
        .then((res) => setData(res.data));
    }
  }, [myState, page]);
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
      <div className="relatedSearch">
        {data.relatedSearch &&
          data.relatedSearch.length &&
          data.relatedSearch.map((val, key) => {
            return (
              <div
                className="related"
                key={key}
                onClick={() => {
                  dispatch(searchweb(val.substring(3, val.length - 4)));
                }}
              >
                <Search />
                <span className="text">{val.substring(3, val.length - 4)}</span>
              </div>
            );
          })}
      </div>
      <div className="pageNo">
        {page !== 1 ? (
          <span
            style={{ color: "#1a73e8" }}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            {" "}
            Previous{" "}
          </span>
        ) : (
          <>&emsp;&emsp;&emsp;&ensp;&nbsp;</>
        )}
        &emsp;
        <span
          onClick={() => setPage(1)}
          style={page === 1 ? {} : { color: "#1a73e8" }}
        >
          {" "}
          1{" "}
        </span>
        <span
          onClick={() => setPage(2)}
          style={page === 2 ? {} : { color: "#1a73e8" }}
        >
          {" "}
          2{" "}
        </span>
        <span
          onClick={() => setPage(3)}
          style={page === 3 ? {} : { color: "#1a73e8" }}
        >
          {" "}
          3{" "}
        </span>
        <span
          onClick={() => setPage(4)}
          style={page === 4 ? {} : { color: "#1a73e8" }}
        >
          {" "}
          4{" "}
        </span>
        <span
          onClick={() => setPage(5)}
          style={page === 5 ? {} : { color: "#1a73e8" }}
        >
          {" "}
          5{" "}
        </span>
        <span
          onClick={() => setPage(6)}
          style={page === 6 ? {} : { color: "#1a73e8" }}
        >
          {" "}
          6{" "}
        </span>
        <span
          onClick={() => setPage(7)}
          style={page === 7 ? {} : { color: "#1a73e8" }}
        >
          {" "}
          7{" "}
        </span>
        <span
          onClick={() => setPage(8)}
          style={page === 8 ? {} : { color: "#1a73e8" }}
        >
          {" "}
          8{" "}
        </span>
        <span
          onClick={() => setPage(9)}
          style={page === 9 ? {} : { color: "#1a73e8" }}
        >
          {" "}
          9{" "}
        </span>
        {page !== 9 && (
          <span
            style={{ color: "#1a73e8" }}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            {" "}
            &emsp; Next{" "}
          </span>
        )}
      </div>
    </div>
  );
}

export default WebResults;
