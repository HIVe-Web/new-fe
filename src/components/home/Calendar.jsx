import React from "react";
import styled from "styled-components";

import calendarImage from '../../assets/images/calendar.svg'

// 달력 컨테이너 관련
const CalendarContainer = styled.div`
  background-color: #1C1C1C;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8vw;
`;

// 모집 마감 기한 텍스트
const CalendarText = styled.div`
  color: #ffffff;
  text-align: center;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 4vw;
`;

// 3월 9일 23시 59분까지 텍스트
const CalendarDateText = styled.div`
  color: #52FF98;
  text-align: center;
  font-family: Pretendard, sans-serif;
  font-size: 2.7vw;
  margin-top: 1vw;
  font-weight: 600;
`;

const CalendarImage = styled.img`
  aspect-ratio: 1;
  object-fit: cover; // 이미지 비율을 유지하면서 컨테이너를 채우기 위해 'cover' 사용
  object-position: center;
  width: 40vw; // 뷰포트 너비의 50% 사용
  align-self: center;
  margin-top: 5vh; // 뷰포트 높이의 5% 사용
  max-width: 50%;
  max-height: 50%; // 뷰포트 높이의 50%를 최대 높이로 설정
`;

export const Calendar = () => {
    return (
        <CalendarContainer>
        <CalendarText>모집 마감 기한</CalendarText>
        <CalendarDateText>*3월 9일 23시 59분까지*</CalendarDateText>
        <CalendarImage src={calendarImage} />
      </CalendarContainer>
    )
};

export default Calendar;