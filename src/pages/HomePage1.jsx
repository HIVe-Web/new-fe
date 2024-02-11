import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
    background-color: #000000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    & .div {
        background-color: #000000;
        height: 982px;
        position: relative;
        width: 1512px;
    }

    & .text-wrapper {
        color: #ffffff;
        font-family: "Sarabun-Bold", Helvetica;
        font-size: 106.3px;
        font-weight: 700;
        left: 1031px;
        letter-spacing: 0;
        line-height: 124.7px;
        position: absolute;
        text-align: center;
        top: 263px;
        white-space: nowrap;
        width: 227px;
    }

    & .p {
        color: #ffffff;
        font-family: "Pretendard-Bold", Helvetica;
        font-size: 47.7px;
        font-weight: 700;
        left: 189px;
        letter-spacing: 0;
        line-height: 83.9px;
        position: absolute;
        text-align: center;
        top: 546px;
        width: 1134px;
    }

    & .text-wrapper-2{
        color: #828ba1;
        font-family: "Pretendard-Bold", Helvetica;
        font-size: 34.1px;
        font-weight: 700;
        left: 90px;
        leter-spacing: 0;
        line-height: 83.3px;
        position: absolute;
        text-align: center;
        top: 390px;
        width: 1331px;
    }
    
    & .overlap-group{
        height: 137px;
        left: 253px;
        position: absolute;
        top: 249px;
        width: 754px;
    }

    & .text-wrapper-3 {
        color: #ffffff;
        font-family: "Pretendard-Bold", Helvetica;
        font-size: 42.5px;
        font-weight: 700;
        left: 337px;
        letter-spacing: 0;
        line-height: 104px;
        position: absolute;
        text-align: center;
        top: 0;
        white-space: nowrap;
    }

    & .text-wrapper-4 {
        color: #ffffff;
        font-family: "Pretendard-Bold", Helvetica;
        font-size: 75.6px;
        font-weigth: 700;
        left: 0;
        letter-spacing: 0;
        line-height: 88.7px;
        position: absolute;
        text-align: center;
        top: 42px;
        white-space: nowrap;
        width: 754px;
    }
`;

export const HomePage1 = () => {
    return (
        <StyledSection>
            <div className="div">
                <div className="text-wrapper">HIVe</div>
                <p className="p">
                하이브는 창의적인 아이디어와 열정을 가진 학생들이 모여 <br />
                혁신적인 사업을 기획하고 실행하는 벤처창업단체입니다.
                </p>
                <p className="text-wrapper-2">
                    * 중소벤처기업부의 인가를 받아 공식적으로 학생처의 지원을 받는 교내 벤처창업기관
                </p>
                <div className="overlap-group">
                    <div className="text-wrapper-3">*</div>
                    <div className="text-wrapper-4">홍익대학교 벤처창업기관</div>
               </div>
            </div>
        </StyledSection>
    )
}

export default HomePage1