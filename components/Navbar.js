import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">
            <a className={styles.navLink}>degenarrative</a>
          </Link>
        </li>
        <li>
          <Link href="#nerd">
            <a className={styles.navLink}>NERD</a>
          </Link>
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










