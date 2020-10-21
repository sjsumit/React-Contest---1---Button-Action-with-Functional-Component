import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [showPara, setShowPara] = React.useState(false);
  const handleClick = function () {
    setShowPara(true);
  };

  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Click
      </button>
      {showPara ? <Para /> : null}
    </div>
  );
}

export default App;
