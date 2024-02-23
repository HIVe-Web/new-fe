import React, { useState } from "react";
import styled from "styled-components";

import downArrowImage from "../../assets/images/downArrow.png"
import upArrowImage from "../../assets/images/upArrow.png"

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

const ApplyQuestionWrapper = styled.div`
    display: flex;
    width: 60vw;
    align-items: center;
    margin-top: 2.6vw;
`;

const ApplyQuestionText = styled.div`
    color: #52FF98;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.3vw;
    margin-left: 2vw;
    transition: text-align 2s ease;
`;

const ApplyText = styled.div`
    color: #ffffff;
    margin-left: 1vw;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 1.7vw;
    transition: text-align 2s ease;
`;

const ApplyArrowImage = styled.img`
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
            <ApplyTextBox expanded={showDropDown1}>
                <ApplyQuestionWrapper>
                    <ApplyQuestionText>Q.</ApplyQuestionText>
                    <ApplyText>프로젝트나 협업 경험이 없어도 지원 가능한가요?</ApplyText>
                    <ApplyArrowImage src={arrowImage1} onClick={toggleDropDown1}/>                    
                </ApplyQuestionWrapper>
                <DropDownText show={showDropDown1}>네, 창업에 대한 의지만 있다면 누구나 가능합니다!</DropDownText>
            </ApplyTextBox>

            <ApplyTextBox expanded={showDropDown2}>
                <ApplyQuestionWrapper>
                    <ApplyQuestionText>Q.</ApplyQuestionText>
                    <ApplyText>포트폴리오를 따로 제출해야 하나요?</ApplyText>
                    <ApplyArrowImage src={arrowImage2} onClick={toggleDropDown2}/>                    
                </ApplyQuestionWrapper>
                <DropDownText show={showDropDown2}>포트폴리오가 있을 시 제출 가능하나, 필수는 아닙니다.</DropDownText>
            </ApplyTextBox>

            <ApplyTextBox expanded={showDropDown3}>
                <ApplyQuestionWrapper>
                    <ApplyQuestionText>Q.</ApplyQuestionText>
                    <ApplyText>면접은 어떤 방식으로 진행되나요?</ApplyText>
                    <ApplyArrowImage src={arrowImage3} onClick={toggleDropDown3}/>                    
                </ApplyQuestionWrapper>
                <DropDownText show={showDropDown3}>지원하신 서류 바탕으로 면접이 이루어 집니다.</DropDownText>
            </ApplyTextBox>
            
            <ApplyTextBox expanded={showDropDown4}>
                <ApplyQuestionWrapper>
                    <ApplyQuestionText>Q.</ApplyQuestionText>
                    <ApplyText>지원 결과는 어떻게 확인할 수 있나요?</ApplyText>
                    <ApplyArrowImage src={arrowImage4} onClick={toggleDropDown4}/>                    
                </ApplyQuestionWrapper>
                <DropDownText show={showDropDown4}>서류, 면접 결과 모두 기재해주신 연락처로 안내해드립니다.</DropDownText>
            </ApplyTextBox>
            
        </ApplyContainer>
    );
};

export default ApplyTab;