import React from "react";
import styled from "styled-components";
import MobPinImage from "../../assets/images/pin.png";
import downLineArrowImage from "../../assets/images/downLineArrow.png";

const MobScheduleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12vw;
`;

// Schedule
const MobScheduleTitle = styled.div`
    color: #838BA2;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 5.5vw;
    text-align: center;
    margin-bottom: 0vw;
`;

const MobScheduleSubtitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2vw;
`;

const MobScheduleSubImage = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    height: 7vw;
    width: 7vw;
    max-width: 70%;
    max-height: 70%;
    margin-bottom: 8vw;
    margin-right: 1vw;
`;

const MobScheduleSubTitle = styled.div`
    display: flex;
    align-items: center;
`;

// 29기 모집 안내
const MobScheduleSubTitleText = styled.div`
    color: #70ff00;
    text-align: center;
    text-shadow: 0vw; 0.2vw; 0.2vw; rgba(0, 0, 0, 0.25);
    font-family: "Pretendard-Bold", Helvetica;
    font-weight: 700;
    font-size: 8vw;
    margin-right: 8vw;
`;

const MobScheduleDescription = styled.div`
    color: #D8D8D8;
    font-family: "Pretendard", Helvetica;
    font-size: 4.5vw;
    margin-top: 5.5vw;
    margin-bottom: 5.5vw;

    span.footDescription{
        font-size: 1.5vw;
    }
`;

const MobTimelineWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const MobTimelineBox = styled.div`
  border-radius: 1.5vw;
  border: 0.5vw solid #70ff00;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-align: center;
  width: 60vw;
  height: 20vw;
`;

const MobTimelineArrow = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    height: 7vw;
    width: 7vw;
    max-width: 70%;
    max-height: 70%;

`;

const MobTimelineTitle = styled.div`
    color: #2A2A2A;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 5.5vw;
    text-align: center;
    font-weight: 800;
`;

const MobTimelineDescription = styled.div`
    color: #6E6E6E;
    font-family: "Pretendard-Bold", Helvetica;
    text-align: center;
    font-size: 4.8vw;
    margin-top: 1vw;
`;

export const Schedule = () => {
    return (
        <MobScheduleContainer>
            <MobScheduleTitle>Schedule</MobScheduleTitle>
            <MobScheduleSubtitleWrapper>
                <MobScheduleSubImage src={MobPinImage}/>
                <MobScheduleSubTitle>
                    <MobScheduleSubTitleText>29기 모집 안내</MobScheduleSubTitleText>
                </MobScheduleSubTitle>
            </MobScheduleSubtitleWrapper>
            <MobScheduleDescription>
                * 일정은 내부 사정에 따라 변동될 수 있습니다.
            </MobScheduleDescription>

            <MobTimelineWrapper>
                <MobTimelineBox><MobTimelineTitle>서류 접수<MobTimelineDescription>2월 28일(수) ~ 3월 8일(금)</MobTimelineDescription></MobTimelineTitle></MobTimelineBox>
            </MobTimelineWrapper>
            <MobTimelineArrow src={downLineArrowImage} />
            <MobTimelineWrapper>
                <MobTimelineBox><MobTimelineTitle>서류 심사<MobTimelineDescription>3월 9일(토) 18시까지</MobTimelineDescription></MobTimelineTitle></MobTimelineBox>
            </MobTimelineWrapper>
            <MobTimelineArrow src={downLineArrowImage} />
            <MobTimelineWrapper>
                <MobTimelineBox><MobTimelineTitle>면접 심사<MobTimelineDescription>3월 11일(월) ~ 12일(화)</MobTimelineDescription></MobTimelineTitle></MobTimelineBox>
            </MobTimelineWrapper>
            <MobTimelineArrow src={downLineArrowImage} />
            <MobTimelineWrapper>
                <MobTimelineBox><MobTimelineTitle>최종 결과 발표<MobTimelineDescription>3월 13일(수)</MobTimelineDescription></MobTimelineTitle></MobTimelineBox>
            </MobTimelineWrapper>
            <MobTimelineArrow src={downLineArrowImage} />
            <MobTimelineWrapper>
                <MobTimelineBox><MobTimelineTitle>오리엔테이션<MobTimelineDescription>3월 14일(목) 18시</MobTimelineDescription></MobTimelineTitle></MobTimelineBox>
            </MobTimelineWrapper>
        </MobScheduleContainer>
    );
};

export default Schedule;