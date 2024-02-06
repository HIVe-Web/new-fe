// src/pages/HomePage.jsx
import { useState, useEffect } from "react";
import styled from "styled-components";
import Banner from "../components/home/Banner";
import { Link } from "react-router-dom";


//Home 전체 페이지
const HomePageContainer = styled.div`
  height: 1000px;
  background: #070814;
  color: #fff;  
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

const HomePage = () => {
    return (
        <div>
            <HomePageContainer>
                <h2>HONGIK Venture<br></br></h2>
                <h2>HIVe</h2>
            </HomePageContainer>
        </div>
    )
}

export default HomePage;