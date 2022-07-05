import React, { useState } from "react";
import "../index.css";
// import hogs from "../porkers_data";

function Tile({ hogs }) {
  const [additionalInfo, showAdditionalInfo] = useState("false");
  const [greasedVisible, showGreasedVisible] = useState("false");
  const [nameSort, showNameSort] = useState("false");
  const [weightSort, showWeightSort] = useState("false");

  let allHogs = hogs;

  function handleTileClick() {
    console.log("handleTileClick() called");

    showAdditionalInfo(!additionalInfo);
  }

  function handleFilterGreased() {
    console.log("handleFilterGreased() called");
    showGreasedVisible(true);
    showNameSort(false);
    showWeightSort(false);
  }

  function handleFilterName() {
    console.log("handleFilterName() called");
    showNameSort(true);
    showGreasedVisible(false);
    showWeightSort(false);
  }

  function handleFilterWeight() {
    console.log("handleFilterWeight() called");
    showWeightSort(true);
    showGreasedVisible(false);
    showNameSort(false);
  }

  console.log("greasedVisible: ", greasedVisible);

  // User clicked into card value itself to reveal for info for pig:
  if (additionalInfo && hogs && hogs.map) {
    allHogs = hogs.map((hog) => (
      <div key={hog["name"]} onClick={handleTileClick} className="pigTile">
        <h1>{hog["name"]}</h1>
        <img alt={hog["name"]} src={hog["image"]} />
        <h2>Speciality: {hog["speciality"]}</h2>
        <h2>Weight: {hog["weight"]} lbs</h2>
        <h2>Greased: {hog["greased"] ? "Yes" : "No"}</h2>
        <h2>Highest Medal Achieved: {hog["highest medal achieved"]}</h2>
      </div>
    ));
  } else if (hogs && hogs.map) {
    allHogs = hogs.map((hog) => (
      <div key={hog["name"]} onClick={handleTileClick} className="pigTile">
        <h1>{hog["name"]}</h1>
        <img alt={hog["name"]} src={hog["image"]} />
      </div>
    ));
  }

  // Greased is enabled, filters for 'greased' value:
  if (greasedVisible) {
    allHogs = hogs
      .filter((hog) => hog["greased"] === true)
      .map((hog) => (
        <div key={hog["name"]} onClick={handleTileClick} className="pigTile">
          <h1>{hog["name"]}</h1>
          <img alt={hog["name"]} src={hog["image"]} />
          <h2>Speciality: {hog["speciality"]}</h2>
          <h2>Weight: {hog["weight"]} lbs</h2>
          <h2>Greased: {hog["greased"] ? "Yes" : "No"}</h2>
          <h2>Highest Medal Achieved: {hog["highest medal achieved"]}</h2>
        </div>
      ));
  }
  // Weight is enabled, filters for 'weight' value
  if (weightSort) {
    allHogs = hogs
      .sort(function (a, b) {
        console.log("a: ", a);
        console.log("b: ", b);
        console.log('a["weight"] - b["weight"]', a["weight"] - b["weight"]);
        return a["weight"] - b["weight"];
      })
      .map((hog) => (
        <div key={hog["name"]} onClick={handleTileClick} className="pigTile">
          <h1>{hog["name"]}</h1>
          <img alt={hog["name"]} src={hog["image"]} />
          <h2>Speciality: {hog["speciality"]}</h2>
          <h2>Weight: {hog["weight"]} lbs</h2>
          <h2>Greased: {hog["greased"] ? "Yes" : "No"}</h2>
          <h2>Highest Medal Achieved: {hog["highest medal achieved"]}</h2>
        </div>
      ));
  }
  // Name is enabled, filters for 'name' value
  if (nameSort) {
    allHogs = hogs
      .sort(function (a, b) {
        return a["name"].localeCompare(b["name"]);
      })
      .map((hog) => (
        <div key={hog["name"]} onClick={handleTileClick} className="pigTile">
          <h1>{hog["name"]}</h1>
          <img alt={hog["name"]} src={hog["image"]} />
          <h2>Speciality: {hog["speciality"]}</h2>
          <h2>Weight: {hog["weight"]} lbs</h2>
          <h2>Greased: {hog["greased"] ? "Yes" : "No"}</h2>
          <h2>Highest Medal Achieved: {hog["highest medal achieved"]}</h2>
        </div>
      ));
  }

  console.log("allHogs (after if statements): ", allHogs);

  console.log("greasedVisible: ", greasedVisible);

  return (
    <div>
      <button onClick={handleFilterGreased}>Filter For Greased Hogs</button>
      <br />
      <br />
      <button onClick={handleFilterName}>Sort Hogs Based On Name</button>
      <br />
      <br />
      <button onClick={handleFilterWeight}>Sort Hogs Based On Weight</button>
      <br />
      <br />
      {allHogs}
    </div>
  );
}
export default Tile;
