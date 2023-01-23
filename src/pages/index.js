import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
import AlbumTilt from 'components/sections/AlbumTilt'

export default function Home() {
  return (
    <>
      <Head>
        <title>Muncie Girls</title>
      </Head>
      <main className={styles.main}>
        <div className={`page ${styles.home}`}>
          <h1>Fixed Ideals</h1>

          <div className={styles.bg} />

          <AlbumTilt />

          <div className="cta">
            <a className={styles.preorder}
              href="https://munciegirls.bandcamp.com/album/fixed-ideals-3"
              target="_blank"
              rel="noopener noreferrer"
              title="Order now">
              Order now
            </a>

            <Link
              className={styles.second}
              href="/tour">
              Buy tickets
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
