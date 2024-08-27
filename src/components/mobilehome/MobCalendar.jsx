import React from "react";
import styled from "styled-components";

import calendarBackgroundImage from "../../assets/images/calendarBackground.svg"
import calendarImage from '../../assets/images/calendar.svg'

const MobHeadContainer = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,  /* 상단 부분 연하게 */
    rgba(255, 255, 255, 0) 10%, /* 상단 부분에서 완전 투명 */
    rgba(255, 255, 255, 0) 85%, /* 하단 부분에서 완전 투명 */
    rgba(255, 255, 255, 1) 100% /* 하단 부분 연하게 */
  ), 
  url(${calendarBackgroundImage});
  width: 100%;
  height: 80vw;
  background-size: 100%;
  margin-top: 40vw;
`;


const MobCalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1vw;
`;

const MobCalendarText = styled.div`
  color: #000000;
  text-align: center;
  font-family: "Pretendard-Bold", Helvetica;
  font-weight: bold;
  font-size: 8vw;
`;

const MobCalendarDateText = styled.div`
  color: #4A4DFF;
  text-align: center;
  font-family: Pretendard, sans-serif;
  font-weight: bold;
  font-size: 5vw;
  margin-top: 3vw;
`;

const MobCalendarImage = styled.object`
  aspect-ratio: 1;
  object-fit: cover; // 이미지 비율을 유지하면서 컨테이너를 채우기 위해 'cover' 사용
  object-position: center;
  width: 45vw; // 뷰포트 너비의 50% 사용
  align-self: center;
  margin-top: 2vh; // 뷰포트 높이의 5% 사용
  max-width: 80%;
  max-height: 80%; // 뷰포트 높이의 50%를 최대 높이로 설정
`;

const MobHistoryTitle = styled.div`
  color: #000000;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 5vw;
  font-weight: 900;
  text-align: center;
  line-height: 1.5;
  margin-top: 20vw;
`;

export const MobCalendar = () => {
  return (
    <MobHeadContainer>
      <MobCalendarContainer>
        <MobCalendarText>모집 마감 기한</MobCalendarText>
        <MobCalendarDateText>*9월 6일 23시 59분까지*</MobCalendarDateText>
        <MobCalendarImage data={calendarImage} type="" />
      </MobCalendarContainer>
      <MobHistoryTitle>
        창업에 관심을 가진 다양한 학생들을 만나 <br />사업화까지 경험해볼 수 있는 기회를 잡으세요!
      </MobHistoryTitle>
    </MobHeadContainer>
  )
};

export default MobCalendar;
