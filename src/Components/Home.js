import React from "react";
import "../App.scss";
import SearchIcon from "@material-ui/icons/Search";
import { Switch, Link } from "react-router-dom";

function Home() {
  return (
    <Switch>
      <div className="Home-container">
        <div className="Home">
          <div className="logo">
            <img className="big" src="/k.jpg"></img>
            <img className="small" src="/o1.jpg"></img>
            <img className="small" src="/o2.jpg"></img>
            <img className="small" src="/g.jpg"></img>
            <img className="small" src="/l.jpg"></img>
            <img className="small" src="/e.jpg"></img>
          </div>

          <div className="input-div">
            <Link to="/results">
              <SearchIcon className="search-btn" />
            </Link>
            <input type="text" placeholder="Search"></input>
          </div>
          <div className="search-btn-2">
            <Link to="/results">
              <button>Koogle Search</button>
            </Link>
          </div>
        </div>
      </div>
    </Switch>
  );
}

export default Home;
