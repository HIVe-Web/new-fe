import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         {/*홈페이지*/}
          <Route path="/" element={<><HomePage/><Footer/></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
