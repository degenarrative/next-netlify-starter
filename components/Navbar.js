import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarTitle}>{title}</div>
      <button className={styles.hamburger} onClick={handleToggle}>
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li className={styles.navLink}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}







