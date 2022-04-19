import styles from './styles.module.scss'
import { Header } from 'components/Header'
import { IconPlay } from 'static'

export const Banner = () => (
  <section className={styles.container}>
    <div className={styles.content}>
      <Header />
      <div className={styles.information}>
        <div className={styles.information__images}>
          <img src="/games/diablo.png" alt="diablo" />
          <img src="/games/hearthstone.png" alt="hearthstone" />
          <img src="/games/wow.png" alt="world of warcraft" />
          <img src="/games/diablo1.png" alt="diablo immortal" />
          <img src="/games/starcraft.png" alt="starcraft" />
        </div>

        <div className={styles.information__text}>
          <h1>Retorne à escuridão com o game Diablo IV</h1>
          <p>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
          <button type="button">Jogue agora</button>
        </div>

        <div className={styles.information__game}>
          <img src="/diablo-logo.png" alt="Logo Diablo" />
          <strong>Assista o trailer</strong>

          <div className={styles.trailer}>
            <img src="/trailer.png" alt="trailer" />
            <button type="button">
              <IconPlay />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
)
