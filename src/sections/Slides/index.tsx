import { NextPage } from "next";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/sections/Slides.module.scss';
import { FreeMode, Pagination } from "swiper";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const selideImg = [
  {
    id: 0,
    name: 'Login',
    path: 'login.png'
  },

  {
    id: 1,
    name: 'Dashboard',
    path: 'dashboard.png'
  },
  {
    id: 2,
    name: 'Restaurantes',
    path: 'restaurants.png'
  },
  {
    id: 3,
    name: 'Carrinho',
    path: 'your-bag.png'
  },
  {
    id: 4,
    name: 'Pedidos',
    path: 'my-orders.png'
  },
  {
    id: 5,
    name: 'Perfil',
    path: 'profile.png'
  },
  {
    id: 6,
    name: 'Edite Perfil',
    path: 'edit-profile.png'
  },
  {
    id: 7,
    name: 'Pagamentos',
    path: 'payments.png'
  },
  {
    id: 8,
    name: 'Endereços',
    path: 'addresses.png'
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "components/SectionTitle";

const Slides: NextPage = () => {
  return (
    <section id="slides" className={styles.slides}>
      <SectionTitle title="Telas" subtitle="" />
      <div className="container">
        <div className={`column ${styles.custom}`}>


          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            pagination={{
              clickable: true,
              modifierClass: 'swiperPaginationCustom'
            }}
            freeMode={true}
            modules={[FreeMode, Pagination]}
          >

            {selideImg.map(slide => (
              <SwiperSlide key={slide.id}>
                <div className={styles.slideimg}>
                  <img src={`/mockups/slider/${slide.path}`} alt={`${slide.name}-screen`} width="270px" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}


export default Slides;