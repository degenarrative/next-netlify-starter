import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar({ title }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="/">
          <a>{title}</a>
        </Link>
      </div>
      <button className={styles['navbar-toggle']} onClick={toggleMenu}>
        <div className={styles.iconBar}></div>
        <div className={styles.iconBar}></div>
        <div className={styles.iconBar}></div>
      </button>
      <div className={`${styles.navLinks} ${showMenu ? 'showMenu' : ''}`}>
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




