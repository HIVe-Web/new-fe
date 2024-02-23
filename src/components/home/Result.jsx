import React from "react";
import styled from "styled-components";

import lightBackImage from "../../assets/images/lightBack.png"
import dysonLogoImage from "../../assets/images/dysonLogo.png"
import metaLogoImage from "../../assets/images/metaLogo.png"
import motieLogoImage from "../../assets/images/motieLogo.svg"
import asanLogoImage from "../../assets/images/asanLogo.svg"
import koreasocialLogoImage from "../../assets/images/koreasocialLogo.svg"
import cossLogoImage from "../../assets/images/cossLogo.svg"
import hongikLogoImage from "../../assets/images/hongikLogo.png"
import hisuLogoImage from "../../assets/images/hisuLogo.png"

const ResultContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12vw;
`;

const ResultPolygon = styled.img`
    position: absolute;
    mix-blend-mode: soft-light;    
    width: 40vw;
    height: 50vw;
    bottom: 50vw;
`;

const ResultTitle = styled.div`
    color: #838BA2;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 3.4vw;
    text-align: center;
    margin-bottom: 1.5vw;
`;

const ResultSubTitleText = styled.div`
    color: #52FF98;
    text-align: center;
    text-shadow: 0vw; 0.2vw; 0.2vw; rgba(0, 0, 0, 0.25);
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 4vw;
    margin-bottom: 1.5vw;
`;

const ResultDateText = styled.div`
    color: #ffffff;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.3vw;
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
    background-color: #ffffff;
    border-radius: 1.5vw;
    width: 29.9vw;
    height: 20vw;
    margin: 1vw;
    text-align: center;
`;

const ResultRowBox2 = styled.div`
    background-color: #ffffff;
    border-radius: 1.5vw;
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
    margin-top: 0.5vw;
`;

const ResultLogoImage2 = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    height: 11vw;
    width: 11vw;
    max-width: 50%;
    max-height: 50%;
`;

const ResultLogoImage3 = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    height: 15vw;
    width: 15svw;
    max-width: 55%;
    max-height: 55%;
    margin-top: 0.7vw;
    margin-bottom: 0.7vw;
`;

const ResultBoxTitle = styled.div`
    color: #000000;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.1vw;
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
            <ResultPolygon src={lightBackImage}/>
            <ResultTitle>
                지난 3년
            </ResultTitle>
            <ResultSubTitleText>
                HIVe 활동 성과
            </ResultSubTitleText>
            <ResultDateText>
                2021 - 2023
            </ResultDateText>

            <ResultWrapper>
                <ResultColumnWrapper>
                <ResultRowWrapper>
                    <ResultRowBox>
                        <ResultLogoImage src={dysonLogoImage}/>
                        <ResultBoxTitle>제임스 다이슨 어워드</ResultBoxTitle>
                        <ResultBoxDescription>국내전 우승 (1위)</ResultBoxDescription>
                    </ResultRowBox>
                    <ResultRowBox>
                        <ResultLogoImage src={metaLogoImage}/>
                        <ResultBoxTitle>META AR 콘텐츠 공모전</ResultBoxTitle>
                        <ResultBoxDescription>Best Creator 수상 (1위)</ResultBoxDescription>
                    </ResultRowBox>
                </ResultRowWrapper>
                <ResultRowWrapper>
                    <ResultRowBox2>
                        <ResultLogoImage3 src={motieLogoImage} />
                        <ResultBoxTitle2>공학 페스티벌</ResultBoxTitle2>
                        <ResultBoxDescription2>산업통상자원부 장관상 (2위)</ResultBoxDescription2>
                    </ResultRowBox2>
                    <ResultRowBox2>
                        <ResultLogoImage3 src={asanLogoImage}/>
                        <ResultBoxTitle2>AER 컴퍼티션</ResultBoxTitle2>
                        <ResultBoxDescription2>최우수상 수상 (2위)</ResultBoxDescription2>
                    </ResultRowBox2>
                    <ResultRowBox2>
                        <ResultLogoImage3 src={koreasocialLogoImage}/>
                        <ResultBoxTitle2>ESG 청년창업 아이디어 공모전</ResultBoxTitle2>
                        <ResultBoxDescription2>우수상 수상 (3위)</ResultBoxDescription2>
                    </ResultRowBox2>
                </ResultRowWrapper>
                <ResultRowWrapper>
                    <ResultRowBox2>
                        <ResultLogoImage3 src={cossLogoImage}/>
                        <ResultBoxTitle2>바이오헬스 창업경진대회</ResultBoxTitle2>
                        <ResultBoxDescription2>대상 수상 (1위)</ResultBoxDescription2>
                    </ResultRowBox2>

                    <ResultRowBox2>
                        <ResultLogoImage2 src={hongikLogoImage}/>
                        <ResultBoxTitle2>2022 창업경진대회</ResultBoxTitle2>
                        <ResultBoxDescription2>3위 1팀</ResultBoxDescription2>
                        <ResultBoxTitle2>2023 창업경진대회</ResultBoxTitle2>
                        <ResultBoxDescription2>2위 1팀, 3위 1팀</ResultBoxDescription2>
                    </ResultRowBox2>

                    <ResultRowBox2>
                        <ResultLogoImage2 src={hisuLogoImage}/>
                        <ResultBoxTitle2>2022 HISU 데모데이</ResultBoxTitle2>
                        <ResultBoxDescription2>동상 1팀</ResultBoxDescription2>
                        <ResultBoxTitle2>2023 HISU 데모데이</ResultBoxTitle2>
                        <ResultBoxDescription2>최종 우승 1팀, 은상 1팀, 동상 2팀</ResultBoxDescription2>
                    </ResultRowBox2>
                </ResultRowWrapper>
                </ResultColumnWrapper>
            </ResultWrapper>
        </ResultContainer>
    )
};

export default Result;