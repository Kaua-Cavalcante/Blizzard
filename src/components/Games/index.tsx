import {
  IconBattleNet,
  IconNintendo,
  IconPlaystation,
  IconXbox,
  IconLink
} from 'static'
import Link from 'next/link'
import styles from './styles.module.scss'

export const Games = () => (
  <section className={styles.container}>
    <div>
      <div className={styles.content}>
        <small>Games</small>
        <h2>Jogos exclusivos</h2>

        <div className={styles.platforms}>
          <IconBattleNet />
          <IconNintendo />
          <IconXbox />
          <IconPlaystation />
        </div>

        <Link href="/games">
          <a>
            <IconLink />
            Ver todos os jogos
          </a>
        </Link>
      </div>
    </div>
  </section>
)
