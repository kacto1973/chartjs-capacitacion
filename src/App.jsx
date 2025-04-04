import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BarChart from "./views/BarChart";
import PieChart from "./views/PieChart";
import BubbleChart from "./views/BubbleChart";
import RadarChart from "./views/RadarChart";
import ScatterChart from "./views/ScatterChart";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <h1 className="text-3xl font-bold absolute top-10 left-1/2 -translate-x-1/2">
          Chart JS - Ejemplos
        </h1>
        <div className="w-[80%] h-full flex justify-center">
          {/*          <BarChart></BarChart>
           */}
          {/*          

           */}
          <PieChart></PieChart>
          {/*          <RadarChart></RadarChart>

           */}
          {/**           <ScatterChart></ScatterChart>
           */}
          {/*          
          <BubbleChart></BubbleChart>

           */}
        </div>
      </div>
    </>
  );
}

export default App;
