import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">
            <a className={styles.navLink}>Home</a>
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link href="/signup">
            <a className={styles.navButton}>Sign Up</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}










