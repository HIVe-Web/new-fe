import React from "react";
import styled from "styled-components";
import PinImage from "../../assets/images/pin.png";
import ArrowImage from "../../assets/images/arrowGreen.svg";

const ScheduleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8vw;
`;

const ScheduleRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ScheduleColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 5vw;
`;

// Schedule 글자
const ScheduleTitle = styled.div`
    color: #838BA2;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.6vw;
    text-align: center;
`;

// 고정핀 이미지 
const ScheduleSubImage = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    height: 4.2vw;
    width: 4.2vw;
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 1vw;
    margin-right: 0.5vw;
`;

// 29기 모집 안내 글자
const ScheduleSubTitleText = styled.div`
    color: #53FF98;
    text-align: center;
    text-shadow: 0vw; 0.2vw; 0.2vw; rgba(0, 0, 0, 0.25);
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 3.5vw;
`;

const ScheduleSubTitle = styled.div`
    display: flex;
    align-items: center;
`;

// 일정 변동 글자
const ScheduleDescription = styled.div`
    color: #D8D8D8;
    font-family: "Pretendard", Helvetica;
    font-size: 2vw;
    margin-top: 1.5vw;

    span.footDescription{
        font-size: 1.5vw;
    }
`;







const TimelineWrapper = styled.div`
    display: flex;
    margin-top: 4.5vw;
    align-items: center;
`;

const TimelineBox = styled.div`
  border-radius: 1.5vw;
  border: 0.18vw solid #53FF98;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-align: center;
  width: 15.5vw;
  height: 7vw;
  max-width: 20vw;
`;

const TimelineArrow = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    height: 2vw;
    width: 2vw;
    max-width: 70%;
    max-height: 70%;
`;

const TimelineTitle = styled.div`
    color: #2A2A2A;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 1.7vw;
    text-align: center;
`;

const TimelineDescription = styled.div`
    color: #6E6E6E;
    font-family: "Pretendard-Bold", Helvetica;
    text-align: center;
    font-size: 1.15vw;
    margin-top: 1vw;
`;

export const Schedule = () => {
    return (
        <ScheduleContainer>
            <ScheduleRowWrapper>
                <ScheduleSubImage src={PinImage} />
                <ScheduleColumnWrapper>
                    <ScheduleTitle>Schedule</ScheduleTitle>
                    <ScheduleSubTitle>
                        <ScheduleSubTitleText>29기 모집 안내</ScheduleSubTitleText>
                    </ScheduleSubTitle>
                </ScheduleColumnWrapper>
            </ScheduleRowWrapper>





            <ScheduleDescription>
                * 일정은 내부 사정에 따라 변동될 수 있습니다.
            </ScheduleDescription>

            <TimelineWrapper>
                <TimelineBox><TimelineTitle>서류 접수<TimelineDescription>2월 28일(수) ~ 3월 8일(금)</TimelineDescription></TimelineTitle></TimelineBox>
                <TimelineArrow src={ArrowImage} />
                <TimelineBox><TimelineTitle>서류 발표<TimelineDescription>3월 9일(토) 18시 이후</TimelineDescription></TimelineTitle></TimelineBox>
                <TimelineArrow src={ArrowImage} />
                <TimelineBox><TimelineTitle>면접 심사<TimelineDescription>3월 11일(월) ~ 3월 12일(화)</TimelineDescription></TimelineTitle></TimelineBox>
                <TimelineArrow src={ArrowImage} />
                <TimelineBox><TimelineTitle>최종 결과 발표<TimelineDescription>3월 13일(수)</TimelineDescription></TimelineTitle></TimelineBox>
                <TimelineArrow src={ArrowImage} />
                <TimelineBox><TimelineTitle>오리엔테이션<TimelineDescription>3월 14일(수)</TimelineDescription></TimelineTitle></TimelineBox>
            </TimelineWrapper>

            <ScheduleDescription>
                <span className="footDescription">* 면접 심사는 대면으로 진행됩니다.</span>
            </ScheduleDescription>
        </ScheduleContainer>
    );
};

export default Schedule;