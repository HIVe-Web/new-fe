import React, { useState } from "react";
import styled from "styled-components";

import MobApplyTab from "./MobApplyTab";
import MobActivityTab from "./MobActivityTab";

const MobFAQContainer = styled.div`
    background-color: #1C1C1C;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 10vw;
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
    color: #70ff00;
    text-align: center;
    text-shadow: 0px 0.5vw 0.5vw rgba(0, 0, 0, 0.25);
    font-family: "Pretendard-Bold", Helvetica;
    font-weight: 700;
    font-size: 8vw;
    margin-bottom: 3vw;
`;

const MobTabContainer = styled.div`
    background-color: #1C1C1C;
`;

const MobTabHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 70vw;
    white-space: nowrap;
    justify-content: flex-start;
    margin: 2vw;
`;

const MobTabButtonStyled = styled.div`
    color: ${props => props.active ? "#70ff00" : "#ffffff"};
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 3.8vw;
    font-weight: 700;
    white-space: nowrap;
    margin-right: 6vw;
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