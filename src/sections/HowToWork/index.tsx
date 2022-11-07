import SectionTitle from "components/SectionTitle";
import { NextPage } from "next";

import styles from '@/styles/sections/HowToWork.module.scss';

const HowToWork: NextPage = () => {

  function copyToClipboard() {
    navigator.clipboard.writeText('git clone https://github.com/LucasrsRodrigues/candy-buy.git')
  }

  return (
    <section className={styles.howtowork}>
      <SectionTitle title="Como instalar" subtitle="em 3 passos" />

      <div className={styles.wrapperSteps}>
        <div className={styles.boxStep}>
          <div className={styles.numberStep}>
            01.
          </div>
          <div className={styles.wrapperTexts}>
            <div className={styles.title}>Clone o Git</div>
            <button className={styles.button} onClick={copyToClipboard}>
              Copie!
            </button>
          </div>
        </div>

        <div className={styles.boxStep}>
          <div className={styles.numberStep}>
            02.
          </div>
          <div className={styles.wrapperTexts}>
            <div className={styles.title}>Instale as dependencias</div>
            <div className={styles.text}>
             > yarn ou npm
            </div>
          </div>
        </div>

        <div className={styles.boxStep}>
          <div className={styles.numberStep}>
            03.
          </div>
          <div className={styles.wrapperTexts}>
            <div className={styles.title}>Execute o projeto</div>
            <div className={styles.text}>
             > expo start <br />
             > yarn server
            </div>
          </div>
        </div>
      </div>

    </section>
  )
};

export default HowToWork;