import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Login from "./components/Login/Login";

function App() {
  const user = null;
  return (
    <>
      <div className="App">{!user ? <Login /> : <HomeScreen />}</div>;
    </>
  );
}

export default App;
