import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar({ title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <div className={styles.brand}>
          <Link href="/">
            <a>{title}</a>
          </Link>
        </div>
        <button className={styles.toggle} onClick={handleMenuToggle}>
          <span className={styles.toggleIcon} aria-hidden="true"></span>
        </button>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}






