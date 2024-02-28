import React, { useState } from "react";
import styled, { css } from "styled-components";

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
justify-content: center;
display: flex;
flex-direction: column;
background-color: #2a2a2a;
width: 67vw;
position: relative;
transition: all 0.3s ease;
padding: 2vw; // 조정된 패딩
margin-bottom: 2vw;
cursor: pointer;
`;

const ActivityQuestionWrapper = styled.div`
display: flex;
width: 60vw;
align-items: center;
cursor: pointer;
`;

const ActivityQuestionText = styled.div`
color: #52FF98;
font-family: "Pretendard-Bold", Helvetica;
font-size: 2.4vw;
margin-left: 0.5vw;
`;

const ActivityText = styled.div`
color: #ffffff;
margin-left: 1vw;
font-family: "Pretendard-Bold", Helvetica;
font-size: 1.9vw;
`;

const ActivityArrowImage = styled.img`
position: absolute;
right: 4vw;
cursor: pointer;
transition: transform 0.3s ease;
${props => props.expanded && css`transform: rotate(180deg);`}
`;

const DropDownText = styled.div`
color: #ffffff;
font-family: "Pretendard-Regular", Helvetica;
line-height: 1.5;
width: 55vw;
font-size: 1.5vw;
margin-left: 3.9vw;
display: flex;
opacity: ${props => props.show ? 1 : 0};
max-height: ${props => props.show ? "11vw" : "0"}; // 적절한 최대 높이 조정
overflow: hidden;
transition: opacity 0.9s ease, max-height 0.9s ease, visibility 0.9s;
visibility: ${props => props.show ? 'visible' : 'hidden'};
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
            <ActivityTextBox expanded={showDropDown1} onClick={toggleDropDown1}>
                <ActivityQuestionWrapper>
                    <ActivityQuestionText>Q.</ActivityQuestionText>
                    <ActivityText>정기 세션은 언제 진행되나요?</ActivityText>
                    <ActivityArrowImage src={arrowImage1} />
                </ActivityQuestionWrapper>
                <DropDownText show={showDropDown1} ><br/>정기 세션은 매주 목요일 오후 6시에 인문사회관 D동 308호에서 진행됩니다!</DropDownText>
            </ActivityTextBox>

            <ActivityTextBox expanded={showDropDown2} onClick={toggleDropDown2}>
                <ActivityQuestionWrapper>
                    <ActivityQuestionText>Q.</ActivityQuestionText>
                    <ActivityText>정기 세션에서는 어떤 활동을 하나요?</ActivityText>
                    <ActivityArrowImage src={arrowImage2}  />
                </ActivityQuestionWrapper>
                <DropDownText show={showDropDown2}><br/>창업 교육 및 강연, 팀별 프로젝트 진행과 피드백 공유, 공모전 및 대회 준비, 해커톤 등 다양한 활동을 진행합니다. 정기 세션 이외에도 피그마 스터디, 코딩 스터디 등 다양한 활동들을 자체적으로 운영하고 있습니다.</DropDownText>
            </ActivityTextBox>

            <ActivityTextBox expanded={showDropDown3} onClick={toggleDropDown3}>
                <ActivityQuestionWrapper>
                    <ActivityQuestionText>Q.</ActivityQuestionText>
                    <ActivityText>팀 빌딩은 어떻게 이루어지나요?</ActivityText>
                    <ActivityArrowImage src={arrowImage3} />
                </ActivityQuestionWrapper>
                <DropDownText show={showDropDown3}><br/>지원하신 서류와 면접 내용을 바탕으로 운영진이 구성할 예정입니다.</DropDownText>
            </ActivityTextBox>

            <ActivityTextBox expanded={showDropDown4} onClick={toggleDropDown4}>
                <ActivityQuestionWrapper>
                    <ActivityQuestionText>Q.</ActivityQuestionText>
                    <ActivityText>창업에 대해 몰라도 활동 가능한가요?</ActivityText>
                    <ActivityArrowImage src={arrowImage4} />
                </ActivityQuestionWrapper>
                <DropDownText show={showDropDown4}><br/>네! 창업에 대한 기초부터 차근차근 배워나갈 수 있도록 정기 세션이 진행될 예정입니다.<br/>
                추가적으로 창업 경험이 있는 하이브 기존 부원들로부터 많은 정보와 인사이트를 알아가실 수 있답니다!</DropDownText>
            </ActivityTextBox>

        </ActivityContainer>
    );
};

export default ActivityTab;