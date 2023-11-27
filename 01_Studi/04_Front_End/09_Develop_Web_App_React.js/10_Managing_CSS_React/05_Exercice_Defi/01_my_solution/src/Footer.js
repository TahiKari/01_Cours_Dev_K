import styles from './styles/footer.module.css'

export default function Footer () {
  return (
    <div className={styles.container}>
      <h2 className={styles.titleFooter}>Ceci est le titre du footer</h2>
      <p className={styles.paraFooter}>Ceci est le paragraphe du footer</p>
    </div>
  )
}
