import React, { useState } from "react";
import "../App.scss";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchweb } from "../actions";

function Home() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.searchWeb);
  const [query, setQuery] = useState(myState);
  const history = useHistory();
  return (
    <div className="Home-container">
      <div className="Home">
        <div className="logo">
          <img className="big" src="/k.jpg" alt=""></img>
          <img className="small" src="/o1.jpg" alt=""></img>
          <img className="small" src="/o2.jpg" alt=""></img>
          <img className="small" src="/g.jpg" alt=""></img>
          <img className="small" src="/l.jpg" alt=""></img>
          <img className="small" src="/e.jpg" alt=""></img>
        </div>

        <div className="input-div">
          <Link to="/results">
            <SearchIcon
              className="search-btn"
              onClick={() => {
                if (query !== "") {
                  dispatch(searchweb(query));
                }
              }}
            />
          </Link>
          <input
            value={query}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(query === "" ? "" : searchweb(query));
                history.push("/results");
              }
            }}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            placeholder="Search"
          ></input>
        </div>
        <div className="search-btn-2">
          {query === "" ? (
            ""
          ) : (
            <Link to="/results">
              <button
                onClick={() => {
                  dispatch(query === "" ? "" : searchweb(query));
                }}
              >
                Koogle Search
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
