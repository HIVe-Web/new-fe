import React, { useState } from "react";
import styled from "styled-components";

import ApplyTab from "./ApplyTab";
import ActivityTab from "./ActivityTab";

const FAQContainer = styled.div`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 10vw;
    width: 60vw;
`;

const FAQTitle = styled.div`
    color: #8884A8;
    text-align: center;
    font-family: Pretendard-Bold, sans-serif;
    font-size: 2.6vw;
    margin-bottom: 1vw;
`;

const FAQSubTitle = styled.div`
    color: #4A4DFF;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 3.5vw;
    margin-bottom: 1vw;
`;

const TabContainer = styled.div`
    background-color: #fefefe;
`;

const TabHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 60vw;
    white-space: nowrap;
    justify-content: flex-start;
    margin: 2vw;
`;

const TabButtonStyled = styled.div`
    color: ${props => props.active ? "#4A4DFF" : "#000000"};
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.3vw;
    font-weight: 700;
    white-space: nowrap;
    margin-right: 6vw;
    cursor: pointer;
`;

const TabBody = styled.div`
`;

export const FAQ = () => {
    const [tab, setTab] = useState("ApplyTab"); // 기본적으로 "ApplyTab"으로 설정

    const TabButton = ({tabName, onClick, active}) => {
        return <TabButtonStyled active={active} onClick={onClick}>{tabName}</TabButtonStyled>;
    }

    const onClickTabButton = (tabId) => {
        if (tabId === 1) {
            setTab("ApplyTab");
        } else {
            setTab("ActivityTab");
        }
    };

    return (
        <FAQContainer>
            <FAQTitle>FAQ</FAQTitle>
            <FAQSubTitle>자주 하는 질문</FAQSubTitle>
            <TabContainer>
                <TabHeader>
                    <TabButton tabName={"지원"} onClick={() => onClickTabButton(1)} active={tab === "ApplyTab"} />
                    <TabButton tabName={"활동"} onClick={() => onClickTabButton(2)} active={tab === "ActivityTab"} />
                </TabHeader>
                <TabBody>
                    {tab === "ApplyTab" && <ApplyTab />}
                    {tab === "ActivityTab" && <ActivityTab />}
                </TabBody>
            </TabContainer>
        </FAQContainer>
    )
};

export default FAQ;
