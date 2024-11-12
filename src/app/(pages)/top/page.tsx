"use client";

import React from 'react';
import styled from 'styled-components';
import Box from '../../components/Box';
import Title from '../../components/Title';
import TopCard from '../../components/topCard';
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

const TopPage = () => {

  const OpeningHours = () => {
    const openingHoursContent = [
      { name: '青山', time: '9:00-21:00' },
      { name: '相模原', time: '9:00-20:00' },
      { name: '受付時間', time: '9:45-16:30' },
    ];

    return (
      <TopCard
        title="開室時間"
        notes="※授業実施日のみ"
        subtitle="OPENING HOURS"
        content={openingHoursContent}
        button={undefined}
      />
    );
  };

  const Information = () => {
    const informationContent = [
      { name: '2024/10/10', time: '2024年度後期開室のお知らせ（相模原）' },
      { name: '2024/07/25', time: '留学生の方々にミニワークショップを開催しました' },
      { name: '2024/07/02', time: '2024年度夏季休業期間開室のお知らせ' },
    ];

    return (
      <TopCard
        title="お知らせ"
        notes=""
        subtitle="INFORMATION"
        content={informationContent}
        button="一覧を見る"
      />
    );
  };

  return (
    <div className="bg-[#F0EBDC]">
      {/* Swiperセクション */}
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop= {true}
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


      {/* Aboutセクション */}
      <div className="flex flex-col rounded md:flex-row justify-center bg-white items-center gap-4 my-8 p-8 m-8 ">
        <div className="w-full md:w-1/2">
          <img className="rounded-md" src="images\about.png" alt="説明画像" />
        </div>
        <div className="w-full md:w-1/2 about_main">
          <Title 
            maintitle="AIM Commons(ラーニングコモンズ)とは？"
            subtitle="ABOUT US"
          />
          <div className="about_sub">
            <p>
              交流しながら学習できる共同学習スペースです。学習目的に限り、開室時間内は誰でも自由に利用することができます。PCや撮影機器、ブースの貸出も行っています。グループワークに適した机・椅子やホワイトボードなど、学生同士の学びも促進するための設備があり、教職員スタッフやAIM Commons学生スタッフが授業時間外の学生の学びをサポートします。
            </p>
          </div>
        </div>
      </div>

      {/* 開室時間とお知らせの表示 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 m-8">
        <OpeningHours />
        <Information />
      </div>

      {/* 追加情報を表示するボックス */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center m-8">
        <Box img="images/home01.jpg" title="利用案内" subtitle="INSTRUCTION" description="アクセス/PC・機器貸出方法" />
        <Box img="images/floor06.jpg" title="施設紹介" subtitle="FACILITIES" description="AIM Commonsの設備" />
        <Box img="images/home03.jpg" title="施設紹介" subtitle="FACILITIES" description="AIM Commonsの設備" />
        <Box img="images/home01.jpg" title="技術ブログ" subtitle="BLOG" description="技術的な投稿" />
        <Box img="images/floor06.jpg" title="新しい設備" subtitle="NEW FACILITIES" description="新しく導入された設備" />
        <Box img="images/kizai.jpg" title="機器貸し出し" subtitle="FACILITIES" description="機器の貸し出し" />
      </div>
    </div>
  );
};

export default TopPage;
