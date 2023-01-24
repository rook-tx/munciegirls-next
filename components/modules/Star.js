import { useEffect, useState } from 'react'
import styles from './Star.module.scss'

export default function Star({ idx = 0, ridx = 1, style }) {
  const [ ve, setVe ] = useState(true)

  useEffect(() => {
    console.log('effect')
    setVe(true)
    setTimeout(() => {
      setVe(false)
    }, 500)
  }, [ ridx ])

  return (
    // <div
    //   className={`${styles.s} ${styles[`s-${idx + 1}`]} ${ve ? styles.enter : ''}`}
    //   style={style}
    // >
    <div>
      <img src={`/images/stars/star-${ridx}.png`} alt="" />
    </div>
  )
}
