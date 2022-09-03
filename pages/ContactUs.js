import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '/components/landing/Navigation-bar'
import Footer from '/components/landing/Footer'
import arqonTopImg from '/assets/01_Arqon_top_image.jpg'
import contactUs1 from '/assets/05_Arqon_Contact Us_01.jpg'
import contactUs2 from '/assets/05_Arqon_Contact Us_02.jpg'
import contactUs3 from '/assets/05_Arqon_Contact Us_03.jpg'
import contactUs4 from '/assets/05_Arqon_Contact Us_04.jpg'

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
      </div>


        <div className='container page-center page-desc_border-bottom'>
          <span className='page-desc-black'>We value</span>&nbsp;<span className='page-desc-turquoise'>INTEGRITY</span>
        </div>
        <div className='container page-center'>
          <br/><span>For our brand's personality -- cool, creative, modern, professional,</span>
        </div>
        <div className='container page-center'>
          <br/><span>contemporary, strong, tasteful, with <b>integrity</b></span>
        </div>
        <br/>
        <div class='container'>
          <div class='row'>
            <div className='col-md-4 text-center'>
              <span>+63 917 817 4612</span><br/>
              <span>Call us anytime from</span><br/>
              <span>Monday to Friday, 8am to 5pm.</span>
            </div>
            <div className='col-md-4 text-center'>
              <span>info@arqon.com.ph</span><br/>
              <span>Eeail us anytime,</span><br/>
              <span>we usually reply within 24 hours.</span>
            </div>
            <div className='col-md-4 text-center'>
            <span>Arqon Headquarters</span><br/>
            <span>Suite 1706 Atlanta Centre Building,</span><br/>
            <span>31 Annapolis St., Greenhills, San Juan City,</span><br/>
            <span>Metro Manila, Philippines 1552 (By Appointment Only)</span>
            </div>          
          </div>
        </div>
        

      
      <div className='background-turquoise'>
        <p className='page-desc-across'>We can't wait to welcome you in our Headquarters!</p>
      </div>     

      <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='img-fluid img-hero'>
                <Image src={contactUs1}/>
              </div>
            </div>
            <div className='col-md-6'>
            <div className='img-fluid img-hero'>
                <Image src={contactUs2}/>
              </div>              
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='img-fluid img-hero'>
                <Image src={contactUs3}/>
              </div>
            </div>
            <div className='col-md-6'>
            <div className='img-fluid img-hero'>
                <Image src={contactUs4}/>
              </div>              
            </div>
          </div>
        </div>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4'>
              <span>LET'S BRING YOUR VISION TO LIFE</span><br/>
              <span>Contact us</span><br/>
              <span>
                <form>
                  <div className='form-floating mb-3'>
                    <input type='text' className='form-control' id='floatingName' placeholder='Full Name'></input>
                      <label for='floatingName'>Full Name</label>
                  </div>

                  <div className='form-floating mb-3'>
                    <input type='email' className='form-control' id='floatingEmail' placeholder='Email'></input>
                      <label for='floatingEmail'>Email</label>
                  </div>

                  <div className='form-floating mb-3'>
                    <input type='text' className='form-control' id='floatingPhone' placeholder='Contact Number'></input>
                      <label for='floatingPhone'>Contact Number</label>
                  </div>

                  <div className='form-floating mb-3'>
                    <textarea style={{height: 100}} className='form-control textarea-contact' id='floatingTextArea' placeholder='Hello, I am interested in...' ></textarea>
                      <label for='floatingTextArea'>Hello, I am interested in...</label>
                  </div>

                </form>
              </span>
            </div>
            <div className='col-md-8'>
            </div>
          </div>
        </div>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
