import React from "react";
import styled from "styled-components";

import sessionImage from "../../assets/images/session.png"
import projectImage from "../../assets/images/project.png"
import educationImage from "../../assets/images/education.png"
import presentationImage from "../../assets/images/presentation.png"
import hackathonImage from "../../assets/images/hackathon.png"
import networkingImage from "../../assets/images/networking.png"

const ActivityContainer = styled.div`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 8vw;
`;

const ActivityTitle = styled.div`
    color: #8884A8;
    text-align: center;
    font-family: Pretendard-Bold, sans-serif;
    font-size: 2.6vw;
    margin-bottom: 1vw;
`;

const ActivitySubTitle = styled.div`
    color: #4A4DFF;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 3.5vw;
    margin-bottom: 1vw;
`;

const ActivityDescription = styled.div`
    color: #FFFFFF;
    font-family: "Pretendard-SemiBold", Helvetica;
    font-size: 2vw;
`;

const ActivityWrapper = styled.div`
    display: flex;
    margin-top: 2vw;
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
    height: 19vw;
    width: 24vw;
    margin: 1vw;
`;

const ActivityRowBox = styled.div`
    background: linear-gradient(180deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0) 100%);
    border-radius: 1vw;
    height: 19vw;
    width: 24vw;
    margin: 1vw;
    position: absolute;
`;

const ActivityImage = styled.img`
    object-position: center;
    border-radius: 1vw;
    height: 19vw;
    width: 24vw;
    margin: 1vw;
    align-self: center;
    position: absolute;
`;

const ActivityBoxTitle = styled.div`
    color: #FFFFFF;
    font-family: "Pretendard-Medium", Helvetica;
    font-weight: 700;
    font-size: 2.2vw;
    white-space: nowrap;
    margin-left: 1.8vw;
    margin-top: 1.8vw;
    margin-bottom: 0.5vw;
`;

const ActivityBoxDesciption = styled.div`
    color: #AEAEAE;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 1.4vw;
    margin-left: 1.8vw;
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