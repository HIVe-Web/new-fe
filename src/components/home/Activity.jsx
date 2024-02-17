import React from "react";
import styled from "styled-components";

import sessionImage from "../../assets/images/session.png"
import projectImage from "../../assets/images/project.png"
import educationImage from "../../assets/images/education.png"
import presentationImage from "../../assets/images/presentation.png"
import hackathonImage from "../../assets/images/hackathon.png"
import networkingImage from "../../assets/images/networking.png"

const ActivityContainer = styled.div`
    background-color: #1C1C1C;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 10vw;
`;

const ActivityTitle = styled.div`
    color: #838BA2;
    text-align: center;
    font-family: Pretendard-Bold, sans-serif;
    font-size: 3.4vw;
    margin-bottom: 1vw;
`;

const ActivitySubTitle = styled.div`
    color: #70ff00;
    text-align: center;
    text-shadow: 0px 0.5vw 0.5vw rgba(0, 0, 0, 0.25);
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 4vw;
    margin-bottom: 1vw;
`;

const ActivityDescription = styled.div`
    color: #ffffff;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.4vw;
`;

const ActivityWrapper = styled.div`
    display: flex;
    margin-top: 8vw;
    align-items: center;
`;

const ActivityColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ActivityRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const ActivityBoxContainer = styled.div`
    height: 20vw;
    width: 25vw;
    margin: 1vw;
    
`;

const ActivityRowBox = styled.div`
    background: linear-gradient(180deg, rgba(0,0,0,0.71) 0%, rgba(0,0,0,0) 100%);
    border-radius: 1vw;
    height: 20vw;
    width: 25vw;
    margin: 1vw;
    position: absolute;
`;

const ActivityImage = styled.img`
    object-position: center;
    border-radius: 1vw;
    height: 20vw;
    width: 25vw;
    margin: 1vw;
    align-self: center;
    position: absolute;
`;

const ActivityBoxTitle = styled.div`
    color: #ffffff;
    font-family: "Pretendard-Medium", Helvetica;
    font-weight: 700;
    font-size: 2.3vw;
    white-space: nowrap;
    margin-left: 2.4vw;
    margin-top: 2.4vw;
    margin-bottom: 0.5vw;
`;

const ActivityBoxDesciption = styled.div`
    color: #adadad;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 1.4vw;
    margin-left: 2.4vw;
`;

export const Activity = () => {
    return (
        <ActivityContainer>
            <ActivityTitle>Activity</ActivityTitle>
            <ActivitySubTitle>주요 활동</ActivitySubTitle>
            <ActivityDescription>HIVe 에서는 서비스 및 제품, 기술 등 다양한 분야의 창업 활동을 하고 있습니다.</ActivityDescription>
            <ActivityWrapper>
                <ActivityColumnWrapper>
                    <ActivityRowWrapper>
                        <ActivityBoxContainer>
                            <ActivityImage src={sessionImage} />
                            <ActivityRowBox>
                                <ActivityBoxTitle>정기 세션</ActivityBoxTitle>
                                <ActivityBoxDesciption>Regular session</ActivityBoxDesciption>
                            </ActivityRowBox>
                        </ActivityBoxContainer>
                        
                        <ActivityBoxContainer>
                            <ActivityImage src={projectImage} />
                            <ActivityRowBox>
                                <ActivityBoxTitle>창업 프로젝트 진행</ActivityBoxTitle>
                                <ActivityBoxDesciption>Start-up project</ActivityBoxDesciption>
                            </ActivityRowBox>
                        </ActivityBoxContainer>

                        <ActivityBoxContainer>
                            <ActivityImage src={educationImage} />
                            <ActivityRowBox>
                                <ActivityBoxTitle>창업 교육 · 멘토링</ActivityBoxTitle>
                                <ActivityBoxDesciption>Start-up education</ActivityBoxDesciption>
                            </ActivityRowBox>
                        </ActivityBoxContainer>

                    </ActivityRowWrapper>
                    <ActivityRowWrapper>
                    <ActivityBoxContainer>
                            <ActivityImage src={presentationImage} />
                            <ActivityRowBox>
                                <ActivityBoxTitle>팀별 성과 발표</ActivityBoxTitle>
                                <ActivityBoxDesciption>Team presentation</ActivityBoxDesciption>
                            </ActivityRowBox>
                        </ActivityBoxContainer>
                        <ActivityBoxContainer>
                            <ActivityImage src={hackathonImage} />
                            <ActivityRowBox>
                                <ActivityBoxTitle>해커톤</ActivityBoxTitle>
                                <ActivityBoxDesciption>Hackathon</ActivityBoxDesciption>
                            </ActivityRowBox>
                        </ActivityBoxContainer>
                        <ActivityBoxContainer>
                            <ActivityImage src={networkingImage} />
                            <ActivityRowBox>
                                <ActivityBoxTitle>네트워킹</ActivityBoxTitle>
                                <ActivityBoxDesciption>Networking</ActivityBoxDesciption>
                            </ActivityRowBox>
                        </ActivityBoxContainer>
                    </ActivityRowWrapper>
                </ActivityColumnWrapper>
            </ActivityWrapper>
        </ActivityContainer>
    )
};

export default Activity;