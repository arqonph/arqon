import Head from 'next/head'
import Navbar from '../components/landing/Navigation-bar'
import Footer from '../components/landing/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>ARQON</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="Website for ARQON" />
        <link rel="icon" href='/Arqon-Logos-A-White.jpg'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <footer>
        <Footer />
      </footer>
    </>
  )
}
