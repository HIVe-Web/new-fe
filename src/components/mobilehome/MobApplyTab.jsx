import React, { useState } from "react";
import styled from "styled-components";

const MobApplyContainer = styled.div`
    background-color: #1C1C1C;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 3vw;
`;

const MobApplyTextBox = styled.div`
    border-radius: 1vw;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: #2a2a2a;
    width: 86vw;
    position: relative;
    transition: all 0.3s ease;
    padding: 2vw; // 조정된 패딩
    margin-bottom: 2vw;
`;

const MobApplyQuestionWrapper = styled.div`
    display: flex;
    width: 90vw;
    align-items: center;
`;

const MobApplyQuestionText = styled.div`
    color: #52FF98;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 4.2vw;
    font-weight: 600;
    margin-left: 3vw;
    margin-right: 1vw;
    margin-top: 2vw;
    margin-bottom: 2vw;
`;

const MobApplyText = styled.div`
color: #ffffff;
margin-left: 1vw;
font-family: "Pretendard-Bold", Helvetica;
font-weight: 100;
font-size: 3.5vw;
`;

const MobDropDownText = styled.div`
color: #ffffff;
font-family: "Pretendard-Regular", Helvetica;
line-height: 1.5;
width: 74vw;
font-size: 2.8vw;
margin-left: 9.2vw;
display: flex;
opacity: ${props => props.show ? 1 : 0};
max-height: ${props => props.show ? "30vw" : "0"};
overflow: hidden;
transition: opacity 0.9s ease, max-height 0.9s ease, visibility 0.9s;
visibility: ${props => props.show ? 'visible' : 'hidden'};
`;

export const MobApplyTab = () => {
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
        <MobApplyContainer>
            <MobApplyTextBox expanded={showDropDown1}>
                <MobApplyQuestionWrapper onClick={toggleDropDown1}>
                    <MobApplyQuestionText>Q.</MobApplyQuestionText>
                    <MobApplyText>프로젝트나 협업 경험이 없어도 지원 가능한가요?</MobApplyText>
                </MobApplyQuestionWrapper>
                <MobDropDownText show={showDropDown1}>네, 창업에 대한 의지만 있다면 누구나 가능합니다!<br/>
                하이브는 열정을 가지고 진심어린 마음으로 창업 경험을 쌓고 싶은 분들을 기다리고 있습니다!<br/><br/>
                </MobDropDownText>
            </MobApplyTextBox>

            <MobApplyTextBox expanded={showDropDown2}>
                <MobApplyQuestionWrapper onClick={toggleDropDown2}>
                    <MobApplyQuestionText>Q.</MobApplyQuestionText>
                    <MobApplyText>포트폴리오를 따로 제출해야 하나요?</MobApplyText>
                </MobApplyQuestionWrapper>
                <MobDropDownText show={showDropDown2}>포트폴리오는 필수가 아니지만 제출 가능합니다! <br/>
                포트폴리오가 있으신 분들은 능력과 경험을 추가적으로 어필하실 수 있답니다!
                포트폴리오가 없으신 분들은 서류에서 창업에 대한 의지와 하이브 활동에 대한 열정을 중점으로 지원자님을 어필해보세요!<br/><br/>
                </MobDropDownText>
            </MobApplyTextBox>

            <MobApplyTextBox expanded={showDropDown3}>
                <MobApplyQuestionWrapper onClick={toggleDropDown3}>
                    <MobApplyQuestionText>Q.</MobApplyQuestionText>
                    <MobApplyText>면접은 어떤 방식으로 진행되나요?</MobApplyText>
                </MobApplyQuestionWrapper>
                <MobDropDownText show={showDropDown3}>면접은 대면으로 진행되며 작성해주신 서류 항목 중심으로 <br/>질의응답이 이루어집니다!<br/><br/></MobDropDownText>
            </MobApplyTextBox>

            <MobApplyTextBox expanded={showDropDown4}>
                <MobApplyQuestionWrapper onClick={toggleDropDown4}>
                    <MobApplyQuestionText>Q.</MobApplyQuestionText>
                    <MobApplyText>지원 결과는 어떻게 확인할 수 있나요?</MobApplyText>
                </MobApplyQuestionWrapper>
                <MobDropDownText show={showDropDown4}>서류, 면접 결과 모두 기재해주신 연락처로 합불 여부에 대해 연락을 드릴 예정입니다!<br/><br/></MobDropDownText>
            </MobApplyTextBox>
        </MobApplyContainer>
    );
};

export default MobApplyTab;