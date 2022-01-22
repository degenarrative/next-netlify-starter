import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Twitter <img src="/twitter.svg" alt="Twitter Logo" className={styles.logo} />
        Discord <img src="/discord.svg" alt="Discord Logo" className={styles.logo} />
      </footer>
    </>
  )
}
