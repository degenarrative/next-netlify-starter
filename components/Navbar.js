import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}









