import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar({ title }) {
  function toggleMenu() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.navLinks');
    navbarToggle.classList.toggle('active');
    navLinks.classList.toggle('showMenu');
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="/">
          <a>{title}</a>
        </Link>
      </div>
      <button className={`${styles.navbarToggle} navbar-toggle`} onClick={toggleMenu}>
        <div className={styles.iconBar}></div>
        <div className={styles.iconBar}></div>
        <div className={styles.iconBar}></div>
      </button>
      <div className={`${styles.navLinks} navLinks`}>
        <Link href="/about">
          <a className={styles.navItem}>About</a>
        </Link>
        <Link href="/blog">
          <a className={styles.navItem}>Blog</a>
        </Link>
        <Link href="/contact">
          <a className={styles.navItem}>Contact</a>
        </Link>
      </div>
    </nav>
  );
}



