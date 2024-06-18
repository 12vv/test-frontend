import React from "react";
import "./App.css";
import { UserData } from "./components";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home1 from "./components/Sidebar/Home1";
import Home2 from "./components/Sidebar/Home2";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div style={{ marginLeft: 60 }}>
        <Routes>
          <Route path="/" element={<UserData userId={"1"} />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/home2" element={<Home2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
