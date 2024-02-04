import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         {/*홈페이지*/}
          <Route path="/" element={<><Header /><HomePage /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
