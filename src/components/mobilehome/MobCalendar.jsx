import React from "react";
import styled from "styled-components";

import calendarImage from '../../assets/images/calendar.svg'

const MobCalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 18vw;
`;

const MobCalendarText = styled.div`
  color: #ffffff;
  text-align: center;
  font-family: "Pretendard-Bold", Helvetica;
  font-weight: 700;
  font-size: 8vw;
`;

const MobCalendarDateText = styled.div`
  color: #52FF98;
  text-align: center;
  font-family: Pretendard, sans-serif;
  font-size: 5vw;
  margin-top: 3vw;
`;

const MobCalendarImage = styled.object`
  aspect-ratio: 1;
  object-fit: cover; // 이미지 비율을 유지하면서 컨테이너를 채우기 위해 'cover' 사용
  object-position: center;
  width: 45vw; // 뷰포트 너비의 50% 사용
  align-self: center;
  margin-top: 5vh; // 뷰포트 높이의 5% 사용
  max-width: 80%;
  max-height: 80%; // 뷰포트 높이의 50%를 최대 높이로 설정
`;

export const MobCalendar = () => {
    return (
        <MobCalendarContainer>
            <MobCalendarText>모집 마감 기한</MobCalendarText>
            <MobCalendarDateText>*3월 9일 23시 59분까지*</MobCalendarDateText>
            <MobCalendarImage data={calendarImage} type=""/>
        </MobCalendarContainer>
    )
};

export default MobCalendar;