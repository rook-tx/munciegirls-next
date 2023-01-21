import Head from 'next/head'
import styles from '@/styles/Tour.module.scss'
import TourDates from 'components/sections/TourDates'

export default function Tour() {
  return (
    <>
      <Head>
        <title>Tour | Muncie Girls</title>
      </Head>
      <main className={styles.main}>
        <div className={`page ${styles.tour}`}>

          <div className={styles.content}>
            <h1>Tour</h1>

            <TourDates />
          </div>
        </div>
      </main>
    </>
  )
}
