import { useState, useEffect } from "react";
import "./App.css";
import AllCountries from "./components/AllCountries";
import ByRegion from "./components/ByRegion";

function App() {
  const [toggleComps, setToggleComps] = useState({
    allCountries: true,
    byRegion: false,
  });

  const handleChange = (e) => {
    setToggleComps({ [e.target.value]: e.target.checked });
  };

  return (
    <div className="App">
      <div className="rad-list">
        <input
          type="radio"
          className="rad"
          name="searchRef"
          value="allCountries"
          defaultChecked
          onChange={handleChange}
        />
        <label>All Countries</label>
        <input
          type="radio"
          className="rad"
          name="searchRef"
          value="byRegion"
          onChange={handleChange}
        />
        <label> By Region</label>
      </div>
      {toggleComps.allCountries && <AllCountries />}
      {toggleComps.byRegion && <ByRegion />}
    </div>
  );
}

export default App;
