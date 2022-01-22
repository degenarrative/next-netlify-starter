import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Twitter <a href="https://twitter.com/degenarrative"><img src="/twitter.svg" alt="Twitter Logo" className={styles.logo} /></a>
        Discord <a href="https://discord.gg/ZStFS8cGUf"><img src="/discord.svg" alt="Discord Logo" className={styles.logo} /></a>
      </footer>
    </>
  )
}
