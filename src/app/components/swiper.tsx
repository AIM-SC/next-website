"use client";

import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const StyledSwiper = styled(Swiper)`
  width: 100%;
  margin-bottom: 2rem;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const ClientSwiper = () => (
  <StyledSwiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    loop={true}
    spaceBetween={20}
    slidesPerView={1}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
    <SwiperSlide>
      <img src="\images\main01.jpg" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </SwiperSlide>
    <SwiperSlide>
      <img src="\images\main02.jpg" alt="Slide 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </SwiperSlide>
    <SwiperSlide>
      <img src="images\main03.jpg" alt="Slide 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </SwiperSlide>
  </StyledSwiper>
);

export default ClientSwiper;

