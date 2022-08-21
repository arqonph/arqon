import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '/components/landing/Navigation-bar'
import Footer from '/components/landing/Footer'
import arqonTopImg from '/assets/01_Arqon_top_image.jpg'

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
      <div className='img-fluid img-hero'>
        <Image src={arqonTopImg}/>
        <p className='page-title'>Contact Us</p>

        <div className='container page-center'>
          <span className='page-desc-black'>We value</span>&nbsp;<span className='page-desc-turquoise'>INTEGRITY</span>
        </div>
        <div className='container page-center'>
          <br/><span>For our brand's personality -- cool, creative, modern, professional,</span>
        </div>
        <div className='container page-center'>
          <br/><span>contemporary, strong, tasteful, with <b>integrity</b></span>
        </div>

      </div>
     
      <footer>
        <Footer />
      </footer>
    </>
  )
}
