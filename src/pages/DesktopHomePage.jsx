import React from "react";
import styled from "styled-components";

import Targets from '../components/home/Targets'
import Activity from "../components/home/Activity";
import History from "../components/home/History";
import Schedule from "../components/home/Schedule";
import Result from "../components/home/Result"
import Calendar from "../components/home/Calendar"
import Persona from "../components/home/Persona"
import Intro from "../components/home/Intro"
import FAQ from "../components/home/FAQ"

const MainContainer = styled.div`
  background-color: #1C1C1C;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ApplyHive = styled.div`
  background-color: rgba(42, 42, 42, 0.7);
  display: flex;
  align-items: center;
  width: 62vw;
  height: 5vw;
  position: sticky;
  bottom: 1vw;
  justify-content:center;
  cursor: pointer;
`;

const ApplyHiveText = styled.div`
  color: #ffffff;
  text-align: center;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 2.35vw;
`;

export const DesktopHomePage = () => {
  const handleApplyClick = () => {
    window.open('https://tally.so/r/m6Z7NA', '_blank', 'noopener,noreferrer');
  };

  return (
    <MainContainer>
      <Intro/>
      <Persona/>
      <Calendar/>
      <History/>
      <Schedule/>
      <Targets/>
      <Activity/>
      <Result/>
      <FAQ/>
      <ApplyHive onClick={handleApplyClick}><ApplyHiveText>29기 지원하기</ApplyHiveText></ApplyHive>
    </MainContainer>
  );
};

export default DesktopHomePage;