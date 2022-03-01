
npm install --save react-countdown-hook
===========================================================
import React, { Component } from "react";
import { render } from "react-dom";
import useCountDown from "react-countdown-hook";

import "./style.css";

const buttonStyle = { marginRight: "10px" };

const App = () => {
  const [timeLeft, actions] = useCountDown(10000, 100);
  return (
    <div style={{ textAlign: "center" }}>
      <h1 id="time-left">{(timeLeft / 1000).toFixed(2)}</h1>
      <button id="start" style={buttonStyle} onClick={() => actions.start()}>
        Start
      </button>
      <button
        id="restart"
        style={buttonStyle}
        onClick={() => actions.start(4200)}
      >
        Restart with 4.2s
      </button>
      <button id="pause" style={buttonStyle} onClick={() => actions.pause()}>
        Pause
      </button>
      <button id="resume" style={buttonStyle} onClick={() => actions.resume()}>
        Resume
      </button>
      <button id="reset" onClick={() => actions.reset()}>
        Reset
      </button>
    </div>
  );
};

render(<App />, document.getElementById("root"));





