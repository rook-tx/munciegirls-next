import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './NavItem.module.scss'

export default function NavItem({ link }) {

  const router = useRouter()

  function getSpin() {
    return Math.round((Math.random() - 0.5) * 8)
  }

  const [ spin, setSpin ] = useState(0)

  useEffect(() => {
    setSpin(getSpin())
  }, [ router.pathname ])

  return (
    <li className={styles.navItem}>
      {
        link.name === 'Muncie Girls' ?
          <Link
            href={link.link}
            className={styles.logo}
            title="Home">
            <Image
              src="/images/logo.png"
              alt="Muncie Girls"
              height="53"
              width="150"
              priority
            />
          </Link> :

          RegExp('http').test(link.link) ?
            <Link
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className={styles.item}
              style={{
                transform: `rotateZ(${spin}deg)`
              }}
            >
              {link.name}
            </Link> :

            <Link
              href={link.link}
              className={`${styles.item} ${router.pathname == link.link ? styles['spoof-active'] : ''}`}
              // 	'spoof-active': link.link.includes('merch') && ($route.path.includes('product') || $route.path.includes('merch') || $route.path.includes('cart'))
              style={{
                transform: `rotateZ(${spin}deg)`
              }}
            >
              {link.name}
            </Link>
      }
    </li>
  )
}
