"use client";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
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
		modules={[Navigation, Pagination, Scrollbar, A11y]}
		loop={true}
		spaceBetween={20}
		slidesPerView={1}
		pagination={{ clickable: true }}
		scrollbar={{ draggable: true }}
	>
		<SwiperSlide>
			<div style={{ position: "relative", width: "100%", height: "100%" }}>
				<Image
					src="/images/main01.jpg"
					alt="Slide 1"
					width={400}
					height={300}
					className="h-full w-full"
				/>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<div style={{ position: "relative", width: "100%", height: "100%" }}>
				<Image
					src="/images/main02.jpg"
					alt="Slide 2"
					width={400}
					height={300}
					className="h-full w-full"
				/>
			</div>
		</SwiperSlide>
		<SwiperSlide>
			<Image
				src="/images/main03.jpg"
				alt="Slide 3"
				width={400}
				height={300}
				className="h-full w-full"
			/>
		</SwiperSlide>
	</StyledSwiper>
);

export default ClientSwiper;
