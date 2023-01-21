import styles from './Header.module.scss'
import NavItem from './NavItem'

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
    <nav className={styles.nav}>
      { nav.map((item) => (
        <NavItem
          key={item.link}
          link={item}
        />
      )) }
    </nav>
  )
}
