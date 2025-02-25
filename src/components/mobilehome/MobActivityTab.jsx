import React, { useState } from "react";
import styled from "styled-components";

const MobActivityContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-top: 3vw;
`;

const MobActivityTextBox = styled.div`
border-radius: 1vw;
justify-content: center;
display: flex;
flex-direction: column;
background-color: #FFFFFF;
width: 86vw;
position: relative;
transition: all 0.3s ease;
padding: 2vw; // 조정된 패딩
margin-bottom: 2vw;
`;

const MobActivityQuestionWrapper = styled.div`
display: flex;
width: 90vw;
align-items: center;
margin-top: 1vw;
`;

const MobActivityQuestionText = styled.div`
color: #4A4DFF;
font-family: "Pretendard-Bold", Helvetica;
font-size: 4.2vw;
font-weight: 600;
margin-left: 3vw;
margin-right: 1vw;
margin-top: 2vw;
margin-bottom: 2vw;
`;

const MobActivityText = styled.div`
color: #000000;
margin-left: 1vw;
font-family: "Pretendard-Bold", Helvetica;
font-weight: 100;
font-size: 3.5vw;
`;

const MobDropDownText = styled.div`
color: #4A4DFF;
font-family: "Pretendard-bold", Helvetica;
line-height: 1.5;
width: 74vw;
font-size: 2.8vw;
margin-left: 9.2vw;
margin-bottom: 1.4vw;
display: flex;
opacity: ${props => props.show ? 1 : 0};
max-height: ${props => props.show ? "30vw" : "0"};
overflow: hidden;
transition: opacity 0.9s ease, max-height 0.9s ease, visibility 0.9s;
visibility: ${props => props.show ? 'visible' : 'hidden'};
`;

export const MobActivityTab = () => {
    const [showDropDown1, setShowDropDown1] = useState(false);
    const [showDropDown2, setShowDropDown2] = useState(false);
    const [showDropDown3, setShowDropDown3] = useState(false);
    const [showDropDown4, setShowDropDown4] = useState(false);

    const toggleDropDown1 = () => {
        setShowDropDown1(!showDropDown1);
    };

    const toggleDropDown2 = () => {
        setShowDropDown2(!showDropDown2);
    };

    const toggleDropDown3 = () => {
        setShowDropDown3(!showDropDown3);
    };

    const toggleDropDown4 = () => {
        setShowDropDown4(!showDropDown4);
    };

    return (
        <MobActivityContainer>
            <MobActivityTextBox expanded={showDropDown1} onClick={toggleDropDown1}>
                <MobActivityQuestionWrapper >
                    <MobActivityQuestionText>Q.</MobActivityQuestionText>
                    <MobActivityText>정기 세션은 언제 진행되나요?</MobActivityText>
                </MobActivityQuestionWrapper>
                <MobDropDownText show={showDropDown1}>정기 세션은 매주 목요일 오후 6시에 인문사회관 D동 308호에서<br/>진행됩니다!</MobDropDownText>
            </MobActivityTextBox>

            <MobActivityTextBox expanded={showDropDown2} onClick={toggleDropDown2}>
                <MobActivityQuestionWrapper>
                    <MobActivityQuestionText>Q.</MobActivityQuestionText>
                    <MobActivityText>정기 세션에서는 어떤 활동을 하나요?</MobActivityText>
                </MobActivityQuestionWrapper>
                <MobDropDownText show={showDropDown2}> 
                창업 교육 및 강연, 팀별 프로젝트 진행과 피드백 공유, 공모전 및 <br/>대회 준비, 아이디어톤 등 다양한 활동을 진행합니다. <br/>
                정기 세션 이외에도 피그마 스터디, 코딩 스터디 등 다양한 활동들을 자체적으로 운영하고 있습니다.</MobDropDownText>
            </MobActivityTextBox>

            <MobActivityTextBox expanded={showDropDown3} onClick={toggleDropDown3}>
                <MobActivityQuestionWrapper>
                    <MobActivityQuestionText>Q.</MobActivityQuestionText>
                    <MobActivityText>팀 빌딩은 어떻게 이루어지나요?</MobActivityText>
                </MobActivityQuestionWrapper>
                <MobDropDownText show={showDropDown3}>지원하신 서류와 면접 내용을 바탕으로 운영진이 구성할 예정입니다.</MobDropDownText>
            </MobActivityTextBox>

            <MobActivityTextBox expanded={showDropDown4} onClick={toggleDropDown4}>
                <MobActivityQuestionWrapper>
                    <MobActivityQuestionText>Q.</MobActivityQuestionText>
                    <MobActivityText>창업에 대해 몰라도 활동 가능한가요?</MobActivityText>
                </MobActivityQuestionWrapper>
                <MobDropDownText show={showDropDown4}>네! 창업에 대한 기초부터 차근차근 배워나갈 수 있도록 정기 세션이 진행될 예정입니다! <br/>
                추가적으로 창업 경험이 있는 하이브 기존 부원들로부터 많은 정보와 인사이트를 알아가실 수 있답니다!</MobDropDownText>
            </MobActivityTextBox>
            
        </MobActivityContainer>
    );
};

export default MobActivityTab;