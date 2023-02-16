import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <button className={styles.hamburger} onClick={handleClick}>
          <div className={open ? styles.line1open : styles.line1}></div>
          <div className={open ? styles.line2open : styles.line2}></div>
          <div className={open ? styles.line3open : styles.line3}></div>
        </button>
        <ul className={`${styles.navLinks} ${open ? styles.navOpen : ''}`}>
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
      </div>
    </nav>
  );
}








