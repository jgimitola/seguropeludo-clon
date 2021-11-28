import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Hero.module.scss';
import ArrowButton from './ArrowButton';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gradient}>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src="/assets/images/seguro_peludo_logo.svg"
            width={350}
            height={154}
            alt="¡Protege a los que más amas!"
          />
          <input
            className={styles.inputHero}
            type="text"
            placeholder="Nombre de tu peludito"
          />
          <Link href="#comenzar">
            <a>
              <button className={styles.actionButton}>CONOCE MÁS</button>
            </a>
          </Link>
          <div className={styles.nextButton}>
            <ArrowButton to="#por-que" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
