import React, { useEffect } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";
import { Navbar, Footer, Sidebar } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Financial,
  Editor,
} from "./pages";
const App = () => {
  // khởi tạo biến activeMenu
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Setting" position="Top">
              <button
                type="button"
                style={{ background: "black", borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w=72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            //nếu mà không mở thì ???
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              //them thanh dieu huong
              // cach dat ten class 1
              activeMenu
                ? "dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full"
                : "dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2"
              // cach 2
              // 'dark:bg-main-bg bg-main-bg min-h-screen w-full ${ activeMenu ? 'w-full':'flex-2'}'
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/* react dom */}
              {/* dinh tuyen cho componenents */}

              {/* trang dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* trang Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/custormers" element={<Customers />} />

              {/* trang Apps  */}
              <Route path="/kaban" element={<Kanban />} />
              <Route path="/calendar" element={<Calendar />} />

              {/* Charts  bieu do */}
              <Route path="/line" element={<Line />} />
              {/* string into components */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
