import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import styles from './TourDate.module.scss'

export default function TourDate({ date }) {
  const [ fullDate, setFullDate ] = useState('')
  const [ venue, setVenue ] = useState('')
  const [ location, setLocation ] = useState('')

  useEffect(() => {
    setFullDate(dayjs(date.start.date).format('ddd D MMM'))

    setVenue(date.venue.displayName)

    const loc = (date.venue.metroArea.state ?
      `${date.venue.metroArea.displayName}, ${date.venue.metroArea.state.displayName}, `
      : `${date.venue.metroArea.displayName}, `) +
          date.venue.metroArea.country.displayName

    setLocation(loc)
  }, [ date ])

  return (
    <li className={styles['tour-date']}>
      <div className="venue">
        <h3>{venue}</h3>
        <h4>{location}</h4>
      </div>

  		<div className={styles.details}>
	  		<div className="date">{fullDate}</div>

        <a href={date.uri} title="Get Tickets"
          target="_blank" rel="noopener noreferrer">Get Tickets</a>
      </div>
    </li>
  )
}
