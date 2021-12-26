import React, { useState } from "react";
import "./App.css";

function App() {
  const [arr, setArr] = useState([
    { ID: 12132, Marker: "Marker1", queue: 1 },
    { ID: 12133, Marker: "Marker2", queue: 2 },
    { ID: 12134, Marker: "Marker3", queue: 3 },
    { ID: 12135, Marker: "Marker4", queue: 4 },
    { ID: 12136, Marker: "Marker5", queue: 5 },
  ]);

  const arrSet = () => {
    setArr([...arr, (arr[2] = { ...arr[2], queue: 6 })]);
    console.log(arr);
  };

  return (
    <div className="App">
      <button onClick={() => arrSet()}>click me </button>
    </div>
  );
}

export default App;
