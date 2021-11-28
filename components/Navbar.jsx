import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Navbar.module.scss';

import segurosMundialLogo from '../assets/images/seguros_mundial_logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
                <Image src={segurosMundialLogo} alt="Logo Seguros Mundial" />
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#">
              <a>¿Por qué?</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#">
              <a>Nuestros Planes</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#">
              <a>¿Quieres más info?</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#">
              <a>Club</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#">
              <a>Blog</a>
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
            <Link href="#">
              <a>¿Por qué?</a>
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="#">
              <a>Nuestros Planes</a>
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="#">
              <a>¿Quieres más info?</a>
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="#">
              <a>Club</a>
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="#">
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="https://www.seguropeludo.com.co/contacto.php">
              <a>Contáctanos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
