import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../App.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchweb } from "../actions";
import WebResults from "./WebResults";
import ImageResults from "./ImageResults";

function ResultPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const myState = useSelector((state) => state.searchWeb);
  const [query, setQuery] = useState(myState);
  const [active, setActive] = useState(history.location.pathname);

  return (
    <div className="ResultContainer">
      <div className="top-bar">
        <div className="logo">
          <img className="big" src="/k.jpg" alt=""></img>
          <img className="small" src="/o1.jpg" alt=""></img>
          <img className="small" src="/o2.jpg" alt=""></img>
          <img className="small" src="/g.jpg" alt=""></img>
          <img className="small" src="/l.jpg" alt=""></img>
          <img className="small" src="/e.jpg" alt=""></img>
        </div>
        <div className="input-div">
          <SearchIcon
            className="search-btn"
            onClick={() => {
              dispatch(query === "" ? "" : searchweb(query));
            }}
          />
          <input
            value={query}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(query === "" ? "" : searchweb(query));
              }
            }}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            placeholder="Search"
          ></input>
        </div>
      </div>
      <div className="options-bar">
        <span
          className="AllBtn"
          onClick={() => {
            setActive("/results");
            history.push("/results");
          }}
        >
          All
        </span>

        <span
          className="ImagesBtn"
          onClick={() => {
            setActive("/results/images");
            history.push("/results/images");
          }}
        >
          Images
        </span>
      </div>
      {active === "/results" && <WebResults />}
      {active === "/results/images" && <ImageResults />}
    </div>
  );
}

export default ResultPage;
