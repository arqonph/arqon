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
          <div className='row contactUs-faq-row pt-4 pb-4'>
            <div className='col-md-4 '>
              <span className='contactUs-vision'>LET'S BRING YOUR VISION TO LIFE</span><br/>
              <span className='contactUs-header'>Contact us</span><br/><br/>
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
                    <textarea style={{height: 150}} className='form-control textarea-contact' id='floatingTextArea' placeholder='Hello, I am interested in...' ></textarea>
                      <label for='floatingTextArea'>Hello, I am interested in...</label>
                  </div>

                  <button type='button' style={{width: 120}} className='btn btn-outline-dark text-white bg-secondary'>Send</button>
                </form>
              </span>
            </div>



            <div className='col-md-8'>
              <span className='contactUs-vision'>DO YOU HAVE QUESTIONS ?</span><br/>
              <span className='contactUs-header'>Read our F.A.Q.</span><br/><br/>

              <div className='accordion' id='faqs'>
                <div className='accordion-item mb-3'>
                  <h2 className='accordion-header' id='heading-1'>
                    <button className='accordion-button' type='button' data-bs-toggle='collapse' 
                    data-bs-target='#faq-1' aria-expanded='true'
                    aria-controls='faq-1'>What is ARQON?</button>
                  </h2>
                  <div id='faq-1' className='accordion-collapse collapse '
                  aria-labelledby='heading-1' data-bs-parent='#faqs'>
                    <div className='accordion-body'>
                      <p>ARQON is a full service architectural firm that specializes in streamlined design and build projects.Aside from the basic architectural services, we also provide building information modeling service.</p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item mb-3'>
                  <h2 className='accordion-header' id='heading-2'>
                    <button className='accordion-button' type='button' data-bs-toggle='collapse' 
                    data-bs-target='#faq-2' aria-expanded='true'
                    aria-controls='faq-2'>What are the typeof projects do you make?</button>
                  </h2>
                  <div id='faq-2' className='accordion-collapse collapse '
                  aria-labelledby='heading-2' data-bs-parent='#faqs'>
                    <div className='accordion-body'>
                      <p>We design all types of project from residential, office and com</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      <div className='container-fluid'>
        <div className='row pl-0'>
          <div className='col-xs-12 col-sm-12 col-md-12 pl-0'>
            <div className='embed-responsive '>
              <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.4502173590397!2d121.05235936406027!3d14.604747298883428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c81649c1ba6d%3A0xd4e7b11d4a94bd7c!2sARQON%20Design%20and%20Build!5e0!3m2!1sen!2sus!4v1662405465656!5m2!1sen!2sus' 
                  className='google-maps' allowFullScreen loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>
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
