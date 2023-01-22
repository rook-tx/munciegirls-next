import Head from 'next/head'
import styles from '@/styles/Contact.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact | Muncie Girls</title>
      </Head>
      <main className={styles.main}>
        <div className={`page ${styles.contact}`}>

          <div className={styles.content}>
            <div className={styles.details}>
              <div className={styles['one-col']}>
                <h1>Contact</h1>
              </div>

              <div className={styles['two-col']}>
                <h2>General Enquiries</h2>
                <p>
                  <Link href="mailto:munciegirls@gmail.com" target="_blank" rel="noopener" title="Email h3 Sarah Maynard">munciegirls@gmail.com</Link></p>

                <h2>Booking</h2>
                <p>
                  <span>UK/EU</span>
                  <Link href="mailto:ed@primarytalent.com" target="_blank" rel="noopener" title="Email Ed Sellers">ed@primarytalent.com</Link></p>

                <p>
                  <span>US</span>
                  <Link href="mailto:scott@pinnacleentertainmentinc.com " target="_blank" rel="noopener" title="Email Scott Sokol">scott@pinnacleentertainmentinc.com</Link></p>

                <p>
                  <span>US</span>
                  <Link href="mailto:james@pinnacleentertainmentinc.com" target="_blank" rel="noopener" title="Email James Snell">james@pinnacleentertainmentinc.com</Link></p>
              </div>

              <div className={styles['two-col']}>
                <h2>Management</h2>
                <p>
                  <Link href="mailto:sarah@itsforfriends.com" target="_blank" rel="noopener" title="Email h3 Sarah Maynard">sarah@itsforfriends.com</Link></p>

                <p>
                  <Link href="mailto:andrew@itsforfriends.com" target="_blank" rel="noopener" title="Email Andrew Kelly">andrew@itsforfriends.com</Link></p>

                <h2>Publicist</h2>
                <p>
                  <span>UK/EU</span>
                  <Link href="mailto:maynard@majortransmission.com" target="_blank" rel="noopener" title="Email Sarah Maynard">maynard@majortransmission.com</Link></p>

                <p>
                  <span>US</span>
                  <Link href="mailto:tom@hivemindpr.com" target="_blank" rel="noopener" title="Email Sarah Maynard">tom@hivemindpr.com</Link></p>
              </div>
            </div>
          </div>

          <div className={styles.bg} />
        </div>
      </main>
    </>
  )
}
