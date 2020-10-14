import React from "react";
import "./App.scss";
import Header from "./components/Header";
import List from "./components/List";
function App() {
  return (
    <div className="app">
      <Header></Header>
      <List />
    </div>
  );
}

export default App;
