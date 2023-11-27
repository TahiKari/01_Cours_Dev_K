import styles from './styles/children.module.css'

export default function Children() {
  return(
    <div className={styles.childrenDiv}>
      <h3 className={styles.childreTitle}>Je suis le composant enfant !</h3>
    </div>
  )
}