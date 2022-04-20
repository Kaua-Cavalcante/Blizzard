import {
  IconBattleNet,
  IconNintendo,
  IconPlaystation,
  IconXbox,
  IconLink,
  IconPoints
} from 'static'
import Link from 'next/link'
import styles from './styles.module.scss'
import games from '../../data/games.json'

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

      <div className={styles.games}>
        {games.map(game => (
          <div className={styles.game} key={game.name}>
            <span>
              <img src={game.image} alt={`Imagem do jogo ${game.name}`} />
            </span>
            <strong>{game.name}</strong>
            <p>{game.category}</p>
          </div>
        ))}
        <div className={styles['more-games']}>
          <img src="/logo.png" alt="Logo da Blizzard" />
          <a href="">
            <IconPoints />
            Ver todos os jogos
          </a>
        </div>
      </div>
    </div>
  </section>
)
