import Star from 'components/modules/Star'
import { useEffect, useState } from 'react'
import styles from './Stars.module.scss'

export default function Stars() {

  const [ length, setLength ] = useState(25)

  const [ stars, setStars ] = useState([])

  function pos() {
    let left = Math.random() * 37
    let top = Math.random() * (100 - 8) + 3

    if (Math.round(Math.random() * 52) % 2) {
      left = 100 - left
    }

    if (Math.round(Math.random() * 52) % 2) {
      top = 100 - top
    }

    return {
      left: `${left}%`,
      top: `${top}%`
    }
  }

  function getLength() {
    setLength(Math.ceil(25 / 1300 * Math.max(window.innerWidth, window.innerHeight)))
  }

  useEffect(() => {
    getLength()
  }, [])

  const [ refresh, setRefresh ] = useState(true)

  useEffect(() => {

    function refreshStars() {
      const newStars = []

      for (let i = 0; i < length; i++) {
        newStars.push({
          ridx: Math.round(Math.random() * 52),
          pos: pos()
        })
      }

      setStars(newStars)
      setRefresh(false)

      requestAnimationFrame(() => {
        randoClock()
      })
    }

    let timeout

    function randoClock() {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        if (!refresh) {
          setRefresh(true)
          setTimeout(() => {
            refreshStars()
          }, 1000)
        }
      }, 5000)
    }

    refreshStars()
  }, [ length ])

  return (
    <div className={styles.stars}>
      { stars.map((star, idx) => (
        <div key={idx}
          style={star.pos}
          className={`${styles.s}`}
        >
          <img
            className={`${styles.simg} ${styles[`s-${idx + 1}`]} ${refresh ? styles.enter : styles.leave}`}
            src={`/images/stars/star-${star.ridx}.png`}
            alt=""
          />
        </div>
      )) }
    </div>
  )
}
