import { useState } from "react";
import "./App.css";
import { mockData as pilotList } from "./mockData";
import { Container } from "./components";

function App() {
  return (
    <div className="App">
      <Container className="main-section" pilotList={pilotList} />
    </div>
  );
}

export default App;
