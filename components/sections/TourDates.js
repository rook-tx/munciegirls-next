import Link from 'next/link'
import TourDate from 'components/modules/TourDate'
import { useEffect, useState } from 'react'

import styles from './TourDates.module.scss'
import Songkick from 'components/svg/Songkick'

export default function TourDates({ dates }) {

  const artistUrl = 'https://www.songkick.com/artists/4326711-muncie-girls'

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

      { dates.length < 1 &&
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

