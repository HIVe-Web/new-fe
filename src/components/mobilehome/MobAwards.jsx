import React from "react";
import styled from "styled-components";

import MobdysonLogoImage from "../../assets/images/dysonLogo.png"
import MobmetaLogoImage from "../../assets/images/metaLogo.png"
import MobmotieLogoImage from "../../assets/images/motieLogo.svg"
import MobasanLogoImage from "../../assets/images/asanLogo.svg"
import MobkoreasocialLogoImage from "../../assets/images/koreasocialLogo.svg"
import MobcossLogoImage from "../../assets/images/cossLogo.svg"
import MobhongikLogoImage from "../../assets/images/hongikLogo.png"
import MobhisuLogoImage from "../../assets/images/hisuLogo.svg"
import MobhongikLogoImage2 from "../../assets/images/hongikLogo.svg"
import MobESGImage from "../../assets/images/ESGLogo.svg"
import MobDongukImage  from "../../assets/images/DongukLogo.svg"
import MobcossLogoImage2 from "../../assets/images/cossLogo2.svg"
import MobhanyangImage from "../../assets/images/hanyangLogo.svg"

const MobAwardsHeadContainer = styled.div`
  width: 100vw;
  height: 450vw;
  background: linear-gradient(180deg, #FFFFFF 0%, #5F6EE8 17%, #161658 50%, #161658 68%);

  `;

const MobResultContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 25vw;
`;

const MobResultTitle = styled.div`
    color: #757D92;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 5.5vw;
    margin-bottom: 3vw; 
`;

const MobResultSubTitleText = styled.div`
    color: #4A4DFF;
    text-align: center;
    text-shadow: 0px 0.5vw 0.5vw rgba(0, 0, 0, 0.25);
    font-family: "Pretendard-Bold", Helvetica;
    font-weight: 700;
    font-size: 8vw;
    margin-bottom: 3vw;
`;

const MobResultDateText = styled.div`
    color: #36353B;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-weight: 700;
    font-size: 4vw;
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

const MobResultRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const MobResultRowBox = styled.div`
    background-color: #FEFEFE;
    border-radius: 1vw;
    width: 44vw;
    height: 45vw;
    margin: 1vw;
    text-align: center;
`;

const MobResultColumnBox = styled.div`
    background-color: #ffffff;
    border-radius: 1.5vw;
    width: 90vw;
    height: 70vw;
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

const MobResultLogoImage = styled.object`
    aspect-ratio: 1;
    object-fit: contain;
    height: 35vw;
    width: 45vw;
    margin-top: 10vw;
    max-width: 45%;
    max-height: 50%;
`;

const MobResultLogoImage2 = styled.object`
    aspect-ratio: 1;
    object-fit: contain;
    height: 35vw;
    width: 80vw;
    margin-top: 1vw;
    max-width: 80%;
    max-height: 50%;
`;

const MobResultLogoImage3 = styled.object`
    aspect-ratio: 1;
    object-fit: contain;
    height: 35vw;
    width: 15vw;
    margin-top: 1vw;
    max-width: 80%;
    max-height: 50%;
`;

const MobResultBoxTitle = styled.div`
    color: #000000;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 5vw;
    font-weight: 800;
    margin-bottom: 1vw;
    margin-top: 1vw;
`;

const MobResultBoxTitle2 = styled.div`
    color: #000000;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 3.3vw;
    font-weight: 800;
    margin-bottom: 1vw;
    margin-top: -4vw;
`;

const MobResultBoxDescription = styled.div`
    color: #000000;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 4vw;
    margin-bottom: 0.5vw;
`;

const MobResultBoxDescription2 = styled.div`
    color: #000000;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 3vw;
    margin-bottom: 5vw;
    margin
    
`;

export const MobAwards = () => {
    return (
    <MobAwardsHeadContainer>
        <MobResultContainer>
            <MobResultTitle>지난 3년</MobResultTitle>
            <MobResultSubTitleText>HIVe 활동 성과</MobResultSubTitleText>
            <MobResultDateText>2021 ~ 2024 상반기</MobResultDateText>


            <MobResultWrapper>
                <MobResultColumnWrapper>
                     
                    <MobResultColumnBox>
                        <MobResultLogoImage data={MobdysonLogoImage} type="image/png"/>
                        <MobResultBoxTitle>제임스 다이슨 어워드</MobResultBoxTitle>
                        <MobResultBoxDescription>국내전 우승 (1위)</MobResultBoxDescription>
                    </MobResultColumnBox>

                    <MobResultColumnBox>
                        <MobResultLogoImage data={MobmetaLogoImage} type="image/png"/>
                        <MobResultBoxTitle>META AR 콘텐츠 공모전</MobResultBoxTitle>
                        <MobResultBoxDescription>Best Creator 수상 (1위)</MobResultBoxDescription>
                    </MobResultColumnBox>

                    <MobResultRowWrapper>

                        <MobResultRowBox>
                            <MobResultLogoImage2 data={MobmotieLogoImage} type=""/>
                            <MobResultBoxTitle2>공학 페스티벌</MobResultBoxTitle2>
                            <MobResultBoxDescription2>산업통상자원부 장관상 (2위)</MobResultBoxDescription2>
                        </MobResultRowBox>

                        <MobResultRowBox>
                            <MobResultLogoImage2 data={MobasanLogoImage} type=""/>
                            <MobResultBoxTitle2>AER 컴퍼티션</MobResultBoxTitle2>
                            <MobResultBoxDescription2>최우수상 수상 (2위)</MobResultBoxDescription2>
                            <MobResultBoxTitle2>아산 비영리스타트업 도전 트랙</MobResultBoxTitle2>
                            <MobResultBoxDescription2>최종선정</MobResultBoxDescription2>
                        </MobResultRowBox>

                    </MobResultRowWrapper>
                    <MobResultRowWrapper>

                        <MobResultRowBox>
                            <MobResultLogoImage2 data={MobhisuLogoImage} type=""/>
                            <MobResultBoxTitle2>2022 HISU 데모데이</MobResultBoxTitle2>
                            <MobResultBoxDescription2>동상 1팀</MobResultBoxDescription2>
                            <MobResultBoxTitle2>2023 HISU 데모데이</MobResultBoxTitle2>
                            <MobResultBoxDescription2>최종 우승 1팀, 은상 1팀, 동상 2팀</MobResultBoxDescription2>
                        </MobResultRowBox>

                        <MobResultRowBox>
                            <MobResultLogoImage3 data={MobhongikLogoImage2} type=""/>
                            <MobResultBoxTitle2><br/>2024 창업경진대회</MobResultBoxTitle2>
                            <MobResultBoxDescription2>아이디어 부문 최우수상 1팀,<br/>창의상 1팀, 장려상 1팀
                            <br/>창업실행 부문 도전상 1팀, 장려상 1팀</MobResultBoxDescription2>
                        </MobResultRowBox>

                    </MobResultRowWrapper>
                    <MobResultRowWrapper>

                        <MobResultRowBox>
                            <MobResultLogoImage2  data={MobcossLogoImage2} type=""/>
                            <MobResultBoxTitle2><br/>2024 Digital healthcare<br/>Innovative Idea Contest</MobResultBoxTitle2>
                            <MobResultBoxDescription2>최우수상 1팀, 장려상 1팀</MobResultBoxDescription2>
                        </MobResultRowBox>

                        <MobResultRowBox>
                            <MobResultLogoImage2 data={MobhanyangImage} type=""/>
                            <MobResultBoxTitle2><br/>이노폴리스캠퍼스 사업</MobResultBoxTitle2>
                            <MobResultBoxDescription2>최종 선정</MobResultBoxDescription2>
                        </MobResultRowBox>
                    </MobResultRowWrapper>      
                    <MobResultRowWrapper>

                        <MobResultRowBox>
                            <MobResultLogoImage2  data={MobESGImage} type=""/>
                            <MobResultBoxTitle2><br/>StartUp 입주경진대회</MobResultBoxTitle2>
                            <MobResultBoxDescription2>최종 선정</MobResultBoxDescription2>
                        </MobResultRowBox>

                        <MobResultRowBox>
                            <MobResultLogoImage2 data={MobDongukImage} type=""/>
                            <MobResultBoxTitle2><br/>HAI STARTUP TOWN<br/>경진대회</MobResultBoxTitle2>
                            <MobResultBoxDescription2>최종 선정</MobResultBoxDescription2>
                        </MobResultRowBox>
                    </MobResultRowWrapper>        
                    <MobResultRowWrapper>

                        <MobResultRowBox>
                            <MobResultLogoImage2  data={MobkoreasocialLogoImage} type=""/>
                            <MobResultBoxTitle2><br/><br/>ESG 청년창업 아이디어 공모전</MobResultBoxTitle2>
                            <MobResultBoxDescription2>수상 (3위)</MobResultBoxDescription2>
                        </MobResultRowBox>

                        <MobResultRowBox>
                            <MobResultLogoImage2 data={MobcossLogoImage} type=""/>
                            <MobResultBoxTitle2>바이오헬스 창업경진대회</MobResultBoxTitle2>
                            <MobResultBoxDescription2>대상 수상 (1위)</MobResultBoxDescription2>
                            <MobResultBoxTitle2>COSS 스타트업 경진대회</MobResultBoxTitle2>
                            <MobResultBoxDescription2>장려상</MobResultBoxDescription2>
                        </MobResultRowBox>
                    </MobResultRowWrapper>              

                </MobResultColumnWrapper>
            </MobResultWrapper>
        </MobResultContainer>
    </MobAwardsHeadContainer>
    )
};

export default MobAwards;