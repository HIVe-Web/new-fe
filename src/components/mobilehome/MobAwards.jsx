import React from "react";
import styled from "styled-components";

import MobdysonLogoImage from "../../assets/images/dysonLogo.png"
import MobmetaLogoImage from "../../assets/images/metaLogo.png"
import MobmotieLogoImage from "../../assets/images/motieLogo.png"
import MobasanLogoImage from "../../assets/images/asanLogo.png"
import MobkoreasocialLogoImage from "../../assets/images/koreasocialLogo.png"
import MobcossLogoImage from "../../assets/images/cossLogo.png"
import MobhongikLogoImage from "../../assets/images/hongikLogo.png"
import MobhisuLogoImage from "../../assets/images/hisuLogo.png"

const MobResultContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12vw;
`;

const MobResultTitle = styled.div`
    color: #838BA2;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 5.5vw;
    margin-bottom: 3vw;
`;

const MobResultSubTitleText = styled.div`
    color: #70ff00;
    text-align: center;
    text-shadow: 0px 0.5vw 0.5vw rgba(0, 0, 0, 0.25);
    font-family: "Pretendard-Bold", Helvetica;
    font-weight: 700;
    font-size: 8vw;
    margin-bottom: 3vw;
`;

const MobResultDateText = styled.div`
    color: #F9F9F9;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 3.3vw;
    opacity: 0.5;
`;

const MobResultWrapper = styled.div`
    display: flex;
    margin-top: 4vw;
    align-items: center;
`;

const MobResultColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MobResultColumnBox = styled.div`
    background-color: #ffffff;
    border-radius: 1.5vw;
    width: 70vw;
    height: 60vw;
    margin: 1vw;
    text-align: center;
`;

const MobResultColumnBox2 = styled.div`
    background-color: #ffffff;
    border-radius: 1.5vw;
    width: 70vw;
    height: 80vw;
    margin: 1vw;
    text-align: center;
`;

const MobResultLogoImage = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    height: 35vw;
    width: 35vw;
    margin-top: 4vw;
    max-width: 45%;
    max-height: 50%;
`;

const MobResultBoxTitle = styled.div`
    color: #000000;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 5vw;
    font-weight: 800;
    margin-bottom: 1vw;
`;

const MobResultBoxDescription = styled.div`
    color: #000000;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 4vw;
    margin-bottom: 0.5vw;
`;

export const MobAwards = () => {
    return (
        <MobResultContainer>
            <MobResultTitle>Awards</MobResultTitle>
            <MobResultSubTitleText>HIVe 활동 성과</MobResultSubTitleText>
            <MobResultDateText>2021 ~ 2023</MobResultDateText>

            <MobResultWrapper>
                <MobResultColumnWrapper>
                    <MobResultColumnBox>
                        <MobResultLogoImage src={MobdysonLogoImage}/>
                        <MobResultBoxTitle>제임스 다이슨 어워드</MobResultBoxTitle>
                        <MobResultBoxDescription>국내전 우승 (1위)</MobResultBoxDescription>
                    </MobResultColumnBox>
                    <MobResultColumnBox>
                        <MobResultLogoImage src={MobmetaLogoImage}/>
                        <MobResultBoxTitle>META AR 콘텐츠 공모전</MobResultBoxTitle>
                        <MobResultBoxDescription>Best Creator 수상 (1위)</MobResultBoxDescription>
                    </MobResultColumnBox>
                    <MobResultColumnBox>
                        <MobResultLogoImage src={MobmotieLogoImage}/>
                        <MobResultBoxTitle>공학 페스티벌</MobResultBoxTitle>
                        <MobResultBoxDescription>산업통상자원부 장관상 (2위)</MobResultBoxDescription>
                    </MobResultColumnBox>
                    <MobResultColumnBox>
                        <MobResultLogoImage src={MobasanLogoImage}/>
                        <MobResultBoxTitle>AER 컴퍼티션</MobResultBoxTitle>
                        <MobResultBoxDescription>최우수상 수상 (2위)</MobResultBoxDescription>
                    </MobResultColumnBox>
                    <MobResultColumnBox>
                        <MobResultLogoImage src={MobkoreasocialLogoImage}/>
                        <MobResultBoxTitle>ESG 청년창업 아이디어 공모전</MobResultBoxTitle>
                        <MobResultBoxDescription>수상 (3위)</MobResultBoxDescription>
                    </MobResultColumnBox>
                    <MobResultColumnBox>
                        <MobResultLogoImage src={MobcossLogoImage}/>
                        <MobResultBoxTitle>바이오헬스 창업경진대회</MobResultBoxTitle>
                        <MobResultBoxDescription>대상 수상 (1위)</MobResultBoxDescription>
                    </MobResultColumnBox>
                    <MobResultColumnBox2>
                        <MobResultLogoImage src={MobhongikLogoImage}/>
                        <MobResultBoxTitle>2022 창업경진대회</MobResultBoxTitle>
                        <MobResultBoxDescription>3위 (1팀)</MobResultBoxDescription>
                        <br/>
                        <MobResultBoxTitle>2023 창업경진대회</MobResultBoxTitle>
                        <MobResultBoxDescription>2위 (1팀), 3위 (1팀)</MobResultBoxDescription>
                    </MobResultColumnBox2>
                    <MobResultColumnBox2>
                        <MobResultLogoImage src={MobhisuLogoImage}/>
                        <MobResultBoxTitle>2022 HISU 데모데이</MobResultBoxTitle>
                        <MobResultBoxDescription>동상 1팀</MobResultBoxDescription>
                        <br/>
                        <MobResultBoxTitle>2023 HISU 데모데이</MobResultBoxTitle>
                        <MobResultBoxDescription>최종 우승 1팀, 은상 1팀, 동상 2팀</MobResultBoxDescription>
                    </MobResultColumnBox2>
                </MobResultColumnWrapper>
            </MobResultWrapper>
        </MobResultContainer>
    )
};

export default MobAwards;