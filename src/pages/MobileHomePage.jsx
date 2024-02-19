import React from "react";
import styled from "styled-components";

import MobIntro from "../components/mobilehome/MobIntro"
import MobPersona from "../components/mobilehome/MobPersona";
import MobSchedule from "../components/mobilehome/MobSchedule";
import MobCalendar from "../components/mobilehome/MobCalendar";

const MainContainer = styled.div`
  background-color: #1C1C1C;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  height: 100%
  width: 100%;
`;

export const MobileHomePage = () => {
    return (
      <MainContainer>
        <MobIntro/>
        <MobPersona/>
        <MobCalendar/>
        <MobSchedule/>
      </MainContainer>
    );
  };
  
  export default MobileHomePage;