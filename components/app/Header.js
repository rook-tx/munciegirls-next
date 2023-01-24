import styles from './Header.module.scss'
import NavItem from '../modules/NavItem'
import Socials from '../modules/Socials'

export default function Header() {

  const nav = [
    {
      name: 'Muncie Girls',
      link: '/'
    },
    {
      name: 'Merch',
      link: 'https://munciegirls.bandcamp.com/merch'
    },
    {
      name: 'Tour',
      link: '/tour'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ]

  return (
    <header>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            { nav.map((item) => (
              <NavItem
                key={item.link}
                link={item}
              />
            )) }
          </ul>
        </nav>

        <Socials />
      </div>
    </header>
  )
}
