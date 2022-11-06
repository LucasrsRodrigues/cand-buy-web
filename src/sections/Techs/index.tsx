import { NextPage } from "next";

import styles from '@/styles/sections/Techs.module.scss';

const Techs: NextPage = () => {
  return (
    <section id="techs" className={styles.techs}>
      <div className={styles.modernHeader}>
        <div className="heading-secondary-wrap">
          <h6 className={styles.headingSecondary}>Tecnologias usadas</h6>
        </div>
        <div className="heading-primary-wrap">
          <h2 className="heading-primary elementor-heading-title">
            Criação de aplicativos ótimos para indivíduos, <br />
            startups e empresas
          </h2>
        </div>
      </div>

      <div className={styles.wrapperTechs}>
        <div className={styles.left}>
          <div className={styles.widget}>
            <div className={styles.icon}>
              <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/expo_logo_icon_145293.png" alt="expo" />
            </div>
            <div className={styles.iconContent}>
              <div className={styles.headingWrap}>
                <h4>Expo</h4>
              </div>
            </div>
          </div>

          <div className={styles.widget}>
            <div className={styles.icon}>
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="typescript" />
            </div>
            <div className={styles.iconContent}>
              <div className={styles.headingWrap}>
                <h4>Typescript</h4>
              </div>
            </div>
          </div>

          <div className={styles.widget}>
            <div className={styles.icon}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React-native" />
            </div>
            <div className={styles.iconContent}>
              <div className={styles.headingWrap}>
                <h4>React Native</h4>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.circle}></div>
          <div className={`${styles.imgTechs} ${styles.imgLogin}`}>
            <img src="mockups/techs/login.png" alt="Login Screen" />
          </div>

          <div className={`${styles.imgTechs} ${styles.imgDashboard}`}>
            <img src="mockups/techs/dashboard.png" alt="Dashboard Screen" />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.widget}>
            <div className={styles.icon}>
              <img src="https://miro.medium.com/max/318/1*7jRD5QhgARucFKvRHFxpOg.png" alt="Styled Components" />
            </div>
            <div className={styles.iconContent}>
              <div className={styles.headingWrap}>
                <h4>Styled Components</h4>
              </div>
            </div>
          </div>
          <div className={styles.widget}>
            <div className={styles.icon}>
              <img src="https://reactnavigation.org/img/spiro.svg" alt="React Navigation" />
            </div>
            <div className={styles.iconContent}>
              <div className={styles.headingWrap}>
                <h4>React Navigation</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Techs;