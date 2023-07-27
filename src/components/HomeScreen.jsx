import React, { useState } from "react";
import "./HomeScreen.scss";

export default function HomeScreen() {
  const [display, setDisplay] = useState(false);

  return (
    <div className="homescreen">
      <div className="contents">
        <input
          type="text"
          placeholder="Search"
          onClick={() => setDisplay(true)}
        />
        {display && <div className="trend-items">Hi</div>}
      </div>
    </div>
  );
}
