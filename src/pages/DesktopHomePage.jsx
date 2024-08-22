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
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ApplyHive = styled.div`
  background-color: rgba(74, 77, 255, 0.7);
  border-radius: 1vw;
  display: flex;
  align-items: center;
  width: 71vw;
  height: 5.5vw;
  position: sticky;
  bottom: 1vw;
  justify-content:center;
  cursor: pointer;
`;

const ApplyHiveText = styled.div`
  color: #ffffff;
  text-align: center;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 2.7vw;
`;

export const DesktopHomePage = () => {
  const handleApplyClick = () => {
    window.open('https://tally.so/r/mKLPo8', '_blank', 'noopener,noreferrer');
  };

  return (
    <MainContainer>
      <Intro />
      {/* <Persona/> */}
      <Calendar />
      <History />
      <Schedule />
      <Targets />
      <Activity />
      <Result />
      <FAQ />
      <ApplyHive onClick={handleApplyClick}><ApplyHiveText>29.5기 지원하기</ApplyHiveText></ApplyHive>
    </MainContainer>
  );
};

export default DesktopHomePage;