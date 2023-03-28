import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="https://twitter.com/degenarrative"><img src="/twitter.svg" alt="Twitter Logo" className={styles.logo} />Twitter</a>
      </footer>
    </>
  )
}
