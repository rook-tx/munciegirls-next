import '@/styles/globals.scss'
import Header from 'components/app/Header'
import Head from 'next/head'
import { Bebas_Neue } from '@next/font/google'

const inter = Bebas_Neue({
  weight: '400',
  subsets: [ 'latin' ]
})

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className} style={{height: '100%'}}>
      <Head>
        <meta name="description" content="Muncie Girls rawk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
