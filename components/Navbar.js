import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="/">
          <a>{title}</a>
        </Link>
      </div>

      <button className={styles.toggle} onClick={toggleMenu}>
        <span className={styles.hamburger} aria-hidden="true"></span>
      </button>

      <ul className={`${styles.menu} ${isOpen ? styles.showMenu : ''}`}>
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
    </nav>
  );
}






