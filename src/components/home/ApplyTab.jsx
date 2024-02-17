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
    width: 60vw;
    position: relative;
    transition: min-height 0.5s ease;
    min-height: ${props => props.expanded ? "15vw" : "10vw"};
`;

const ApplyQuestionWrapper = styled.div`
    display: flex;
    width: 60vw;
    align-items: center;
    margin-top: 2.3vw;
`;

const ApplyQuestionText = styled.div`
    color: #70ff00;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.8vw;
    margin-left: 2vw;
    transition: text-align 2s ease;
`;

const ApplyText = styled.div`
    color: #ffffff;
    margin-left: 1vw;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2vw;
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
    margin-left: 6svw;
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
        <ApplyContainer>
            <ApplyTextBox expanded={showDropDown1}>
                <ApplyQuestionWrapper>
                    <ApplyQuestionText>Q.</ApplyQuestionText>
                    <ApplyText>프로젝트나 협업 경험이 없어도 지원 가능한가요?</ApplyText>
                    <ApplyArrowImage src={arrowImage1} onClick={toggleDropDown1}/>                    
                </ApplyQuestionWrapper>
                <DropDownText show={showDropDown1}>네, 창업에 대한 의지만 있다면 누구나 가능합니다!</DropDownText>
            </ApplyTextBox>
        </ApplyContainer>
    );
};

export default ApplyTab;