import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../App.scss";

function ResultPage() {
  return (
    <div className="ResultContainer">
      <div className="top-bar">
        <div className="logo">
          <img className="big" src="/k.jpg"></img>
          <img className="small" src="/o1.jpg"></img>
          <img className="small" src="/o2.jpg"></img>
          <img className="small" src="/g.jpg"></img>
          <img className="small" src="/l.jpg"></img>
          <img className="small" src="/e.jpg"></img>
        </div>
        <div className="input-div">
          <SearchIcon className="search-btn" />
          <input type="text" placeholder="Search"></input>
        </div>
      </div>
      <div className="options-bar">
        <span className="AllBtn">All</span>
        <span className="ImagesBtn">Images</span>
      </div>
    </div>
  );
}

export default ResultPage;
