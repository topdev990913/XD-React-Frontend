import React from "react";
import "./App.css";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Home from './WebPartPages/Home'
import ViewProfile from "./WebPartPages/ViewProfile";
import FavoriteViewProfile from "./WebPartPages/FavoriteViewProfile";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/ >} />
          <Route exact path="/ViewProfile" element={<ViewProfile />} />
          <Route exact path="/FavoriteViewProfile" element={<FavoriteViewProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
