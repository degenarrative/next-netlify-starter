import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  function scrollToNerdSection(event) {
    event.preventDefault();
    const nerdSection = document.getElementById('nerd-section');
    nerdSection.scrollIntoView({ behavior: 'smooth' });
  }

  function handleScroll() {
    const offset = window.pageYOffset;
    setIsSticky(offset > 0);
  }

  // Attach scroll event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <nav className={`${styles.nav} ${isSticky ? styles.sticky : ''}`}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">
            <a className={styles.navLink}>degenarrative</a>
          </Link>
        </li>
        <li className={styles.navListItem}>
          <a href="#" onClick={scrollToNerdSection} className={styles.navLink}>NERD</a>
        </li>
        <li className={styles.navListItem}>
          <Link href="https://coda.io/form/Neo-Elite-Radical-Degens_dtwh87bz2h-">
            <a className={styles.navButton}>Sign Up</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}










