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

export const HomePage1 = () => {
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
    </MainContainer>
  );
};

export default HomePage1;