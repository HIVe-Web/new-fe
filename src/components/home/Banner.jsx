import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const sizes = {
  tablet: '768px',
  desktop: '1024px',
};

const media = {
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const SectionWrapper = styled.div`
  background: linear-gradient(180deg, rgb(9, 115, 238) 0%, rgba(9, 115, 238, 0) 100%);
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;

  @media ${media.desktop} {
    height: 100%;
    width: 100%;
  }
`;

const OverlapGroup = styled.div`
  width: 90%;
  max-width: 1300px;
  position: relative;
  margin-top: 20px;

  @media ${media.desktop} {
    height: 808px;
  }
`;

const Image = styled.div`
  background-image: url(./image.png);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: auto;
  position: relative;

  @media ${media.desktop} {
    height: 769px;
    top: 0;
    left: 310px;
    width: 1300px;
  }
`;

const HeadingDEPROMEET = styled.div`
  color: #ffffff;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 4vw;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;

  @media ${media.desktop} {
    font-size: 40px;
    position: absolute;
    top: 156px;
    left: 50%;
    transform: translateX(-50%);
    width: 443px;
    height: 81px;
  }
`;

const IT = styled.p`
  color: #e6edf8;
  font-family: "Pretendard-Medium", Helvetica;
  font-size: 2vw;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;

  @media ${media.desktop} {
    font-size: 20px;
    position: absolute;
    top: 260px;
    left: 50%;
    transform: translateX(-50%);
    width: 473px;
    height: 54px;
  }
`;

const DivCss = styled.div`
  background-color: #070814;
  margin-top: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${media.desktop} {
    position: absolute;
    top: 358px;
    left: 50%;
    transform: translateX(-50%);
    width: 686px;
    height: 194px;
  }
`;

// 이하의 Span, TextWrapper 등은 스타일 구성에 따라 조정 필요

const Button = styled.button`
  all: unset;
  background-color: #343744;
  color: #a5b2c5;
  font-family: "Pretendard-Medium", Helvetica;
  font-size: 18px;
  text-align: center;
  padding: 15px 30px;
  margin-top: 40px;
  cursor: pointer;

  @media ${media.desktop} {
    position: absolute;
    top: 572px;
    left: 50%;
    transform: translateX(-50%);
    width: 686px;
    height: 54px;
  }
`;

// 미디어 쿼리 및 반응형 디자인을 고려하여 나머지 컴포넌트 스타일을 조정

export const Banner = () => {
  return (
    <SectionWrapper>
      <OverlapGroup>
        <Image />
        <HeadingDEPROMEET>HONGIK Venture Club</HeadingDEPROMEET>
        <IT>
        <br></br>
          홍익대학교 벤처창업기관 하이브는 창업 기획, 교육, 네트워킹 등의
          다양한 행사를 통해 실전 창업을 배우고 활용할 수 있는 유일한 홍익대학교 창업기관입니다.
        </IT>
        <DivCss>
          {/* 타이머와 관련된 컴포넌트들의 배치 및 스타일링은 여기에 추가 */}
        </DivCss>
        <Button>14기 지원하기</Button>
      </OverlapGroup>
    </SectionWrapper>
  );
};

export default Banner;