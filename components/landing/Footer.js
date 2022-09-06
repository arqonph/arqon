import React from 'react'
import Image from 'next/image'
import fb from '../../assets/Icon_fb.png'
import ig from '../../assets/Icon_ig.png'
import linkedin from '../../assets/Icon_in.png'
import tiktok from '../../assets/Icon_tiktok.png'
import yt from '../../assets/Icon_youtube.png'
import house from '../../assets/01_Arqon_Home page_04.jpg'
import car from '../../assets/car.png'
import arqonWhite from '../../assets/arqon.png'
import footerLogo from '../../assets/footerLogo.png'
import socialMedia from '../../assets/ArqonFooter.png'

function Footer() {
  const scrollUp = () => {
      window.scrollTo({
          top: 0, //can add the height of the nav bar
          behavior: 'smooth'
      })
  }
  return (
    <div>
      <div className='px-5 pt-5 bg-white pb-5'>
        <div className='footer row'>
          <div className='col-xxl-3 col-xl-6 '>
            <div className='row'>
              <div className='footerHeader col-12 '>
                <span className=' '>Social Media</span>
              </div>
              <div className='row pb-5 pt-3'>
                  <Image src={socialMedia} height={250} width={400}/>
              </div>
              <div className='col-12'>
                <div className='row d-flex justify-content-center align-items-center'>
                  <div className='w-30 h-25 text-center px-3 py-2 footerLink text-white col-3'>
                    <span className=''>Follow us</span>
                  </div>
                  <div className='pt-1 col-8'>
                    <a href='/' className='mx-1'>
                      <Image src={fb} height={40} width={40} />
                    </a>
                    <a href='/'className='mx-1'>
                      <Image src={ig} height={40} width={40}/>
                    </a>
                    <a href='/'className='mx-1'>
                      <Image src={linkedin} height={40} width={40}/>
                    </a>
                    <a href='/'className='mx-1'>
                      <Image src={tiktok} height={40} width={40}/>
                    </a>
                    <a href='/'className='mx-1'>
                      <Image src={yt} height={40} width={40}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xxl-3 col-xl-6 pt-5 pt-xl-0'>
            <div className='row'>
              <div className='footerHeader col-12'>
                <span className=''>Features</span>
              </div>
              <div className='pt-3'>
                <ul >
                  <li className='mb-4'><span className='listType'>&#62;</span>Style Rules This Modern Minimalist Industrial Home by Real Living</li>
                  <li className='mb-4'><span className='listType'>&#62;</span>10 Most Beautiful Real Homes in 2017</li>
                  <li className='mb-4'><span className='listType'>&#62;</span>BluePrint</li>
                </ul>
              </div >
            </div>
          </div>
          <div className='col-xxl-3 col-xl-6 pt-5 pt-xxl-0'>
            <div className='row'>
              <div className='footerHeader col-12'>
                <span className=''>Sevices</span>
              </div>
              <div className='pt-3'>
                <ul>
                  <li className='mb-4'><span className='listType'>&#62;</span>Architectural Design</li>
                  <li className='mb-4'><span className='listType'>&#62;</span>Design and Build</li>
                  <li className='mb-4'><span className='listType'>&#62;</span>Building Information Modelling (BIM)</li>
                  <li className='mb-4'><span className='listType'>&#62;</span>Architectural Interiors</li>
                  <li className='mb-4'><span className='listType'>&#62;</span>Project Management</li>
                  <li className='mb-4'><span className='listType'>&#62;</span>Design Consultancy</li>
                </ul>
                
              </div>
              <button className=' text-center py-2 col-3 footerLink text-white col-4'>View services</button>
            </div>
          </div>
          <div className='col-xxl-3 col-xl-6 pt-5 pt-xxl-0'>
            <div className='row'>
              <div className='footerHeader col-12'>
                <span className=''>Contact Us</span>
              </div>
              <div className='contactUs pt-3'>
                <ul>
                  <li className='mb-4'><span>Phone: +632 966 210 2307</span></li>
                  <li className='mb-4'><span>Email: info@arqon.com.ph </span></li>
                  <li className='mb-4'><span>Suite 1706 Atlanta Centre Building,
                    31 Annpolis St., Greenhills, San Juan City,
                    Metro Manila, Philippines 1552</span> 
                  </li>
                </ul>
              </div>
              <a href='/ContactUs' className='text-center py-2 col-3 footerLink text-white col-4'>Contact us</a>
            </div>
          </div>
        </div>
      </div>
      <div className='footerB d-flex justify-content-between align-items-center text-white px-5'>
        <Image src={footerLogo} height={ 70} width={210}/>
          <span className='d-lg-block d-none'>Copyright &copy; 2022 All Rights Reserved</span>
        <div className='d-flex' onClick={scrollUp}>
          <button className='buttonUp text-white' > Back on top </button>
          <div className='arrowUp'>
          <span > &#62; </span>
          </div>
        </div>
      </div>
      <div>
      <div className='footerB d-flex p-2 justify-content-center text-white d-lg-none'>
            <span className='d-lg-none'>Copyright &copy; 2022 All Rights Reserved</span>
        </div>
      </div>
    </div>
  )
}
export default Footer