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
    align-items: center;
    display: flex;
    background-color: #2a2a2a;
    min-height: 10vw;
    width: 70vw;
    margin-top: 2vw;
    position: relative;
`;

const ApplyQuestionText = styled.div`
    color: #70ff00;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.8vw;
    text-align: center;
    margin-left: 2vw;
`;

const ApplyText = styled.div`
    color: #ffffff;
    margin-left: 1vw;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2vw;
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

const DropDownContent = styled.div`
    background-color: #2a2a2a;
    align-items: center;
    border-radius: 1vw;
    width: 70vw;
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
            <ApplyTextBox>
                <ApplyQuestionText>Q.</ApplyQuestionText>
                <ApplyText>프로젝트나 협업 경험이 없어도 지원 가능한가요?</ApplyText>
                <ApplyArrowImage src={arrowImage1} onClick={toggleDropDown1} />
            </ApplyTextBox>
            <DropDownContent show={showDropDown1}>
                <DropDownText>네, 창업에 대한 의지만 있다면 누구나 가능합니다!</DropDownText>
            </DropDownContent>

            <ApplyTextBox>
                <ApplyQuestionText>Q.</ApplyQuestionText>
                <ApplyText>포트폴리오를 따로 제출해야 하나요?</ApplyText>
                <ApplyArrowImage src={arrowImage2} onClick={toggleDropDown2} />
            </ApplyTextBox>
            <DropDownContent show={showDropDown2}>
                <DropDownText>포트폴리오가 있을 시 제출 가능하나, 필수는 아닙니다.</DropDownText>
            </DropDownContent>

            <ApplyTextBox>
                <ApplyQuestionText>Q.</ApplyQuestionText>
                <ApplyText>면접은 어떤 방식으로 진행되나요?</ApplyText>
                <ApplyArrowImage src={arrowImage3} onClick={toggleDropDown3} />
            </ApplyTextBox>
            <DropDownContent show={showDropDown3}>
                <DropDownText>지원하신 서류 바탕으로 면접이 이루어 집니다.</DropDownText>
            </DropDownContent>

            <ApplyTextBox>
                <ApplyQuestionText>Q.</ApplyQuestionText>
                <ApplyText>지원 결과는 어떻게 확인할 수 있나요?</ApplyText>
                <ApplyArrowImage src={arrowImage4} onClick={toggleDropDown4} />
            </ApplyTextBox>
            <DropDownContent show={showDropDown4}>
                <DropDownText>서류, 면접 결과 모두 기재해주신 연락처로 안내드립니다.</DropDownText>
            </DropDownContent>
        </ApplyContainer>
    );
};

export default ApplyTab;