import Image from 'next/image';

import ArrowButton from '../components/ArrowButton';
import styles from '../styles/Why.module.scss';

const Why = () => {
  return (
    <section id="por-que" className={styles.why}>
      <div className={styles.desktop}>
        <h1 className={styles.title}>¿Por qué Seguro Peludo?</h1>
        <p className={styles.message}>
          Estar preparado es la mejor opción para proteger la vida de aquellos
          peluditos a los que tanto amamos
        </p>
        <div className={styles.featureContainer}>
          <div className={styles.feature}>
            <div>
              <Image
                src="/assets/images/atencion.png"
                width={176}
                height={190}
                alt=""
              />
            </div>
            <p>Atención Veterinaria</p>
          </div>
          <div className={styles.feature}>
            <div>
              <Image
                src="/assets/images/guarderia.png"
                width={176}
                height={190}
                alt=""
              />
            </div>
            <p>Servicios de Guardería</p>
          </div>
          <div className={styles.feature}>
            <div>
              <Image
                src="/assets/images/funeraria.png"
                width={176}
                height={190}
                alt=""
              />
            </div>
            <p>Servicios Funerarios</p>
          </div>
        </div>
        <button className={styles.button}>VEAMOS LOS PLANES</button>
      </div>

      <div className={styles.mobile}>
        <h2 className={styles.titleMobile}>
          ¿Por qué un Seguro para Mascotas?
        </h2>
        <p className={styles.messageMobile}>
          Estar preparado es la mejor opción para proteger la vida de aquellos
          peluditos a los que tanto amamos
        </p>
        <div className={styles.featureContainerMobile}>
          <div className={styles.featureMobile}>
            <div>
              <Image
                src="/assets/images/veterinaria_mobile.svg"
                width={40}
                height={50}
                alt=""
              />
            </div>
            <p>Atención</p>
            <strong>Veterinaria</strong>
          </div>
          <div className={styles.featureMobile}>
            <div>
              <Image
                src="/assets/images/gasto_medico.svg"
                width={40}
                height={50}
                alt=""
              />
            </div>
            <p>Gastos</p>
            <strong>Médicos</strong>
          </div>
          <div className={styles.featureMobile}>
            <div>
              <Image
                src="/assets/images/funeraria_mobile.svg"
                width={40}
                height={50}
                alt=""
              />
            </div>
            <p>Servicios</p>
            <strong>Funerarios</strong>
          </div>
        </div>
        <button className={styles.buttonMobile}>VEAMOS LOS PLANES</button>
      </div>

      <div className={styles.buttonGroup}>
        <ArrowButton to="#" up />
        <ArrowButton to="#planes" />
      </div>
    </section>
  );
};
export default Why;
