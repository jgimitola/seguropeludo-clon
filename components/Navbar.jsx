import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_Ul}>
        <li className={styles.mobileMenuButton}>
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            className={styles.mobileMenu_Icon}
            onClick={openMenu}
          />
        </li>
        <li className={(styles.navItem, styles.navBrand)}>
          <Link href="/">
            <a>
              <Image
                src="/assets/images/seguros_mundial_logo.svg"
                width={110}
                height={23}
                alt="Logo Seguros Mundial"
              />
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#por-que">
            <a>¿Por qué?</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#planes">
            <a>Nuestros Planes</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#mas-info">
            <a>¿Quieres más info?</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#club">
            <a>Club</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className={(styles.navItem, styles.startButton)}>
          <Link href="#comenzar">
            <a>Comenzar</a>
          </Link>
        </li>
        <li className={(styles.navItem, styles.contactButton)}>
          <Link href="https://www.seguropeludo.com.co/contacto.php">
            <a>Contáctanos</a>
          </Link>
        </li>
      </ul>
      <ul className={isOpen ? styles.mobileMenu : styles.hidden}>
        <li className={styles.mobileNavItem}>
          <Link href="#por-que">
            <a>¿Por qué?</a>
          </Link>
        </li>
        <li className={styles.mobileNavItem}>
          <Link href="#planes">
            <a>Nuestros Planes</a>
          </Link>
        </li>
        <li className={styles.mobileNavItem}>
          <Link href="#mas-info">
            <a>¿Quieres más info?</a>
          </Link>
        </li>
        <li className={styles.mobileNavItem}>
          <Link href="#club">
            <a>Club</a>
          </Link>
        </li>
        <li className={styles.mobileNavItem}>
          <Link href="#blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className={styles.mobileNavItem}>
          <Link href="#comenzar">
            <a>Comenzar</a>
          </Link>
        </li>
        <li className={styles.mobileNavItem}>
          <Link href="https://www.seguropeludo.com.co/contacto.php">
            <a>Contáctanos</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
