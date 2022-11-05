import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Home.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


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


const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <section id="slides">
        <div className="container">
          <div className="column">

            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >

              {selideImg.map(slide => (
                <SwiperSlide key={slide.id}>
                  <div className="img">
                    <img src={`/mockups/${slide.path}`} alt={`${slide.name}-screen`} width="270px" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
