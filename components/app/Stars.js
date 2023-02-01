// import Star from 'components/modules/Star'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './Stars.module.scss'

export default function Stars() {

  const [ length, setLength ] = useState(25)

  const [ stars, setStars ] = useState([])

  function pos(n) {
    const alpha = 2 * Math.PI / length

    const height = window.innerHeight / 2
    const width = window.innerWidth / 2

    const radius = Math.max(height, width)

    let left = width
    let top = height

    if (n  < 0.25) {
      left = width +
        Math.sin(n * alpha) * ((Math.random() * 0.75 + 0.25) * radius)
      top = height -
        Math.cos(n * alpha) * ((Math.random() * 0.75 + 0.25) * radius)
    }
    if (n / length < 0.5) {
      left = width +
        Math.sin((length / 2 - n) * alpha) * ((Math.random() * 0.75 + 0.25) * radius)
      top = height +
        Math.cos((length / 2 - n) * alpha) * ((Math.random() * 0.75 + 0.25) * radius)
    }
    if (n / length < 0.75) {
      left = width -
        Math.sin((n - length / 2) * alpha) * ((Math.random() * 0.75 + 0.25) * radius)
      top = height +
        Math.cos((n - length / 2) * alpha) * ((Math.random() * 0.75 + 0.25) * radius)
    }
    if (n / length <= 1) {
      left = width -
        Math.sin((length - n) * alpha) * ((Math.random() * 0.75 + 0.25) * radius)
      top = height -
        Math.cos((length - n) * alpha) * ((Math.random() * 0.75 + 0.25) * radius)
    }

    return {
      left: `${Math.round(left)}px`,
      top: `${Math.round(top)}px`
    }
  }

  function getLength() {
    console.log('get length')
    const length = Math.ceil(22 / 1300 * Math.max(window.innerWidth, window.innerHeight))
    const max = (length % 2 === 1) ? length : length + 1
    setLength(max)
  }

  useEffect(() => {
    getLength()
  }, [])

  const [ refresh, setRefresh ] = useState(true)

  let idx = 0
  let timeout

  function randoClock() {
    clearTimeout(timeout)
    console.log('clock', refresh, idx)
    timeout = setTimeout(() => {
      refreshStars()
    }, 10000)
  }

  function initStars(length) {
    console.log('init', idx)

    const newStars = []

    for (let i = 0; i < length; i++) {
      newStars.push({
        ridx: Math.round(Math.random() * 52),
        pos: pos(i)
      })
    }

    setStars(newStars)
    randoClock()

    setTimeout(() => {
      setRefresh(false)
    }, 300)

    idx++

    // setTimeout(() => {
    // }, 1000)
    //   randoClock()
    // }, 100)
  }

  function refreshStars() {
    console.log('refresh', refresh, idx)
    if (refresh) { return }

    setRefresh(true)

    const newStars = stars.map((star) => {
      return {
        ...star,
        ridx: Math.round(Math.random() * 52),
      }
    })

    setTimeout(() => {
      setStars(newStars)
      randoClock()

      setTimeout(() => {
        setRefresh(false)
      }, 300)
    }, 1000)

    // requestAnimationFrame(() => {
    // })
  }

  useEffect(() => {
    initStars(length)
  }, [ length ])

  return (
    <div className={styles.stars}>
      { stars.map((star, idx) => (
        <div key={idx}
          style={star.pos}
          className={`${styles.s}`}
        >
          <Image
            className={`${styles.simg} ${styles[`s-${idx + 1}`]} ${refresh ? styles.enter : styles.in}`}
            src={`/images/stars/star-${star.ridx}.png`}
            alt=""
            width="40"
            height="40"
          />
        </div>
      )) }
    </div>
  )
}
