import React, { useEffect } from "react";
import { BrowserRouter, Router, Roote } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

const App = () => {
  <div>
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div
          className="fixer right-4 bottom-4 "
          style={{ zIndex: "100" }}
        ></div>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
          >
            <FiSettings></FiSettings>
          </button>
        </TooltipComponent>
      </div>
    </BrowserRouter>
  </div>;
};
export default App;
