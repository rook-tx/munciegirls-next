import Head from 'next/head'
import styles from '@/styles/Tour.module.scss'
import TourDates from 'components/sections/TourDates'
import { getSongkickDates } from 'components/js/utils'
import { useEffect, useState } from 'react'

export default function Tour({ propDates = [] }) {

  const [ dates, setDates ] = useState(propDates)

  useEffect(() => {
    async function updates() {
      const newDates = await getSongkickDates()
      setDates(newDates)
    }
    updates()
  }, [])

  return (
    <>
      <Head>
        <title>Tour | Muncie Girls</title>
      </Head>
      <main className={styles.main}>
        <div className={`page ${styles.tour}`}>

          <div className={styles.content}>
            <h1>Tour</h1>

            <TourDates
              dates={dates}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps({ }) {

  const newDates = await getSongkickDates()

  return {
    props: {
      propDates: newDates
    }
  }
}
