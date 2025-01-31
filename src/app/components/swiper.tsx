"use client";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

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
		modules={[Navigation, Pagination, A11y]}
		loop={true}
		spaceBetween={20}
		slidesPerView={1}
		pagination={{ clickable: true }}
		scrollbar={{ draggable: true }}
	>
		<SwiperSlide>
			<div className="relative aspect-[18/9] w-full">
				<Image src="/images/floor07.jpg" alt="Slide-1" fill />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div className="relative aspect-[18/9] w-full">
				<Image src="/images/floor01.jpg" alt="Slide-1" fill />
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div className="relative aspect-[18/9] w-full">
				<Image src="/images/pc_rental.jpg" alt="Slide-1" fill />
			</div>
		</SwiperSlide>
	</StyledSwiper>
);

export default ClientSwiper;
