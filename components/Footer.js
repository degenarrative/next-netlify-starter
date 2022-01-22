import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Twitter <img href="https://twitter.com/degenarrative" src="/twitter.svg" alt="Twitter Logo" className={styles.logo} />
        Discord <img href="https://discord.gg/ZStFS8cGUf" src="/discord.svg" alt="Discord Logo" className={styles.logo} />
      </footer>
    </>
  )
}
