import styles from './Header.module.css'

export default function Header({ title, imageUrl }) {
  return (
    <header className={styles.header}>
      <div className="banner banner-container">
        <div className="banner-image">
          <img src={imageUrl} alt="Degenarrative Banner Image" />
        </div>
      </div>
      <h1 className={styles.title}>{title}</h1>
    </header>
  )
}
