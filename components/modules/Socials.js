import Link from 'next/link'
import styles from './Socials.module.scss'

import Apple from 'components/svg/Apple'
import Bandcamp from 'components/svg/Bandcamp'
import Facebook from 'components/svg/Facebook'
import Instagram from 'components/svg/Instagram'
import Spotify from 'components/svg/Spotify'
import Twitter from 'components/svg/Twitter'

const components = {
  'apple_music': Apple,
  'bandcamp': Bandcamp,
  'facebook': Facebook,
  'instagram': Instagram,
  'spotify': Spotify,
  'twitter': Twitter
}

export default function Socials() {
  const social = [
    {
      id: 'spotify',
      url: 'https://open.spotify.com/artist/0ROJnWSWDBDXsKFh0ytRDJ',
      title: 'Listen to Muncie Girls on Spotify'
    },
    {
      id: 'apple_music',
      url: 'https://itunes.apple.com/artist/muncie-girls/545285334',
      title: 'Listen to Muncie Girls on Apple Music'
    },
    {
      id: 'bandcamp',
      url: 'https://munciegirls.bandcamp.com/',
      title: 'Listen to Muncie Girls on Bandcamp'
    },
    // {
    // id: 'play',
    // 	url: 'https://play.google.com/store/music/artist/Muncie_Girls?id=Aqqvmlpweboegqecimz5i3nooci',
    // title: 'Listen to Muncie Girls on Google Play'
    // },
    {
      id: 'instagram',
      url: 'https://www.instagram.com/munciegirls/',
      title: 'Follow Muncie Girls on Instagram'
    },
    {
      id: 'facebook',
      url: 'https://www.facebook.com/munciegirls',
      title: 'Follow Muncie Girls on Facebook'
    },
    {
      id: 'twitter',
      url: 'https://twitter.com/munciegirls',
      title: 'Follow Muncie Girls on Twitter'
    }
  ]

  function mapComp(id) {
    const Component = components[id]
    return <Component />
  }

  return (
    <div className={styles.socials}>
      {
        social.map(site => (
          <Link
            key={site.url}
            href={site.url}
            title={site.title}
            target="_blank"
            rel="noopener"
          >
            { mapComp(site.id) }
          </Link>
        ))
      }
    </div>
  )
}
