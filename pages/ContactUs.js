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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
      </Head>
      <Navbar />
      <div className='img-fluid img-hero'>
        <Image src={arqonTopImg}/>
        <p className='page-title'>Contact Us</p>
      </div>

      <div>
        <div class='row'>
          <div className='col-md-3'>
            <span>&nbsp;</span>
          </div>
          <div className='col-md-6 text-center'>
            <div className='page-desc_border-bottom'>
              <span className='page-desc-black'>We value</span>&nbsp;&nbsp;<span className='page-desc-turquoise'>INTEGRITY</span>
            </div>
          </div>
          <div className='col-md-3'>
            <span>&nbsp;</span>
          </div>
        </div>
        <div class='row'>
          <div className='page-center'>
            <br/><span>For our brand's personality -- cool, creative, modern, professional,</span>
          </div>
        </div>
        <div class='row'>
          <div className='page-center'>
            <br/><span>contemporary, strong, tasteful, with <b>integrity</b></span>
          </div>
          <br/>
        </div>
      </div>
        <br/>
        <div class='container'>
          <div class='row'>
            <div className='col-md-4 text-center'>
              <i className='fa-solid fa-phone fa-2xl contactUs-icon'></i><br/>
              <span className='phone-email-home'>+63 917 817 4612</span><br/>
              <span className='phone-email-home-desc'>Call us anytime from</span><br/>
              <span className='phone-email-home-desc'>Monday to Friday, 8am to 5pm.</span>
              <br/>
            </div>
            
            <div className='col-md-4 text-center'>
              <i class='fa-regular fa-envelope fa-2xl contactUs-icon'></i><br/>
              <span className='phone-email-home'>info@arqon.com.ph</span><br/>
              <span className='phone-email-home-desc'>Email us anytime,</span><br/>
              <span className='phone-email-home-desc'>we usually reply within 24 hours.</span>
              <br/>
            </div>
            <div className='col-md-4 text-center'>
              <i class='fa-solid fa-house fa-2xl contactUs-icon'></i><br/>
              <span className='phone-email-home'>Arqon Headquarters</span><br/>
              <span className='phone-email-home-desc'>Suite 1706 Atlanta Centre Building,</span><br/>
              <span className='phone-email-home-desc'>31 Annapolis St., Greenhills, San Juan City,</span><br/>
              <span className='phone-email-home-desc'>Metro Manila, Philippines 1552 (By Appointment Only)</span>
              <br/>
            </div>          
          </div>
        </div>
        <br/>

      
      <div className='background-turquoise'>
        <p className='page-desc-across'>We can't wait to welcome you in our Headquarters!</p>
      </div>     

      <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card'>
                <Image className='card-img-top' src={contactUs1} />
                <div className='card-bg'>
                  <span className='card-title'>&nbsp;</span>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='card'>
                <Image className='card-img-top' src={contactUs2} />
                <div className='card-bg'>
                  <span className='card-title'>&nbsp;</span>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>

            <div className='col-md-6'>
              <div className='card'>
                <Image className='card-img-top' src={contactUs3} />
                <div className='card-bg'>
                  <span className='card-title'>&nbsp;</span>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='card'>
                <Image className='card-img-top' src={contactUs4} />
                <div className='card-bg'>
                  <span className='card-title'>&nbsp;</span>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className='container-fluid'>
          <div className='row contactUs-faq-row pt-4 pb-4 dinlight-black'>
            <div className='col-md-4 '>
              <span className='contactUs-vision'>LET'S BRING YOUR VISION TO LIFE</span><br/>
              <span className='contactUs-header'>Contact us</span><br/><br/>
              <span>
                <form>
                  <div className='form-floating mb-3'>
                    <input  type='text' className='form-control' id='floatingName' placeholder='Full Name'></input>
                      <label  for='floatingName'>Full Name</label>
                  </div>

                  <div className='form-floating mb-3'>
                    <input type='email' className='form-control' id='floatingEmail' placeholder='Email'></input>
                      <label  for='floatingEmail'>Email</label>
                  </div>

                  <div className='form-floating mb-3'>
                    <input type='text' className='form-control' id='floatingPhone' placeholder='Contact Number'></input>
                      <label for='floatingPhone'>Contact Number</label>
                  </div>

                  <div className='form-floating mb-3'>
                    <textarea style={{height: 250}} className='form-control textarea-contact' id='floatingTextArea' placeholder='Hello, I am interested in...' ></textarea>
                      <label for='floatingTextArea'>Hello, I am interested in...</label>
                  </div>

                  <a href="#" style={{width: 120}} className='btn btn-dark btn-sm active'>Send</a>
                </form>
              </span>
            </div>

            <div className='col-md-1'>
                <span>&nbsp;</span>
            </div>

            <div className='col-md-7'>
              <span className='contactUs-vision'>DO YOU HAVE QUESTIONS ?</span><br/>
              <span className='contactUs-header'>Read our F.A.Q.</span><br/><br/>

              <div className='accordion' id='faqs'>
                <div className='accordion-item mb-3'>
                  <h2 className='accordion-header' id='heading-1'>
                    <button className='accordion-button dinlight-black' type='button' data-bs-toggle='collapse' 
                    data-bs-target='#faq-1' aria-expanded='true'
                    aria-controls='faq-1'>What services do you offer?</button>
                  </h2>
                  <div id='faq-1' className='accordion-collapse collapse show'
                  aria-labelledby='heading-1' data-bs-parent='#faqs'>
                    <div className='accordion-body faq-body'>
                      <p>ARQON specializes in architectural design and design and build projects.  We also offer architectural interiors, project management, design consultancy and building information modeling (BIM) services.</p>
                    </div>
                  </div>
                </div>

                <div className='accordion-item mb-3'>
                  <h2 className='accordion-header' id='heading-2'>
                    <button className='accordion-button dinlight-black' type='button' data-bs-toggle='collapse' 
                    data-bs-target='#faq-2' aria-expanded='true'
                    aria-controls='faq-2'>What area do you cater to?</button>
                  </h2>
                  <div id='faq-2' className='accordion-collapse collapse '
                  aria-labelledby='heading-2' data-bs-parent='#faqs'>
                    <div className='accordion-body faq-body'>
                      <p>We offer design and build services in Metro Manila and neighboring provinces but not limited to Cavite, Laguna, Rizal, Batangas, Pampanga, Bulacan and Bataan.</p>
                    </div>
                  </div>
                </div>

                <div className='accordion-item mb-3'>
                  <h2 className='accordion-header' id='heading-3'>
                    <button className='accordion-button dinlight-black' type='button' data-bs-toggle='collapse' 
                    data-bs-target='#faq-3' aria-expanded='true'
                    aria-controls='faq-3'>What type of project do you accept?</button>
                  </h2>
                  <div id='faq-3' className='accordion-collapse collapse '
                  aria-labelledby='heading-3' data-bs-parent='#faqs'>
                    <div className='accordion-body faq-body'>
                      <p>We accept all project types - residential, office, commercial and hospitality projects.  We have 16 years of valuable experience to provide service on every project type you have in mind.  You can also check us on LinkedIn.</p>
                    </div>
                  </div>
                </div>

                <div className='accordion-item mb-3'>
                  <h2 className='accordion-header' id='heading-4'>
                    <button className='accordion-button dinlight-black' type='button' data-bs-toggle='collapse' 
                    data-bs-target='#faq-4' aria-expanded='true'
                    aria-controls='faq-4'>Do you do renovations?</button>
                  </h2>
                  <div id='faq-4' className='accordion-collapse collapse '
                  aria-labelledby='heading-4' data-bs-parent='#faqs'>
                    <div className='accordion-body faq-body'>
                      <p>We do but depending on the scope of work.  Send us a message so we can evaluate the project.</p>
                    </div>
                  </div>
                </div>

                <div className='accordion-item mb-3'>
                  <h2 className='accordion-header' id='heading-5'>
                    <button className='accordion-button dinlight-black' type='button' data-bs-toggle='collapse' 
                    data-bs-target='#faq-5' aria-expanded='true'
                    aria-controls='faq-5'>How much do you charge per sqm?</button>
                  </h2>
                  <div id='faq-5' className='accordion-collapse collapse '
                  aria-labelledby='heading-5' data-bs-parent='#faqs'>
                    <div className='accordion-body faq-body'>
                      <p>We don’t have fixed per sqm cost because it depends on several factors like area, project type, terrain, complexity, finishes and other project requirements.</p>
                    </div>
                  </div>
                </div>

                <div className='accordion-item mb-3'>
                  <h2 className='accordion-header' id='heading-6'>
                    <button className='accordion-button dinlight-black' type='button' data-bs-toggle='collapse' 
                    data-bs-target='#faq-6' aria-expanded='true'
                    aria-controls='faq-6'>I'm interested in your service, how do we start?</button>
                  </h2>
                  <div id='faq-6' className='accordion-collapse collapse '
                  aria-labelledby='heading-6' data-bs-parent='#faqs'>
                    <div className='accordion-body faq-body'>
                      <p>That’s great!   First you need to prepare your TCT or the technical description of your property, the village’s design and construction guideline, topography map, room requirements and pegs how you envision your project.  You may email us at info@arqon.com.ph.</p>
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
