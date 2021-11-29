import Image from 'next/image';

import styles from '../styles/Club.module.scss';
import ArrowButton from '../components/ArrowButton';

const Club = () => {
  return (
    <section id="club" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.title}>
          ¿Un seguro que te abre las puertas a un CLUB?
        </p>

        <Image src="/assets/images/club.png" width={720} height={204} alt="" />

        <div className={styles.subtitles}>
          <p>Descuentos y Promociones</p>
          <p>Precios Especiales</p>
          <p>Experiencias Únicas</p>
        </div>

        <p className={styles.message}>
          Con Seguro Peludo tienes acceso a un
          <strong> Club de beneficios</strong> digitales en diferentes
          establecimientos del país; mejor dicho, beneficios que vas a poder
          convertir en experiencias únicas e inolvidables.
        </p>
      </div>
      <div className={styles.buttonGroup}>
        <ArrowButton to="#" up />
      </div>
    </section>
  );
};
export default Club;
