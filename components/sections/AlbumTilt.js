import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './AlbumTilt.module.scss'

export default function AlbumTilt() {

  const delta = { x: 0, y: 0 }
  const win = { x: 0, y: 0 }

  function bigTilt() {
    return 'translate3d(0,0,0) ' + `rotateX(${delta.y * -5}deg) rotateY(${delta.x * 5}deg)`
  }

  const [ tilt, setTilt ] = useState('translate3d(0,0,0) rotateX(0deg) rotateY(0deg)')

  // useEffect(() => {
  //   setTilt(bigTilt())
  // }, [ delta.x ])

  function momo(e) {
    delta.x = (e.clientX - win.x / 2) / (win.x / 2)
    delta.y = (e.clientY - win.y / 2) / (win.y / 2)
    setTilt(bigTilt())
  }

  useEffect(() => {
    win.x = window.innerWidth
    win.y = window.innerHeight
    window.addEventListener('mousemove', momo, { passive: true })

    return () => {
      window.removeEventListener('mousemove', momo, { passive: true })
    }
  }, [])

  return (
    <div className={styles.album}>
      <div className={styles.image}
        style={{
          transform: tilt
        }}>
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
