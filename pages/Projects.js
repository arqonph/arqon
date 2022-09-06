import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '/components/landing/Navigation-bar'
import Footer from '/components/landing/Footer'
import arqonTopImg from '/assets/01_Arqon_top_image.jpg'
import project1 from '/assets/01_Arqon_Projects_01.jpg'
import project2 from '/assets/01_Arqon_Projects_02.jpg'
import project3 from '/assets/01_Arqon_Projects_03.jpg'
import project4 from '/assets/01_Arqon_Projects_04.jpg'

export default function Projects() {
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
        <p className='page-title'>Projects</p>
      </div>

      <div className='container'>
        <div class='row'>
          <div className='col-md-2'>
            <span>&nbsp;</span>
          </div>
          <div className='col-md-8 text-center'>
            <div className='page-desc_border-bottom'>
              <span className='page-desc-black'>Our</span>&nbsp;&nbsp;<span className='page-desc-turquoise'>EXPERTISE</span><span className='page-desc-black'>&nbsp;from client-tested</span>&nbsp;&nbsp;<span className='page-desc-turquoise'>EXPERIENCE.</span>
            </div>
          </div>
          <div className='col-md-2'>
            <span>&nbsp;</span>
          </div>
        </div>
        <div class='row'>
            <div className='col-md-2'>
                <span>&nbsp;</span>
            </div>
            <div className='col-md-8 text-center'>           
                <div className=''>
                    <br/><p>It's not just about our more than<span className='page-desc-turquoise-sm'>16 years</span>  
                    &nbsp;of design and project management experience we have under our belt. Our credentials 
                        include leading the architectural teams responsible for some of the most distinguished
                        <span className='page-desc-black-sm'>&nbsp; residential, office and commercial &nbsp;</span>developments in the country.</p>
                </div>
            </div>
            <div className='col-md-2'>
            <span>&nbsp;</span>
          </div>
        </div>
        <br></br>
      </div>

      <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-6'>
              <div className='card'>
                <Image className='card-img-top' src={project1} />
                <div className='card-bg'>
                    <span className='card-title'>&nbsp;&nbsp;V Residence</span><br/>
                    <span className='card-text'>&nbsp;&nbsp;Ayala Alabang Village, Muntinlupa</span>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='card'>
                <Image className='card-img-top' src={project2} />
                <div className='card-bg'>
                    <span className='card-title'>&nbsp;&nbsp;N Residence</span><br/>
                    <span className='card-text'>&nbsp;&nbsp;Angono, Rizal</span>
                </div>
              </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-md-6'>
              <div className='card'>
                <Image className='card-img-top' src={project3} />
                <div className='card-bg'>
                    <span className='card-title'>&nbsp;&nbsp;S Residence</span><br/>
                    <span className='card-text'>&nbsp;&nbsp;Parkridge Estate, Antipolo, Rizal</span>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='card'>
                <Image className='card-img-top' src={project4} />
                <div className='card-bg'>
                    <span className='card-title'>&nbsp;&nbsp;D Residence</span><br/>
                    <span className='card-text'>&nbsp;&nbsp;BF Homes, Quezon City</span>
                </div>
              </div>
            </div>
        </div>

        </div>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
