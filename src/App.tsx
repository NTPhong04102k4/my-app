import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Discovery from "./pages/discovery";
import Home from "./pages/home";
import { SideBarComponent } from "./component/sideBar";
import Favorite from "./pages/favortite";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App flex-1">
        <SideBarComponent />
        <div>
          <Routes>
       
              <Route path="/" element={<Home />} />
              <Route path="/discovery" element={<Discovery />} />
              <Route path="/home" element={<Home />} />
              <Route path="/favorite" element={<Favorite />} />
           
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
