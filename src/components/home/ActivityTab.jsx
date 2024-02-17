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
    align-items: center;
    display: flex;
    background-color: #2a2a2a;
    min-height: 10vw;
    width: 60vw;
    margin-top: 2vw;
    position: relative;
`;

const ActivityQuestionText = styled.div`
    color: #70ff00;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.8vw;
    text-align: center;
    margin-left: 2vw;
`;

const ActivityText = styled.div`
    color: #ffffff;
    margin-left: 1vw;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2vw;
`;

const ActivityArrowImage = styled.img`
    position: absolute;;
    right: 5vw;
    aspect-ratio: 1;
    object-fit: contain;
    height: 2.5vw;
    width: 2.5vw;
    cursor: pointer;
`;

const DropDownContent = styled.div`
    background-color: #2a2a2a;
    align-items: center;
    border-radius: 1vw;
    width: 60vw;
    height: 7vw;
    display: ${props => props.show ? "flex" : "none"}; /* 상태에 따라 표시 여부 설정 */
`;

const DropDownText = styled.div`
    color: #ffffff;
    font-family: "Pretendard-Regular", Helvetica;
    font-size: 1.5vw;
    margin-left: 2vw;
    padding: 1vw;
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
        setShowDropDown2(false);
        setShowDropDown3(false);
        setShowDropDown4(false);
        setArrowImage1(showDropDown1 ? downArrowImage : upArrowImage);
        setArrowImage2(downArrowImage);
        setArrowImage3(downArrowImage);
        setArrowImage4(downArrowImage);
    };

    const toggleDropDown2 = () => {
        setShowDropDown1(false);
        setShowDropDown2(!showDropDown2);
        setShowDropDown3(false);
        setShowDropDown4(false);
        setArrowImage1(downArrowImage);
        setArrowImage2(showDropDown2 ? downArrowImage : upArrowImage);
        setArrowImage3(downArrowImage);
        setArrowImage4(downArrowImage);
    };

    const toggleDropDown3 = () => {
        setShowDropDown1(false);
        setShowDropDown2(false);
        setShowDropDown3(!showDropDown3);
        setShowDropDown4(false);
        setArrowImage1(downArrowImage);
        setArrowImage2(downArrowImage);
        setArrowImage3(showDropDown3 ? downArrowImage : upArrowImage);
        setArrowImage4(downArrowImage);
    };

    const toggleDropDown4 = () => {
        setShowDropDown1(false);
        setShowDropDown2(false);
        setShowDropDown3(false);
        setShowDropDown4(!showDropDown4);
        setArrowImage1(downArrowImage);
        setArrowImage2(downArrowImage);
        setArrowImage3(downArrowImage);
        setArrowImage4(showDropDown4 ? downArrowImage : upArrowImage);
    };

    return (
        <ActivityContainer>
            <ActivityTextBox>
                <ActivityQuestionText>Q.</ActivityQuestionText>
                <ActivityText>정기 세션은 언제 진행되나요?</ActivityText>
                <ActivityArrowImage src={arrowImage1} onClick={toggleDropDown1} />
            </ActivityTextBox>
            <DropDownContent show={showDropDown1}>
                <DropDownText>매주 목요일 6시에 정기 활동이 진행됩니다.</DropDownText>
            </DropDownContent>

            <ActivityTextBox>
                <ActivityQuestionText>Q.</ActivityQuestionText>
                <ActivityText>정기 세션에서는 어떤 활동을 하나요?</ActivityText>
                <ActivityArrowImage src={arrowImage2} onClick={toggleDropDown2} />
            </ActivityTextBox>
            <DropDownContent show={showDropDown2}>
                <DropDownText>팀별 프로젝트, 창업 교육 및 강연 등 다양한 활동이 예정되어 있습니다.</DropDownText>
            </DropDownContent>
            <ActivityTextBox>
                <ActivityQuestionText>Q.</ActivityQuestionText>
                <ActivityText>팀 빌딩은 어떻게 이루어지나요?</ActivityText>
                <ActivityArrowImage src={arrowImage3} onClick={toggleDropDown3} />
            </ActivityTextBox>
            <DropDownContent show={showDropDown3}>
                <DropDownText>지원하신 서류와 면접 내용을 바탕으로 운영진이 구성할 예정입니다.</DropDownText>
            </DropDownContent>

            <ActivityTextBox>
                <ActivityQuestionText>Q.</ActivityQuestionText>
                <ActivityText>창업에 대해 몰라도 활동 가능한가요?</ActivityText>
                <ActivityArrowImage src={arrowImage4} onClick={toggleDropDown4} />
            </ActivityTextBox>
            <DropDownContent show={showDropDown4}>
                <DropDownText>네, 차근차근 배워나갈 수 있도록 정기 세션이 진행될 예정입니다.</DropDownText>
            </DropDownContent>
        </ActivityContainer>
    );
};

export default ActivityTab;