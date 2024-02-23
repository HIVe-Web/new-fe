import React, { useState } from "react";
import styled from "styled-components";

import downArrowImage from "../../assets/images/downArrow.png"
import upArrowImage from "../../assets/images/upArrow.png"

const ActivityContainer = styled.div`
    background-color: #1C1C1C;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 3vw;
`;

const ActivityTextBox = styled.div`
    border-radius: 1vw;
    justify-content:center;
    display: flex;
    flex-direction: column;
    background-color: #2a2a2a;
    width: 62vw;
    position: relative;
    transition: min-height 0.5s ease;
    min-height: ${props => props.expanded ? "13vw" : "8vw"};
    margin-bottom: 2vw;
`;

const ActivityQuestionWrapper = styled.div`
    display: flex;
    width: 60vw;
    align-items: center;
    margin-top: 2.6vw;
`;

const ActivityQuestionText = styled.div`
    color: #52FF98;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.3vw;
    margin-left: 2vw;
    transition: text-align 2s ease;
`;

const ActivityText = styled.div`
    color: #ffffff;
    margin-left: 1vw;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 1.7vw;
    transition: text-align 2s ease;
`;

const ActivityArrowImage = styled.img`
    position: absolute;
    right: 5vw;
    aspect-ratio: 1;
    object-fit: contain;
    height: 2.5vw;
    width: 2.5vw;
    cursor: pointer;
`;

const DropDownText = styled.div`
    color: #ffffff;
    font-family: "Pretendard-Regular", Helvetica;
    width: 60vw;
    font-size: 1.5vw;
    margin-top: 3vw;
    margin-left: 5.3vw;
    display: flex;
    opacity: ${props => props.show ? 1 : 0};
    max-height: ${props => props.show ? "4vw" : "0"};
    overflow: hidden;
    transition: opacity 0.5s ease, max-height 0.5s ease;
`;

export const ActivityTab = () => {
    const [showDropDown1, setShowDropDown1] = useState(false);
    const [showDropDown2, setShowDropDown2] = useState(false);
    const [showDropDown3, setShowDropDown3] = useState(false);
    const [showDropDown4, setShowDropDown4] = useState(false);

    const [arrowImage1, setArrowImage1] = useState(downArrowImage);
    const [arrowImage2, setArrowImage2] = useState(downArrowImage);
    const [arrowImage3, setArrowImage3] = useState(downArrowImage);
    const [arrowImage4, setArrowImage4] = useState(downArrowImage);

    const toggleDropDown1 = () => {
        setShowDropDown1(!showDropDown1);
        setArrowImage1(showDropDown1 ? downArrowImage : upArrowImage);
    };

    const toggleDropDown2 = () => {
        setShowDropDown2(!showDropDown2);
        setArrowImage2(showDropDown2 ? downArrowImage : upArrowImage);
    };

    const toggleDropDown3 = () => {
        setShowDropDown3(!showDropDown3);
        setArrowImage3(showDropDown3 ? downArrowImage : upArrowImage);
    };

    const toggleDropDown4 = () => {
        setShowDropDown4(!showDropDown4);
        setArrowImage4(showDropDown4 ? downArrowImage : upArrowImage);
    };

    return (
        <ActivityContainer>
            <ActivityTextBox expanded={showDropDown1}>
                <ActivityQuestionWrapper>
                    <ActivityQuestionText>Q.</ActivityQuestionText>
                    <ActivityText>정기 세션은 언제 진행되나요?</ActivityText>
                    <ActivityArrowImage src={arrowImage1} onClick={toggleDropDown1}/>                    
                </ActivityQuestionWrapper>
                <DropDownText show={showDropDown1}>매주 목요일 6시에 정기 활동이 진행됩니다.</DropDownText>
            </ActivityTextBox>

            <ActivityTextBox expanded={showDropDown2}>
                <ActivityQuestionWrapper>
                    <ActivityQuestionText>Q.</ActivityQuestionText>
                    <ActivityText>정기 세션에서는 어떤 활동을 하나요?</ActivityText>
                    <ActivityArrowImage src={arrowImage2} onClick={toggleDropDown2}/>                    
                </ActivityQuestionWrapper>
                <DropDownText show={showDropDown2}>팀별 프로젝트, 창업 교육 및 강연 등 다양한 활동이 예정되어 있습니다.</DropDownText>
            </ActivityTextBox>

            <ActivityTextBox expanded={showDropDown3}>
                <ActivityQuestionWrapper>
                    <ActivityQuestionText>Q.</ActivityQuestionText>
                    <ActivityText>팀 빌딩은 어떻게 이루어지나요?</ActivityText>
                    <ActivityArrowImage src={arrowImage3} onClick={toggleDropDown3}/>                    
                </ActivityQuestionWrapper>
                <DropDownText show={showDropDown3}>지원하신 서류와 면접 내용을 바탕으로 운영진이 구성할 예정입니다.</DropDownText>
            </ActivityTextBox>
            
            <ActivityTextBox expanded={showDropDown4}>
                <ActivityQuestionWrapper>
                    <ActivityQuestionText>Q.</ActivityQuestionText>
                    <ActivityText>창업에 대해 몰라도 활동 가능한가요?</ActivityText>
                    <ActivityArrowImage src={arrowImage4} onClick={toggleDropDown4}/>                    
                </ActivityQuestionWrapper>
                <DropDownText show={showDropDown4}>네, 차근차근 배워나갈 수 있도록 정기 세션이 진행될 예정입니다.</DropDownText>
            </ActivityTextBox>
            
        </ActivityContainer>
    );
};

export default ActivityTab;