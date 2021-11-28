import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/ArrowButton.module.scss';

const ArrowButton = ({ up, to, className, ...rest }) => {
  return (
    <>
      <Link href={to}>
        <a className={styles.button} {...rest}>
          <FontAwesomeIcon icon={up ? faChevronUp : faChevronDown} size="lg" />
        </a>
      </Link>
    </>
  );
};

export default ArrowButton;
