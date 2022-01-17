import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '@public/images/banner1.png';
import banner2 from '@public/images/banner2.png';
import banner3 from '@public/images/banner3.png';
import banner4 from '@public/images/banner4.png';
import Image from 'next/image';
import theme from '@styles/theme';
import BtnArrowIcon from '@styles/svg/BtnArrowIcon';
SwiperCore.use([Navigation, Autoplay]);
function BannerIndex() {
  const banners = [
    {
      name: 'banner1',
      img: banner1,
    },
    {
      name: 'banner2',
      img: banner2,
    },
    {
      name: 'banner3',
      img: banner3,
    },
    {
      name: 'banner4',
      img: banner4,
    },
  ];
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
      >
        {banners.map((item, index) => (
          <SwiperSlide key={`${item.name}_${index}`}>
            <Image layout='fill' objectFit='cover' src={item.img} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
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
