import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var points = 0;
  return (
    <div className="app">
      Trivia!
      <Question show="Question goes here" />
    </div>
  );
}
function Question(props) {
  return <div>{props.show}</div>;
}
export default App;
