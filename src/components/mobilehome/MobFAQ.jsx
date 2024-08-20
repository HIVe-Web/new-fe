import React, { useState } from "react";
import styled from "styled-components";

import MobApplyTab from "./MobApplyTab";
import MobActivityTab from "./MobActivityTab";

const MobFAQContainer = styled.div`
    background-color: #FEFEFE;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 18vw;
    width: 70vw;
`;

const MobFAQTitle = styled.div`
    color: #838BA2;
    text-align: center;
    font-family: "Pretendard-Bold", sans-serif;
    font-size: 5.5vw;
    margin-bottom: 3vw;
`;

const MobFAQSubTitle = styled.div`
    color: #4A4DFF;
    text-align: center;
    text-shadow: 0px 0.5vw 0.5vw rgba(0, 0, 0, 0.25);
    font-family: "Pretendard-Bold", Helvetica;
    font-weight: 700;
    font-size: 8vw;
    margin-bottom: 6vw;
`;

const MobTabContainer = styled.div`
    background-color: #ffffff;
`;

const MobTabHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 90vw;
    white-space: nowrap;
    justify-content: space-evenly;
    margin-bottom: 6vw;
`;

const MobTabButtonStyled = styled.div`
    color: ${props => props.active ? "#4A4DFF" : "#000000"};
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 4.2vw;
    font-weight: 700;
    white-space: nowrap;
    cursor: pointer;
`;

const MobTabBody = styled.div`
`;

export const MobFAQ = () => {
    const [tab, setTab] = useState("MobApplyTab"); // 기본적으로 "ApplyTab"으로 설정

    const MobTabButton = ({tabName, onClick, active}) => {
        return <MobTabButtonStyled active={active} onClick={onClick}>{tabName}</MobTabButtonStyled>;
    }

    const onClickTabButton = (tabId) => {
        if (tabId === 1) {
            setTab("MobApplyTab");
        } else {
            setTab("MobActivityTab");
        }
    };

    return (
        <MobFAQContainer>
            <MobFAQTitle>FAQ</MobFAQTitle>
            <MobFAQSubTitle>자주 하는 질문</MobFAQSubTitle>
            <MobTabContainer>
                <MobTabHeader>
                    <MobTabButton tabName={"지원"} onClick={() => onClickTabButton(1)} active={tab === "MobApplyTab"} />
                    <MobTabButton tabName={"활동"} onClick={() => onClickTabButton(2)} active={tab === "MobActivityTab"} />
                </MobTabHeader>
                <MobTabBody>
                    {tab === "MobApplyTab" && <MobApplyTab />}
                    {tab === "MobActivityTab" && <MobActivityTab />}
                </MobTabBody>
            </MobTabContainer>
        </MobFAQContainer>
    )
};

export default MobFAQ;