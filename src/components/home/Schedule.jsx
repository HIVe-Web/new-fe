import React from "react";
import styled from "styled-components";
import PinImage from "../../assets/images/pin.png";
import ArrowImage from "../../assets/images/arrowGray.svg";

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
    color: #8884A8;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 2.6vw;
    text-align: center;
    margin-bottom: 0.7vw;
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
    color: #4A4DFF;
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
    color: #AEAAD2;
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
  background-color: #222251;
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
    color: #FFFFFF;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 1.7vw;
    text-align: center;
`;

const TimelineDescription = styled.div`
    color: #FFFFFF;
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
                        <ScheduleSubTitleText>29.5기 모집 안내</ScheduleSubTitleText>
                    </ScheduleSubTitle>
                </ScheduleColumnWrapper>
            </ScheduleRowWrapper>





            <ScheduleDescription>
                * 일정은 내부 사정에 따라 변동될 수 있습니다.
            </ScheduleDescription>

            <TimelineWrapper>
                <TimelineBox><TimelineTitle>서류 접수<TimelineDescription>8월 27일(화) ~ 9월 6일(금)</TimelineDescription></TimelineTitle></TimelineBox>
                <TimelineArrow src={ArrowImage} />
                <TimelineBox><TimelineTitle>서류 발표<TimelineDescription>9월 7일(토) 18시 이후</TimelineDescription></TimelineTitle></TimelineBox>
                <TimelineArrow src={ArrowImage} />
                <TimelineBox><TimelineTitle>면접 심사<TimelineDescription>9월 9일(월) ~ 9월 10일(화)</TimelineDescription></TimelineTitle></TimelineBox>
                <TimelineArrow src={ArrowImage} />
                <TimelineBox><TimelineTitle>최종 결과 발표<TimelineDescription>9월 11일(수)</TimelineDescription></TimelineTitle></TimelineBox>
                <TimelineArrow src={ArrowImage} />
                <TimelineBox><TimelineTitle>오리엔테이션<TimelineDescription>9월 12일(목)</TimelineDescription></TimelineTitle></TimelineBox>
            </TimelineWrapper>

            <ScheduleDescription>
                <span className="footDescription">* 면접 심사는 대면으로 진행됩니다.</span>
            </ScheduleDescription>
        </ScheduleContainer>
    );
};

export default Schedule;