import Head from 'next/head'
import Navbar from '../components/landing/Navigation-bar'
import Footer from '../components/landing/Footer'
import HomePageBody from '../components/landing/HomePageBody'
import Hero from '../components/landing/Hero'
import Services from '../components/landing/Services'
import Projects from '../components/landing/Projects'
import ContactUs from '../components/landing/ContactUs'
import Clientreview from '../components/landing/Clientreview'

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
      <Hero />
      <Services />
      <HomePageBody />
      <Projects />
      {/* <Clientreview /> */}
      <ContactUs />
      <footer>
        <Footer />
      </footer>
    </>
  )
}
