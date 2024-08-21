import React from "react";
import styled from "styled-components";

import calendarBackgroundImage from "../../assets/images/calendarBackground.svg"
import calendarImage from '../../assets/images/calendar.svg'

const HeadContainer = styled.div`
  background: url(${calendarBackgroundImage});
  width: 100%;
  height: 64vw;
  background-size: 100%;
`;

// 달력 컨테이너 관련
const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8vw;
`;

// 모집 마감 기한 텍스트
const CalendarText = styled.div`
  color: #000000;
  text-align: center;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 4vw;
`;

// 3월 9일 23시 59분까지 텍스트
const CalendarDateText = styled.div`
  color: #4A4DFF;
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
  width: 25vw;
  align-self: center;
  margin-top: 5vh; // 뷰포트 높이의 5% 사용
  max-width: 50%;
  max-height: 50%; // 뷰포트 높이의 50%를 최대 높이로 설정
`;

const CalendarDetailText = styled.div`
  color: #000000;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 2.5vw;
  text-align: center;
  line-height: 1.5;
  margin-top: 8vw;
`;

export const Calendar = () => {
  return (
    <HeadContainer>
      <CalendarContainer>
        <CalendarText>모집 마감 기한</CalendarText>
        <CalendarDateText>*9월 6일 23시 59분까지*</CalendarDateText>
        <CalendarImage src={calendarImage} />
        <CalendarDetailText>
          창업에 관심을 가진 다양한 학생들을 만나 <br />실제 사업화까지 경험해볼 수 있는 기회를 잡으세요!
        </CalendarDetailText>
      </CalendarContainer>
    </HeadContainer>
  )
};

export default Calendar;
