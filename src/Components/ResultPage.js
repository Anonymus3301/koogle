import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../App.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchweb } from "../actions";
import WebResults from "./WebResults";
import ImageResults from "./ImageResults";
import Search from "@material-ui/icons/Search";
import { PhotoLibraryOutlined } from "@material-ui/icons";

function ResultPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const myState = useSelector((state) => state.searchWeb);
  const [query, setQuery] = useState(myState);
  const [active, setActive] = useState(history.location.pathname);
  useEffect(() => {
    setQuery(myState);
  }, [myState]);

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
          style={
            active === "/results"
              ? { borderBottom: "3px solid #1a73e8", color: "#1a73e8" }
              : {}
          }
          onClick={() => {
            setActive("/results");
            history.push("/results");
          }}
        >
          <Search style={active === "/results" ? { fill: "#1a73e8" } : {}} />
          &nbsp;All
        </span>

        <span
          className="ImagesBtn"
          style={
            active === "/results/images"
              ? { borderBottom: "3px solid blue", color: "#1a73e8" }
              : {}
          }
          onClick={() => {
            setActive("/results/images");
            history.push("/results/images");
          }}
        >
          <PhotoLibraryOutlined
            style={active === "/results/images" ? { fill: "#1a73e8" } : {}}
          />
          &nbsp;Images
        </span>
      </div>
      {history.location.pathname === "/results" && <WebResults />}
      {history.location.pathname === "/results/images" && <ImageResults />}
    </div>
  );
}

export default ResultPage;
