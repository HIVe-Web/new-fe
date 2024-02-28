import React, { useState } from "react";
import styled, { css } from "styled-components";

import downArrowImage from "../../assets/images/downArrow.png";
import upArrowImage from "../../assets/images/upArrow.png";

const ApplyContainer = styled.div`
    background-color: #1C1C1C;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 3vw;
`;

const ApplyTextBox = styled.div`
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

const ApplyQuestionWrapper = styled.div`
display: flex;
width: 60vw;
align-items: center;
cursor: pointer;
`;

const ApplyQuestionText = styled.div`
    color: #52FF98;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.4vw;
    margin-left: 0.5vw;
`;

const ApplyText = styled.div`
    color: #ffffff;
    margin-left: 1vw;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 1.9vw;
`;

const ApplyArrowImage = styled.img`
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


export const ApplyTab = () => {
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
        <ApplyContainer>
            <ApplyTextBox expanded={showDropDown1} onClick={toggleDropDown1}>
                <ApplyQuestionWrapper>
                    <ApplyQuestionText>Q.</ApplyQuestionText>
                    <ApplyText>프로젝트나 협업 경험이 없어도 지원 가능한가요?</ApplyText>
                    <ApplyArrowImage src={arrowImage1} />                    
                </ApplyQuestionWrapper>
                <DropDownText show={showDropDown1}><br/>네, 창업에 대한 의지만 있다면 누구나 지원 가능합니다. 
                <br/>하이브는 열정을 가지고 진심어린 마음으로 창업 경험을 쌓고 싶은 분들을 기다리고 있습니다!<br/></DropDownText>
            </ApplyTextBox>

            <ApplyTextBox expanded={showDropDown2} onClick={toggleDropDown2}>
                <ApplyQuestionWrapper>
                    <ApplyQuestionText>Q.</ApplyQuestionText>
                    <ApplyText>포트폴리오를 따로 제출해야 하나요?</ApplyText>
                    <ApplyArrowImage src={arrowImage2} />                    
                </ApplyQuestionWrapper>
                <DropDownText show={showDropDown2}><br/>포트폴리오의 경우 필수는 아니지만 상황에 따라 제출하실 수 있습니다.<br/>
                포트폴리오가 있으신 분들은 본인의 역량과 경험을 더욱 잘 보여줄 수 있으며, 없으신 분들은 <br/>
                서류에서 창업에 대한 의지와 하이브 활동에 대한 열정을 중점으로 본인을 어필해보세요!</DropDownText>
            </ApplyTextBox>

            <ApplyTextBox expanded={showDropDown3} onClick={toggleDropDown3}>
                <ApplyQuestionWrapper>
                    <ApplyQuestionText>Q.</ApplyQuestionText>
                    <ApplyText>면접은 어떤 방식으로 진행되나요?</ApplyText>
                    <ApplyArrowImage src={arrowImage3} />                    
                </ApplyQuestionWrapper>
                <DropDownText show={showDropDown3}><br/>면접은 대면으로 진행되며 작성해주신 서류 항목 중심으로 질의응답이 이루어집니다!</DropDownText>
            </ApplyTextBox>
            
            <ApplyTextBox expanded={showDropDown4} onClick={toggleDropDown4}>
                <ApplyQuestionWrapper>
                    <ApplyQuestionText>Q.</ApplyQuestionText>
                    <ApplyText>지원 결과는 어떻게 확인할 수 있나요?</ApplyText>
                    <ApplyArrowImage src={arrowImage4} />                    
                </ApplyQuestionWrapper>
                <DropDownText show={showDropDown4}><br/>서류, 면접 결과 모두 기재해주신 연락처로 심사 결과에 대해 연락을 드릴 예정입니다!</DropDownText>
            </ApplyTextBox>
            
        </ApplyContainer>
    );
};

export default ApplyTab;