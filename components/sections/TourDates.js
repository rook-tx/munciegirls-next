import Link from 'next/link'
import TourDate from 'components/modules/TourDate'
import { useEffect, useState } from 'react'

import styles from './TourDates.module.scss'
import Songkick from 'components/svg/Songkick'

export default function TourDates() {
  const [ dates, setDates ] = useState([])

  const artistUrl = 'https://www.songkick.com/artists/10082157-lande-hekt'
  const artistId = 10082157
  const apiKey = 'FwkcBPF5yvACSkxK'
  const reqUrl = `https://api.songkick.com/api/3.0/artists/${artistId}/calendar.json?apikey=${apiKey}`

  async function jet(url) {
    const data = await fetch(url)
    const res = await data.json()
    return res
  }

  useEffect(() => {
    jet(reqUrl).then(songkickDates => {
      if (songkickDates.resultsPage) {
        songkickDates = songkickDates.resultsPage.results.event

        const newDates = []

        if (songkickDates && songkickDates.length > 0) {
          for (let i = 0; i < songkickDates.length; i++) {
            newDates.push(songkickDates[i])
          }
        } else {
          console.log(songkickDates)
        }

        setDates(newDates)
      }
    })
  }, [ reqUrl ])

  return (
    <div className={styles.listing}>
      <ol className="dates">
        {
          dates.map((date, index) => (
            <TourDate
              key={index}
              date={date}
            />
          ))
        }
      </ol>

      { dates.length < 0 &&
        <h2 className={styles['no-dates']}>{'We’ll be back soon!'}</h2>
      }

      <div className={styles.credit}>
        <Link href={artistUrl}
          target="_blank" rel="noopener"
          title="Powered by Songkick">
          <Songkick />
        </Link>
      </div>
    </div>
  )
}

