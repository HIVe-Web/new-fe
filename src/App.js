import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Footer from "./components/footer/Footer";
import DesktopHomePage from "./pages/DesktopHomePage";
import TabletHomePage from "./pages/TabletHomePage";
import MobileHomePage from "./pages/MobileHomePage";

import './App.css';
import MobFooter from "./components/footer/MobFooter";

function App() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width:1024px'});
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <Router>
      <div className="App">
        <Routes>
         {isDesktopOrLaptop && <Route path="/" element={<><DesktopHomePage/><Footer/></>} />}
         {isTablet && <Route path="/" element={<><TabletHomePage/><Footer/></>} />}
         {isMobile && <Route path="/" element={<><MobileHomePage/><MobFooter/></>} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
