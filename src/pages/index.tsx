import type { NextPage } from 'next';

import Slides from '@/sections/Slides';
import Techs from '@/sections/Techs';

import styles from '@/styles/pages/Home.module.scss';
import 'swiper/css';
import CratedBy from '@/sections/CreatedBy';
import HowToWork from '@/sections/HowToWork';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Techs />
        {/* <Slides /> */}
        <HowToWork />
      </div>
    </div>
  )
}

export default Home
