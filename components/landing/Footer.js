import React from 'react'
import Image from 'next/image'
import fb from '../../assets/Icon_fb.png'
import ig from '../../assets/Icon_ig.png'
import linkedin from '../../assets/Icon_in.png'
import tiktok from '../../assets/Icon_tiktok.png'
import yt from '../../assets/Icon_youtube.png'
import footerLogo from '../../assets/footerArqonLogo.jpg'
import Link from 'next/link'

import Slider from 'react-slick'
import vResidence from '../../assets/V_Residence.jpg'
import nResidence from '../../assets/N_Residence.jpg'
import sResidence from '../../assets/S_Residence.jpg'
import dResidence from '../../assets/D_Residence.jpg'
import gResidence from '../../assets/G_Residence.jpg'
import tResidence from '../../assets/T_Residence.jpg'

export default function Footer() {
  let settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
}
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
              <div className='mb-xl-5 mb-lg-5 mb-5 p-0 text-center'>
                <a href='https://www.instagram.com/arqondesign/'className='mx-1' target='_blank'>
                  <Slider {...settings}>
                      <div className='igPost comment1'>
                          <Image src={vResidence} height={260} width={450}/>
                      </div>
                      <div className='igPost comment2'>
                          <Image src={nResidence} height={260} width={450}/>
                      </div>
                      <div className='igPost comment3'>
                          <Image src={sResidence} height={260} width={450}/>
                      </div>
                      <div className='igPost comment4'>
                          <Image src={dResidence} height={260} width={450}/>
                      </div>
                      <div className='igPost comment5'>
                          <Image src={gResidence} height={260} width={450}/>
                      </div>
                      <div className='igPost comment5'>
                          <Image src={tResidence} height={260} width={450}/>
                      </div>
                  </Slider>
                </a>
              </div>
              <div className='footerButton position-absolute'>
                <div className=' row d-flex align-items-center justify-content-between'>
                  <a href='https://linktr.ee/arqondesign' className='text-center py-2 col-3 footerLink text-white col-4' target='_blank'>
                    <button className='followText text-white'>Follow Us</button>
                  </a>
                  <div className='pt-1 col-8 d-flex align-items-center justify-content-xxl-between'>
                    <a href='https://www.facebook.com/ARQONdesignandbuild' className='mx-1'  target='_blank'>
                      <Image src={fb} height={40} width={40} />
                    </a>
                    <a href='https://www.instagram.com/arqondesign/'className='mx-1'  target='_blank'>
                      <Image src={ig} height={40} width={40}/>
                    </a>
                    <a href='https://linktr.ee/arqondesign'className='mx-1'  target='_blank'>
                      <Image src={linkedin} height={40} width={40}/>
                    </a>
                    <a href='https://www.tiktok.com/@arqondesign'className='mx-1'  target='_blank'>
                      <Image src={tiktok} height={40} width={40}/>
                    </a>
                    <a href='https://www.youtube.com/channel/UCF9eCrL6sMOxFYVTztVtaJg'className='mx-1'  target='_blank'>
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
                  <li className='featuresLink mb-xxl-3 mb-xl-2 mb-md-1 md-0'>
                    <a href='https://bluprint.onemega.com/arqon-design-conveys-modern-industrial-architecture-through-casa-penafrancia/'>
                      <span className='listType'>&#62; </span>BluePrint
                    </a>
                  </li>
                  <li className='featuresLink mb-xxl-3 mb-xl-2 mb-md-1 md-0'>
                    <a href='/'>
                      <span className='listType'>&#62; </span>10 Most Beautiful Real Homes in 2017
                    </a>
                  </li>
                  <li className='featuresLink mb-xxl-3 mb-xl-2 mb-md-1 md-0'>
                    <a href='/'>
                      <span className='listType'>&#62; </span>Style Rules This Modern Minimalist Industrial Home by Real Living
                    </a>
                  </li>
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
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>Design Consultancy</li>
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
              <Link href='/ContactUs'>
                <button className='text-center py-2 col-3 footerLink text-white col-4'>Contact us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footerB d-flex justify-content-between align-items-center text-white px-lg-5 px-3'>
        <Image src={footerLogo} height={64.85} width={220}/>
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