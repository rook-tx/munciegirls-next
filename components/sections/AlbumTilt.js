import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './AlbumTilt.module.scss'

export default function AlbumTilt() {

  const delta = { x: 0, y: 0 }

  function bigTilt() {
    return 'transform:translate3d(0,0,0) ' + `rotateX(${delta.y * -5}deg) rotateY(${delta.x * 5}deg)`
  }

  const [ tilt, setTilt ] = useState('transform:translate3d(0,0,0) rotateX(0deg) rotateY(0deg)')

  useEffect(() => {
    setTilt(bigTilt())
  }, [ delta.x, delta.y ])

  return (
    <div className={styles.album}>
      <div className={styles.image}>
        <Image
          alt="Fixed Ideals album cover"
          src="/images/fixed_ideals_cover.jpg"
          width="1464"
          height="1464"
          priority
        />
      </div>
    </div>
  )
}
