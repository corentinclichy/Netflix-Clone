import React from "react";
import "./App.css";
import Row from "./Row.js";
import requests from "./requests.js";

function App() {
  return (
    <div className="App">
      <h1> Hey Let 's build a Netflix Clone</h1>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
