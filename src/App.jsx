import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BarChart from "./views/BarChart";

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-1/2 h-1/2">
          <BarChart></BarChart>
        </div>
      </div>
    </>
  );
}

export default App;
