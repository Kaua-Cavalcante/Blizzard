import { useState } from 'react'
import { IconArrowDown } from 'static'
import styles from './styles.module.scss'

const GAMES = [
  'Overwatch',
  'COD: Warzone',
  'World of Warcraft',
  'Diablo',
  'Starcraft'
]

const ESPORTS = [
  'Liga de Overwatch',
  'Copa Mundial de Overwatch',
  'Hearthstone Masters',
  'StarCraft II WCS',
  'Campeonato Mundial de Arena World of Warcraft'
]

type NavItemsProps = 'games' | 'esports' | ''

export const Header = () => {
  const [activeNavItem, setActiveNavItem] = useState<NavItemsProps>('')

  const handleActiveNavItem = (navItemKey: NavItemsProps): void => {
    const isClose = navItemKey === activeNavItem
    setActiveNavItem(isClose ? '' : navItemKey)
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/logo.png" alt="Logo da Blizzard" />

        <nav>
          <ul className={styles.navigation}>
            <li className={activeNavItem === 'games' ? styles.active : ''}>
              <span onClick={() => handleActiveNavItem('games')}>
                Jogos <IconArrowDown />
              </span>
              <ul className={styles.dropdown}>
                {GAMES.map(game => (
                  <li key={game} className={styles.dropdown__item}>
                    {game}
                  </li>
                ))}
              </ul>
            </li>
            <li className={activeNavItem === 'esports' ? styles.active : ''}>
              <span onClick={() => handleActiveNavItem('esports')}>
                Esports <IconArrowDown />
                <ul className={styles.dropdown}>
                  {ESPORTS.map(esport => (
                    <li key={esport} className={styles.dropdown__item}>
                      {esport}
                    </li>
                  ))}
                </ul>
              </span>
            </li>
            <li>Loja</li>
            <li>Notícias</li>
            <li>Suporte</li>
          </ul>
        </nav>

        <div className={styles.buttons}>
          <button type="button">Criar conta</button>
          <button type="button">Logar</button>
        </div>
      </div>
    </header>
  )
}
