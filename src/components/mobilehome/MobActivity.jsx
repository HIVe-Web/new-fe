import React from "react";
import styled from "styled-components";

import MobsessionImage from "../../assets/images/session.png"
import MobprojectImage from "../../assets/images/project.png"
import MobeducationImage from "../../assets/images/education.png"
import MobpresentationImage from "../../assets/images/presentation.png"
import MobhackathonImage from "../../assets/images/hackathon.png"
import MobnetworkingImage from "../../assets/images/networking.png"

import ActivityBackgroundImage from "../../assets/images/ActivityBackground.svg"

const MobActivityHeadContainer = styled.div`
  background: url(${ActivityBackgroundImage});
  width: 100vw;
  height: 170vw;
  background-size: cover;
`;

const MobActivityContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 30vw;
`;

const MobActivityTitle = styled.div`
    color: #838BA2;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 5.5vw;
    margin-bottom: 3vw;
`;

const MobActivitySubTitle = styled.div`
    color: #4A4DFF;
    text-align: center;
    text-shadow: 0px 0.5vw 0.5vw rgba(0, 0, 0, 0.25);
    font-family: "Pretendard-Bold", Helvetica;
    font-weight: 700;
    font-size: 8vw;
    margin-bottom: 3.2vw;
`;

// const MobActivityDescription = styled.div`
//     color: #6E6E6E; 
//     font-family: "Pretendard-SemiBold", Helvetica;
//     text-align: center;
//     line-height: 1.5;
//     font-size: 4vw;
//     margin-bottom: 11vw;
// `;

const MobActivityWrapper = styled.div`
    display: flex;
    margin-top: 1vw;
    align-items: center;
`;

const MobActivityColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MobActivityRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const MobActivityBoxContainer = styled.div`
    height: 38vw;
    width: 44vw;
    margin: 1.2vw;
`;

const MobActivityImage = styled.img`
    object-position: center;
    border-radius: 1vw;
    height: 38vw;
    width: 44vw;
    align-self: center;
    position: absolute;
`;

const MobActivityRowBox = styled.div`
    background: linear-gradient(180deg, rgba(0,0,0,0.71) 0%, rgba(0,0,0,0) 100%);
    border-radius: 1vw;
    height: 38vw;
    width: 44vw;
    position: absolute;
`;

const MobActivityBoxTitle = styled.div`
    color: #ffffff;
    font-family: "Pretendard-Medium", Helvetica;
    font-weight: 500;
    font-size: 3.5vw;
    white-space: nowrap;
    margin-left: 2.4vw;
    margin-top: 2.4vw;
    margin-bottom: 0.5vw;
`;

const MobActivityBoxDesciption = styled.div`
    color: #adadad;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 2.4vw;
    margin-left: 2.4vw;
`;

export const MobActivity = () => {
    return (
    <MobActivityHeadContainer>
        <MobActivityContainer>
            <MobActivityTitle>Activity</MobActivityTitle>
            <MobActivitySubTitle>주요 활동</MobActivitySubTitle>
            <MobActivityWrapper>

                <MobActivityColumnWrapper>
                    <MobActivityRowWrapper>
                        <MobActivityBoxContainer>
                            <MobActivityImage src={MobsessionImage} />
                            <MobActivityRowBox>
                                <MobActivityBoxTitle>정기 세션</MobActivityBoxTitle>
                                <MobActivityBoxDesciption>Regular Session</MobActivityBoxDesciption>
                            </MobActivityRowBox>
                        </MobActivityBoxContainer>
                        <MobActivityBoxContainer>
                            <MobActivityImage src={MobprojectImage} />
                            <MobActivityRowBox>
                                <MobActivityBoxTitle>창업 프로젝트 진행</MobActivityBoxTitle>
                                <MobActivityBoxDesciption>Start-up project</MobActivityBoxDesciption>
                            </MobActivityRowBox>
                        </MobActivityBoxContainer>
                    </MobActivityRowWrapper>
                    <MobActivityRowWrapper>
                        <MobActivityBoxContainer>
                            <MobActivityImage src={MobeducationImage} />
                            <MobActivityRowBox>
                                <MobActivityBoxTitle>창업 교육 · 멘토링</MobActivityBoxTitle>
                                <MobActivityBoxDesciption>Start-up education</MobActivityBoxDesciption>
                            </MobActivityRowBox>
                        </MobActivityBoxContainer>
                        <MobActivityBoxContainer>
                            <MobActivityImage src={MobpresentationImage} />
                            <MobActivityRowBox>
                                <MobActivityBoxTitle>팀별 성과 발표</MobActivityBoxTitle>
                                <MobActivityBoxDesciption>Team presentation</MobActivityBoxDesciption>
                            </MobActivityRowBox>
                        </MobActivityBoxContainer>
                    </MobActivityRowWrapper>
                    <MobActivityRowWrapper>
                        <MobActivityBoxContainer>
                            <MobActivityImage src={MobhackathonImage} />
                            <MobActivityRowBox>
                                <MobActivityBoxTitle>해커톤</MobActivityBoxTitle>
                                <MobActivityBoxDesciption>Hackathon</MobActivityBoxDesciption>
                            </MobActivityRowBox>
                        </MobActivityBoxContainer>
                        <MobActivityBoxContainer>
                            <MobActivityImage src={MobnetworkingImage} />
                            <MobActivityRowBox>
                                <MobActivityBoxTitle>네트워킹</MobActivityBoxTitle>
                                <MobActivityBoxDesciption>Networking</MobActivityBoxDesciption>
                            </MobActivityRowBox>
                        </MobActivityBoxContainer>
                    </MobActivityRowWrapper>
                </MobActivityColumnWrapper>
            </MobActivityWrapper>
        </MobActivityContainer>
    </MobActivityHeadContainer>
    )
};

export default MobActivity;