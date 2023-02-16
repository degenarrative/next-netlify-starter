import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={`${styles.navbar}`}>
      <button
        className={`${styles.navbarToggle}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className={`${styles.iconBar}`}></span>
        <span className={`${styles.iconBar}`}></span>
        <span className={`${styles.iconBar}`}></span>
      </button>
      <ul className={`${styles.navList} ${isOpen ? styles.showMenu : ''}`}>
        <li className={styles.navItem}>
          <Link href="/">
            <a className={styles.navLink}>Home</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <a className={styles.navLink}>About</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
            <a className={styles.navLink}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}


