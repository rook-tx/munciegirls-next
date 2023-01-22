import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'

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

          <div className={styles.album}>
            <div className={styles.image}>
              <Image
                alt="Fixed Ideals album cover"
                src="/images/fixed_ideals_cover.jpg"
                width="1464"
                height="1464"
              />
            </div>
          </div>

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
