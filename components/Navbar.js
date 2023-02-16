import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.navbarBrand}>Degenarrative</a>
      </Link>
      <button
        className={styles.navbarToggle}
        onClick={toggleNavbar}
        aria-label="Toggle Navigation"
      >
        <span className={styles.iconBar}></span>
        <span className={styles.iconBar}></span>
        <span className={styles.iconBar}></span>
      </button>
      <ul
        className={`${styles.navbarNav} ${isOpen ? styles.open : ''}`}
        onClick={toggleNavbar}
      >
        <li className={styles.navItem}>
          <Link href="/">
            <a className={styles.navLink}>Home</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <a className={styles.navLink}>About</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
            <a className={styles.navLink}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}







