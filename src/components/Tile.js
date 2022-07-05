import React, { useState } from "react";
import "../index.css";
// import hogs from "../porkers_data";

function Tile({ hogs }) {
  const [additionalInfo, showAdditionalInfo] = useState("false");
  const [greasedVisible, showGreasedVisible] = useState("false");

  console.log("hogs: ", hogs);

  let allHogs = [];

  function handleTileClick() {
    console.log("handleTileClick() called");

    showAdditionalInfo(!additionalInfo);
  }

  function handleFilterGreased() {
    console.log("handleFilterGreased() called");
    showGreasedVisible(!greasedVisible);
  }

  if (greasedVisible) {
    allHogs = hogs
      .filter((hog) => hog["greased"] === "true")
      .map((hog) => (
        <div onClick={handleTileClick} className="pigTile">
          <h1 key={hog["name"]}>{hog["name"]}</h1>
          <img key={hog["name"]} alt={hog["name"]} src={hog["image"]} />
          <h2>Speciality: {hog["speciality"]}</h2>
          <h2>Weight: {hog["weight"]} lbs</h2>
          <h2>Greased: {hog["greased"] ? "Yes" : "No"}</h2>
          <h2>Highest Medal Achieved: {hog["highest medal achieved"]}</h2>
        </div>
      ));
  } else if (additionalInfo && hogs && hogs.map) {
    allHogs = hogs.map((hog) => (
      <div onClick={handleTileClick} className="pigTile">
        <h1 key={hog["name"]}>{hog["name"]}</h1>
        <img key={hog["name"]} alt={hog["name"]} src={hog["image"]} />
        <h2>Speciality: {hog["speciality"]}</h2>
        <h2>Weight: {hog["weight"]} lbs</h2>
        <h2>Greased: {hog["greased"] ? "Yes" : "No"}</h2>
        <h2>Highest Medal Achieved: {hog["highest medal achieved"]}</h2>
      </div>
    ));
  } else if (hogs && hogs.map) {
    allHogs = hogs.map((hog) => (
      <div onClick={handleTileClick} className="pigTile">
        <h1 key={hog["name"]}>{hog["name"]}</h1>
        <img key={hog["name"]} alt={hog["name"]} src={hog["image"]} />
      </div>
    ));
  }

  return (
    <div>
      <button onClick={handleFilterGreased}>Filter For Greased Hogs</button>
      <br />
      {allHogs}
    </div>
  );
}
export default Tile;
