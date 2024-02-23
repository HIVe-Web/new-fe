import React from 'react';
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

import hivcdSImage from '../../assets/images/hivcdS.png'
import hiceDImage from '../../assets/images/hiceD.png'
import businessJImage from '../../assets/images/businessJ.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Navigation, Mousewheel } from "swiper/core";

const MobPersonaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MobPersonaWrapper = styled.div`
    display: flex;  
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MobFirstDescription = styled.div`
    color: #ffffff;
    text-align: center;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 5.4vw;
    font-weight: 600;
    margin-top: 10vw;
    margin-bottom: 3vw;
    line-height: 1.5;
`;

const MobPersonaSpeechBubble = styled.div`
  background-color: #ffffff;
  border: 0px none;
  border-radius: 1.7vw;
  width: 63vw;
  height: 22vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobPersonaSpeechBubbleImage = styled.div`
  width: 0; // 너비는 여전히 0으로 설정 (삼각형 모양을 유지하기 위해)
  height: 0; // 높이는 여전히 0으로 설정
  border-top: 3vw solid #ffffff; // 말풍선의 "말" 부분의 크기를 결정
  border-left: 1.8vw solid transparent; // 말풍선 꼬리의 왼쪽 부분
  border-right: 1.8vw solid transparent; // 말풍선 꼬리의 오른쪽 부분
  margin-bottom: 3vw; // 말풍선과 아래 요소와의 간격
`;


const MobPersonaText = styled.div`
  color: #000000;
  text-align: center;
  font-family: "Pretendard-SemiBold", Helvetica;
  font-size: 4.3vw;
  font-weight: 650;
`;

const MobPersonaImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain; // 이미지 비율을 유지하면서 컨테이너를 채우기 위해 'cover' 사용
  object-position: center;
  height: 50vw;
  width: 50vw;
  align-self: center;
  max-width: 100%;
  max-height: 100%; // 뷰포트 높이의 50%를 최대 높이로 설정
  margin-top: 5vw;
`;

const MobPersonaName = styled.div`
  color: #ffffff;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 5vw;
  font-weight: 700;
  margin-top: 3vw;
  text-align: center;
  white-space: nowrap;
`;

// MobPersona 컴포넌트의 props로 movies 배열을 받는다고 가정
export const MobPersona = () => {
    return (
        <MobPersonaContainer>
            <MobFirstDescription>창의적인 아이디어와 <br/>열정을 가진 학생들이 모여<br />
                    혁신적인 사업을 기획하고 실행합니다.</MobFirstDescription>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={true}
                mousewheel={true}
                modules={[EffectCoverflow, Navigation, Mousewheel]} // 모듈추가
                className="mySwiper"
            >
                
                <SwiperSlide>
                    <MobPersonaWrapper>
                        <MobPersonaSpeechBubble>
                            <MobPersonaText>
                                단기성 프로젝트가 아닌 <br />실제 창업까지 실현 해보고 싶어요
                            </MobPersonaText>
                        </MobPersonaSpeechBubble>
                        <MobPersonaSpeechBubbleImage />
                        <MobPersonaImage src={hiceDImage} />
                        <MobPersonaName>
                            컴퓨터공학과 D씨
                        </MobPersonaName>
                    </MobPersonaWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <MobPersonaWrapper>
                        <MobPersonaSpeechBubble>
                            <MobPersonaText>
                                디자인 역량을 살려 실제 사업에 <br /> 필요한 아이템을 만들고 싶어요.
                            </MobPersonaText>
                        </MobPersonaSpeechBubble>
                        <MobPersonaSpeechBubbleImage />
                        <MobPersonaImage src={hivcdSImage} />
                        <MobPersonaName>
                            시각디자인과 S씨
                        </MobPersonaName>
                    </MobPersonaWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <MobPersonaWrapper>
                        <MobPersonaSpeechBubble>
                            <MobPersonaText>
                                막연히 창업에 대한 꿈은 있지만 <br /> 어떻게 시작해야 할 지 모르겠어요.
                            </MobPersonaText>
                        </MobPersonaSpeechBubble>
                        <MobPersonaSpeechBubbleImage />
                        <MobPersonaImage src={businessJImage} />
                        <MobPersonaName>
                            경영학과 J씨
                        </MobPersonaName>
                    </MobPersonaWrapper>
                </SwiperSlide>
            </Swiper>
        </MobPersonaContainer>
    );
};

export default MobPersona;
