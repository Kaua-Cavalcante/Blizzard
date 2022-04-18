import styles from './styles.module.scss'
import { Header } from 'components/Header'

export const Banner = () => (
  <section className={styles.container}>
    <div className={styles.content}>
      <Header />
    </div>
  </section>
)
