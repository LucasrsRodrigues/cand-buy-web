import type { NextPage } from 'next';

import Slides from '@/sections/Slides';
import Techs from '@/sections/Techs';

import styles from '@/styles/pages/Home.module.scss';
import 'swiper/css';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Techs />
        <Slides />
      </div>
    </div>
  )
}

export default Home
