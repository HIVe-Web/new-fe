import React from "react";
import styled from "styled-components";

import ResultBackgroundImage from "../../assets/images/resultBackground.svg"

import redDotLogoImage from "../../assets/images/redDotLogo.png"
import mohwLogoImage from "../../assets/images/mohwLogo.png"
import dysonLogoImage from "../../assets/images/dysonLogo.png"
import metaLogoImage from "../../assets/images/metaLogo.png"
import sctLogoImage from "../../assets/images/sctLogo.png"
import haiLogoImage from "../../assets/images/haiLogo.png"
import hbiLogoImage from "../../assets/images/hbiLogo.png"
import motieLogoImage from "../../assets/images/motieLogo.png"
import asanLogoImage from "../../assets/images/asanLogo.png"
import socialEnterpriseLogoImage from "../../assets/images/socialEnterpriseLogo.png"
import husAsLogoImage from "../../assets/images/huAsLogo.png"
import cossLogoImage from "../../assets/images/cossLogo.png"
import moeLogoImage from "../../assets/images/moeLogo.png"
import hisuLogoImage from "../../assets/images/hisuLogo.png"
import hongikLogoImage from "../../assets/images/hongikLogo.png"
import coss2LogoImage from "../../assets/images/coss2Logo.png"

const ResultContainer = styled.div`
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 0%,  /* 상단 부분 연하게 */
        rgba(255, 255, 255, 0) 10%, /* 상단 부분에서 완전 투명 */
        rgba(255, 255, 255, 0) 85%, /* 하단 부분에서 완전 투명 */
        rgba(255, 255, 255, 1) 100% /* 하단 부분 연하게 */
      ), 
      url(${ResultBackgroundImage});
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 165vw;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2vw;
`;


const ResultPolygon = styled.img`
    position: absolute;
    mix-blend-mode: soft-light;    
    width: 40vw;
    height: 50vw;
    bottom: 50vw;
`;

const ResultTitle = styled.div`
    color: #000000;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.6vw;
    text-align: center;
    margin-bottom: 1.2vw;
`;

const ResultSubTitleText = styled.div`
    color: #4A4DFF;
    text-align: center;
    text-shadow: 0vw; 0.2vw; 0.2vw; rgba(0, 0, 0, 0.25);
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 3.5vw;
    margin-bottom: 1.5vw;
`;

const ResultDateText = styled.div`
    color: #FFFFFF;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2vw;
`;

const ResultWrapper = styled.div`
    display: flex;
    margin-top: 4vw;
    align-items: center;
`;

const ResultColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ResultRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ResultRowBox = styled.div`
    background-color: #FEFEFE;
    border-radius: 1vw;
    width: 29.9vw;
    height: 20vw;
    margin: 1vw;
    text-align: center;
`;

const ResultRowBox2 = styled.div`
    background-color: #FEFEFE;
    border-radius: 1vw;
    width: 20vw;
    height: 20vw;
    margin: 0.5vw;
    text-align: center;
`;

const ResultLogoImage = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    height: 15vw;
    width: 15vw;
    max-width: 45%;
    max-height: 50%;
    margin-top: 1.8vw;
`;

const ResultLogoImage2 = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    height: 12vw;
    width: 18vw;
    max-width: 70%;
    max-height: 50%;
`;

const ResultLogoImage3 = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    height: 15vw;
    width: 15vw;
    max-width: 80%;
    max-height: 55%;
    margin-top: 1.7vw;
    margin-bottom: 0.7vw;
`;

const ResultBoxTitle = styled.div`
    color: #000000;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 1.8vw;
    margin-bottom: 1vw;
`;

const ResultBoxTitle2 = styled.div`
    color: #000000;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 1.4vw;
    margin-bottom: 0.35vw;
`;

const ResultBoxDescription = styled.div`
    color: #000000;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 1.6vw;
    margin-bottom: 0.5vw;
`;

const ResultBoxDescription2 = styled.div`
    color: #000000;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 1.2vw;
    margin-bottom: 1.5vw;
`;

export const Result = () => {
    return (
        <ResultContainer>
            <ResultTitle>
                지난 3년
            </ResultTitle>
            <ResultSubTitleText>
                HIVe 활동 성과
            </ResultSubTitleText>
            <ResultDateText>
                2021 - 2024 싱반기
            </ResultDateText>

            <ResultWrapper>
                <ResultColumnWrapper>

                    <ResultRowWrapper>
                        <ResultRowBox>
                            <ResultLogoImage src={redDotLogoImage} />
                            <ResultBoxTitle>Red Dot Award:<br/>Design Concept 2024</ResultBoxTitle>
                        </ResultRowBox>
                        <ResultRowBox>
                            <ResultLogoImage src={mohwLogoImage} />
                            <ResultBoxTitle>국민행복 서비스 발굴•창업 경진대회</ResultBoxTitle>
                            <ResultBoxDescription>대상 (보건복지부장관상)</ResultBoxDescription>
                        </ResultRowBox>
                    </ResultRowWrapper>

                    <ResultRowWrapper>
                        <ResultRowBox>
                            <ResultLogoImage src={dysonLogoImage} />
                            <ResultBoxTitle>제임스 다이슨 어워드</ResultBoxTitle>
                            <ResultBoxDescription>국내전 우승 (1위)</ResultBoxDescription>
                        </ResultRowBox>
                        <ResultRowBox>
                            <ResultLogoImage src={metaLogoImage} />
                            <ResultBoxTitle>META AR 콘텐츠 공모전</ResultBoxTitle>
                            <ResultBoxDescription>Best Creator 수상 (1위)</ResultBoxDescription>
                        </ResultRowBox>
                    </ResultRowWrapper>

                    <ResultRowWrapper>
                        <ResultRowBox2>
                            <ResultLogoImage3 src={sctLogoImage} />
                            <ResultBoxTitle2>StartUp 입주경진대회</ResultBoxTitle2>
                            <ResultBoxDescription2>최종 선정</ResultBoxDescription2>
                        </ResultRowBox2>
                        <ResultRowBox2>
                            <ResultLogoImage3 src={haiLogoImage} />
                            <ResultBoxTitle2>HAI STARTUP TOWN<br />경진대회</ResultBoxTitle2>
                            <ResultBoxDescription2>최종 선정</ResultBoxDescription2>
                        </ResultRowBox2>
                        <ResultRowBox2>
                            <ResultLogoImage3 src={hbiLogoImage} />
                            <ResultBoxTitle2>이노폴리스캠퍼스 사업</ResultBoxTitle2>
                            <ResultBoxDescription2>최종 선정</ResultBoxDescription2>
                        </ResultRowBox2>
                    </ResultRowWrapper>

                    <ResultRowWrapper>
                        <ResultRowBox2>
                            <ResultLogoImage3 src={motieLogoImage} />
                            <ResultBoxTitle2>공학 페스티벌</ResultBoxTitle2>
                            <ResultBoxDescription2>산업통상자원부 장관상 (2위)</ResultBoxDescription2>
                        </ResultRowBox2>

                        <ResultRowBox2>
                            <ResultLogoImage2 src={asanLogoImage} />
                            <ResultBoxTitle2>AER 컴피티션</ResultBoxTitle2>
                            <ResultBoxDescription2>최우수상 수상 (2위)</ResultBoxDescription2>
                            <ResultBoxTitle2>아산 비영리스타트업 도전트랙</ResultBoxTitle2>
                            <ResultBoxDescription2>최종 선정</ResultBoxDescription2>
                        </ResultRowBox2>

                        <ResultRowBox2>
                            <ResultLogoImage3 src={socialEnterpriseLogoImage} />
                            <ResultBoxTitle2>ESG 창업 아이디어 공모전</ResultBoxTitle2>
                            <ResultBoxDescription2>수상 (3위)</ResultBoxDescription2>
                        </ResultRowBox2>
                    </ResultRowWrapper>

                    <ResultRowWrapper>
                        <ResultRowBox2>
                            <ResultLogoImage3 src={husAsLogoImage} />
                            <ResultBoxTitle2>2024 인문사회통합성과<br/>확산센터 아이디어 공모전</ResultBoxTitle2>
                            <ResultBoxDescription2>은상</ResultBoxDescription2>
                        </ResultRowBox2>

                        <ResultRowBox2>
                            <ResultLogoImage2 src={cossLogoImage} />
                            <ResultBoxTitle2>바이오헬스 창업경진대회</ResultBoxTitle2>
                            <ResultBoxDescription2>대상 수상 (1위)</ResultBoxDescription2>
                            <ResultBoxTitle2>COSS 스타트업 경진대회</ResultBoxTitle2>
                            <ResultBoxDescription2>장려상</ResultBoxDescription2>
                        </ResultRowBox2>

                        <ResultRowBox2>
                            <ResultLogoImage3 src={moeLogoImage} />
                            <ResultBoxTitle2>학생 창업유망팀 300+</ResultBoxTitle2>
                            <ResultBoxDescription2>최종 선정</ResultBoxDescription2>
                        </ResultRowBox2>
                    </ResultRowWrapper>

                    <ResultRowWrapper>
                        <ResultRowBox2>
                            <ResultLogoImage2 src={hisuLogoImage} />
                            <ResultBoxTitle2>2022 HISU 데모데이</ResultBoxTitle2>
                            <ResultBoxDescription2>동상 1팀</ResultBoxDescription2>
                            <ResultBoxTitle2>2023 HISU 데모데이</ResultBoxTitle2>
                            <ResultBoxDescription2>최종 우승 1팀, 은상 1팀, 동상 2팀</ResultBoxDescription2>
                        </ResultRowBox2>

                        <ResultRowBox2>
                            <ResultLogoImage2 src={hongikLogoImage} style={{marginTop: '1vw'}}/>
                            <ResultBoxTitle2>2024 창업경진대회</ResultBoxTitle2>
                            <ResultBoxDescription2>아이디어 부문 최우수상 1팀,<br/>창의상 1팀, 장려상 1팀<br/>창업 실행 부문 도전상 1팀, 장려상 1팀</ResultBoxDescription2>
                        </ResultRowBox2>

                        <ResultRowBox2>
                            <ResultLogoImage2 src={coss2LogoImage} style={{marginTop: '1.5vw'}}/>
                            <ResultBoxTitle2>2024 Digital healthcare<br/>Innovation Idea Contest</ResultBoxTitle2>
                            <ResultBoxDescription2 style={{marginTop: '1vw'}}>최우수상 1팀, 장려상 1팀</ResultBoxDescription2>
                        </ResultRowBox2>
                    </ResultRowWrapper>

                </ResultColumnWrapper>
            </ResultWrapper>
        </ResultContainer>
    )
};

export default Result;