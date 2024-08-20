import React from "react";
import styled from "styled-components";
import MobPinImage from "../../assets/images/pin.png";
import downLineArrowImage from "../../assets/images/downLineArrow.svg";

const MobScheduleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 25vw;
`;

// Schedule
const MobScheduleTitle = styled.div`
    color: #838BA2;
    text-align: center;
    font-family: 'Pretendard-Bold';
    font-size: 5.5vw;
    text-align: center;
    margin-bottom: 0vw;
`;

const MobScheduleSubtitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const MobScheduleSubImage = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    height: 9vw;
    width: 9vw;
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
    color: #4A4DFF;
    text-align: center;
    text-shadow: 0vw; 0.2vw; 0.2vw; rgba(0, 0, 0, 0.25);
    font-family: "Pretendard-Bold", Helvetica;
    font-weight: 700;
    font-size: 8vw;
    margin-right: 10vw;
`;

const MobScheduleDescription = styled.div`
    color: #9DA1AD;
    font-family: "Pretendard", Helvetica;
    font-size: 4.5vw;
    margin-top: 0.5vw;
    margin-bottom: 10.5vw;

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
  border: 0.5vw solid #222251;
  background-color: #222251;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-align: center;
  width: 65vw;
  height: 20vw;
`;

const MobTimelineArrow = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    height: 7vw;
    width: 7vw;
    max-width: 100%;
    max-height: 100%;

`;

const MobTimelineTitle = styled.div`
    color: #ffffff;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 5.1vw;
    text-align: center;
    font-weight: 800;
    margin-bottom: 1.5vw;
    margin-top: 2.3vw;
`;

const MobTimelineDescription = styled.div`
    color: #ffffff;
    font-family: "Pretendard-Bold", Helvetica;
    text-align: center;
    font-size: 4.3vw;
    margin-top: 1.5vw;
`;

const MobInterviewDescription = styled.div`
    color: #9DA1AD;
    font-family: "Pretendard", Helvetica;
    font-size: 4.0vw;
    margin-top: 3.5vw;
    margin-bottom: 10.5vw;

    span.footDescription{
        font-size: 1.5vw;
    }
`;

export const Schedule = () => {
    return (
        <MobScheduleContainer>
            <MobScheduleTitle>Schedule</MobScheduleTitle>
            <MobScheduleSubtitleWrapper>
                <MobScheduleSubImage src={MobPinImage}/>
                <MobScheduleSubTitle>
                    <MobScheduleSubTitleText>29.5기 모집 안내</MobScheduleSubTitleText>
                </MobScheduleSubTitle>
            </MobScheduleSubtitleWrapper>
            <MobScheduleDescription>
                * 일정은 내부 사정에 따라 변동될 수 있습니다.
            </MobScheduleDescription>

            <MobTimelineWrapper>
                <MobTimelineBox><MobTimelineTitle>서류 접수<MobTimelineDescription>8월 27일(화) ~ 9월 6일(금)</MobTimelineDescription></MobTimelineTitle></MobTimelineBox>
            </MobTimelineWrapper>
            <MobTimelineArrow src={downLineArrowImage} />
            <MobTimelineWrapper>
                <MobTimelineBox><MobTimelineTitle>서류 발표<MobTimelineDescription>9월 7일(토) 18시 이후</MobTimelineDescription></MobTimelineTitle></MobTimelineBox>
            </MobTimelineWrapper>
            <MobTimelineArrow src={downLineArrowImage} />
            <MobTimelineWrapper>
                <MobTimelineBox><MobTimelineTitle>면접 심사<MobTimelineDescription>9월 9일(월) ~ 10일(화)</MobTimelineDescription></MobTimelineTitle></MobTimelineBox>
            </MobTimelineWrapper>
            <MobTimelineArrow src={downLineArrowImage} />
            <MobTimelineWrapper>
                <MobTimelineBox><MobTimelineTitle>최종 결과 발표<MobTimelineDescription>9월 11일(수 )</MobTimelineDescription></MobTimelineTitle></MobTimelineBox>
            </MobTimelineWrapper>
            <MobTimelineArrow src={downLineArrowImage} />
            <MobTimelineWrapper>
                <MobTimelineBox><MobTimelineTitle>오리엔테이션<MobTimelineDescription>3월 14일(목)</MobTimelineDescription></MobTimelineTitle></MobTimelineBox>
            </MobTimelineWrapper>
            <MobInterviewDescription>
                * 면접 심사는 대면으로 진행됩니다.
            </MobInterviewDescription>
        </MobScheduleContainer>
    );
};

export default Schedule;