import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Routing from "./component/Router/Routing";
import Navbar from "./component/Router/Navbar";
import Home from "./component/HomePage/Home";
function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
