import React, { useState, useEffect } from "react";
import "../App.scss";
import axios from "axios";
import { useSelector } from "react-redux";

function VideoResults() {
  const myState = useSelector((state) => state.searchWeb);
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([]);
  const [page, setPage] = useState(1);
  console.log(display);
  useEffect(() => {
    if (myState !== "") {
      axios
        .get(
          `https://youtube-v31.p.rapidapi.com/search?part=snippet,id&rapidapi-key=4c68e56ffcmsh1fe0713b11bd6f8p16852ejsn40f8dbd0e36b&q=${myState}&maxResults=50`
        )
        .then((res) => setData(res.data));
    } else {
      axios
        .get(
          `https://youtube-v31.p.rapidapi.com/search?part=snippet,id&rapidapi-key=4c68e56ffcmsh1fe0713b11bd6f8p16852ejsn40f8dbd0e36b&q=${myState}&maxResults=50`
        )
        .then((res) => setData(res.data));
    }
  }, [myState, page]);
  useEffect(() => {
    if (data && data.items !== display) {
      setDisplay(data.items);
    }
  }, [data, display]);

  return (
    <div className="displayData">
      <div className="videosResult">
        {display &&
          display.length &&
          display.map((val, key) => {
            return (
              <div className="videoContents" key={key}>
                <a href={"https://www.youtube.com/watch?v=" + val.id.videoId}>
                  <div className="title">{val.snippet.title}</div>
                </a>
                <div className="videoItem">
                  <a href={"https://www.youtube.com/watch?v=" + val.id.videoId}>
                    <img src={val.snippet.thumbnails.default.url} alt=""></img>
                  </a>
                  <div className="details">
                    <div className="description">{val.snippet.description}</div>
                    <a
                      href={
                        "https://www.youtube.com/channel/" +
                        val.snippet.channelId
                      }
                    >
                      <div className="channel">{val.snippet.channelTitle}</div>
                    </a>
                  </div>
                </div>
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

export default VideoResults;
