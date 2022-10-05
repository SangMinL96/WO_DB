import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import theme from '@styles/theme';
import BtnArrowIcon from '@styles/svg/BtnArrowIcon';
SwiperCore.use([Navigation, Autoplay]);
function BannerIndex() {
  const [crrIndex, setCrrIndex] = useState(0);
  const onChangePage = (ev: any) => {
    setCrrIndex(ev.realIndex + 1);
  };
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides
        loop
        autoplay={{
          delay: 3000,
        }}
        navigation={{
          prevEl: '.main_slider_prev.type1',
          nextEl: '.main_slider_next.type1',
        }}
        onSlideChange={onChangePage}
      ></Swiper>
      <LeftBtn className='main_slider_prev type1'>
        <BtnArrowIcon type='left' />
      </LeftBtn>
      <RightBtn className='main_slider_next type1'>
        <BtnArrowIcon type='right' />
      </RightBtn>
    </Container>
  );
}

export default BannerIndex;

const Container = styled.section`
  position: relative;
  width: ${theme.pc}px;
  height: 500px;
  margin-top: 20px;

  .swiper-slide {
    position: relative;
    text-align: center;
    max-width: ${theme.pc}px;
    height: 500px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* @media all and (max-width: 1280px) {
      aspect-ratio: 15/8;
      width: 100%;
      height: 100%;
    } */
  }
  button {
    ${theme.resetBtnStyle}
    z-index: 55;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 150px;
    height: 150px;
    background-color: rgba(2, 2, 2, 0.2);
    &:hover {
      background-color: rgba(2, 2, 2, 0.6);
    }
  }
`;

const LeftBtn = styled.button`
  left: 0;
`;
const RightBtn = styled.button`
  right: 0;
`;
