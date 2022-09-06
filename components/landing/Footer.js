import React from 'react'
import Image from 'next/image'
import fb from '../../assets/Icon_fb.png'
import ig from '../../assets/Icon_ig.png'
import linkedin from '../../assets/Icon_in.png'
import tiktok from '../../assets/Icon_tiktok.png'
import yt from '../../assets/Icon_youtube.png'
import footerLogo from '../../assets/footerArqonLogo.jpg'
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
      <div className='p-5 bg-white '>
        <div className='footer row'>
           <div className='col-xxl-3 col-xl-6 pt-5 pt-xxl-0 pb-xxl-0 pb-xl-5 position-relative'>
            <div className='row'>
              <div className='footerHeader col-12'>
                <span className=''>Instagram</span>
              </div>
              <div className='pb-5 pt-3 mb-xxl-5 mb-0'>
                <Image src={socialMedia} height={300} width={450}/>
              </div>
              <div className='footerButton position-absolute'>
                <div className=' row d-flex align-items-center justify-content-between'>
                  <button className=' text-center py-2 col-3 footerLink text-white col-4'>Follow Us</button>
                  <div className='pt-1 col-8 d-flex align-items-center justify-content-xxl-between'>
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
          <div className='col-xxl-3 col-xl-6 pt-5 pt-xxl-0 pb-xxl-0 pb-xl-5'>
            <div className='row'>
              <div className='footerHeader col-12'>
                <span className=''>Features</span>
              </div>
              <div className='pt-3'>
                <ul>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>Style Rules This Modern Minimalist Industrial Home by Real Living</li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>10 Most Beautiful Real Homes in 2017</li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>BluePrint</li>
                </ul>
              </div >
            </div>
          </div>
          <div className='col-xxl-3 col-xl-6 pt-5 pt-xxl-0 pb-xxl-0 pb-xl-5 position-relative'>
            <div className='row '>
              <div className='footerHeader col-12'>
                <span className=''>Sevices</span>
              </div>
              <div className='pt-3 pb-5 pb-xxl-0'>
                <ul>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>Architectural Design</li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>Design and Build</li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>Building Information Modelling (BIM)</li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>Architectural Interiors</li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>Project Management</li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62;</span>Design Consultancy</li>
                </ul>
              </div>
            </div>
            <div className='position-absolute footerButton'>
              <button className='text-center py-2 col-3 footerLink text-white col-4'>View services</button>
            </div>
          </div>
          <div className='col-xxl-3 col-xl-6 pt-5 pt-xxl-0 pb-xxl-0 pb-xl-5 position-relative'>
            <div className='row'>
              <div className='footerHeader col-12'>
                <span className=''>Contact Us</span>
              </div>
              <div className='footerDetails pt-3 pb-5 pb-xxl-0'>
                <ul>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span>Phone: +632 966 210 2307</span></li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span>Email: info@arqon.com.ph </span></li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span>Suite 1706 Atlanta Centre Building,
                    31 Annpolis St., Greenhills, San Juan City,
                    Metro Manila, Philippines 1552</span> 
                  </li>
                </ul>
              </div>
              <div className='position-absolute footerButton'>
                <button className='text-center py-2 col-3 footerLink text-white col-4'>Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footerB d-flex justify-content-between align-items-center text-white px-lg-5 px-3'>
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
      <div className='footerB d-flex p-2 justify-content-center text-white d-lg-none py-md-3'>
            <span className='d-lg-none h6'>Copyright &copy; 2022 All Rights Reserved</span>
        </div>
      </div>
    </div>
  )
}
export default Footer