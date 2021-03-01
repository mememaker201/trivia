import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var points = 0;

  var questionNumber = 0;
  // questionNumber = questionNumber + 1;
  const question = data[questionNumber].question.text;
  return (
    <div className="app">
      Trivia!
      <Question show={question} />
    </div>
  );
}

function Question(props) {
  return <div>{props.show}</div>;
}
export default App;
