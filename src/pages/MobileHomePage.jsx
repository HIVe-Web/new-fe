import React from "react";
import styled from "styled-components";

import MobIntro from "../components/mobilehome/MobIntro"
import MobPersona from "../components/mobilehome/MobPersona";
import MobSchedule from "../components/mobilehome/MobSchedule";
import MobCalendar from "../components/mobilehome/MobCalendar";
import MobHistory from "../components/mobilehome/MobHistory";
import MobTargets from "../components/mobilehome/MobTarget";
import MobActivity from "../components/mobilehome/MobActivity";
import MobAwards from "../components/mobilehome/MobAwards";
import MobFAQ from "../components/mobilehome/MobFAQ";

const MainContainer = styled.div`
  background-color: #1C1C1C;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%
  width: 100%;
`;

const ApplyHive = styled.div`
  background-color: #2A2A2A;
  border-radius: 2vw; 
  display: flex;
  align-items: center;
  width: 80vw;
  height: 15vw;
  position: sticky;
  bottom: 1vw;
  justify-content:center;
  cursor: pointer;
`;

const ApplyHiveText = styled.div`
  color: #ffffff;
  text-align: center;
  font-family: "Pretendard-Bold", Helvetica;
  font-weight: 650;
  font-size: 5vw;
`;

export const MobileHomePage = () => {
    const handleApplyClick = () => {
      window.open('https://tally.so/r/m6Z7NA', '_blank', 'noopener,noreferrer');
    };
    return (
      <MainContainer>
        <MobIntro/>
        <MobPersona/>
        <MobCalendar/>
        <MobHistory/>
        <MobSchedule/>
        <MobTargets/>
        <MobActivity/>
        <MobAwards/>
        <MobFAQ/>
        <ApplyHive onClick={handleApplyClick}><ApplyHiveText>29기 지원하기</ApplyHiveText></ApplyHive>
      </MainContainer>
    );
  };
  
  export default MobileHomePage;