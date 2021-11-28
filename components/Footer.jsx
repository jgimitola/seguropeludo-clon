import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faCcVisa,
  faCcMastercard,
} from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerItem}>
          <p className={styles.title}>Síguenos en redes sociales:</p>
          <div className={styles.iconSet}>
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </div>
        </div>

        <div className={styles.footerItem}>
          <p className={styles.title}>Medios de Pago</p>
          <div className={styles.iconSet}>
            <FontAwesomeIcon icon={faCcVisa} size="2x" />
            <FontAwesomeIcon icon={faCcMastercard} size="2x" />
          </div>
        </div>

        <div className={styles.footerItem}>
          <p className={styles.title}>Ayuda</p>
          <div className={styles.helpLinks}>
            <Link href="https://www.seguropeludo.com.co/terminos-condiciones.php">
              <a>Términos y condiciones</a>
            </Link>
            <Link href="https://www.seguropeludo.com.co/politica-datos.php">
              <a>Políticas de privacidad</a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
