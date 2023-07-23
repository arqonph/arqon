import React from 'react'
import Image from 'next/image'
import fb from '../../assets/Icon_fb.png'
import ig from '../../assets/Icon_ig.png'
import linkedin from '../../assets/Icon_in.png'
import tiktok from '../../assets/Icon_tiktok.png'
import yt from '../../assets/Icon_youtube.png'
import footerLogo from '../../assets/footerArqonLogo.jpg'
import Link from 'next/link'
import vResidence from '../../assets/V_Residence.jpg'
import nResidence from '../../assets/N_Residence.jpg'


export default function Footer( { data }) {

  const igFeed = data || []
  const images = igFeed ? igFeed.filter(igFeed => igFeed.media_type == 'IMAGE' || igFeed.media_type == 'CAROUSEL_ALBUM') : []
  const firstTwo = images.slice(0,2)
  if(firstTwo == '') {
    firstTwo.push({id:'',caption: '',media_url:'',media_type: ''})
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
          <div className='col-xxl-3 col-md-6 pt-5 pt-xxl-0 pb-xxl-0 pb-xl-5 position-relative'>
            <div className='row'>
              <div className='footerHeader col-12 px-0'>
                <span className=''>SOCIALS</span>
              </div>
              <div className='mb-xl-5 mb-lg-5 mb-5 p-0 text-center'>
                <a href='https://www.instagram.com/arqondesign/'className='row arqonIgPost px-0' target='_blank'>
                  {firstTwo && firstTwo.map((image) =>(
                      image.media_type =='IMAGE' || image.media_type =='CAROUSEL_ALBUM' 
                      ? 
                      <div key={image.id} className='col-lg-6 col-md-12 pt-3 col-sm-6'>
                        <img className ='igPost' key={image.id} src={image.media_url} alt={image.caption} width={219} height={219}/>
                      </div> 
                      : <>
                      {
                        image.media_type =='VIDEO' 
                        ?
                        <div className='row arqonIgPost'>
                          <div key='vResidence' className='col-xxl-6 col-lg-6 col-md-12 pt-3 col-sm-6'>
                            <Image src={vResidence} key='vResidence' className='igDefaultImg' width={350} height={300}/>
                          </div>
                          <div key='nResidence' className=' col-xxl-6 col-lg-6 col-md-12 pt-3 col-sm-6'>
                            <Image src={nResidence} key='nResidence' className='igDefaultImg' width={350} height={300}/>
                          </div>
                        </div>
                      : 
                        <div className='row arqonIgPost'>
                          <div key='vResidence' className='col-xxl-6 col-lg-6 col-md-12 pt-3 col-sm-6'>
                            <Image src={vResidence} key='vResidence' className='igDefaultImg' width={350} height={300}/>
                          </div>
                          <div key='nResidence' className=' col-xxl-6 col-lg-6 col-md-12 pt-3 col-sm-6'>
                            <Image src={nResidence} key='nResidence' className='igDefaultImg' width={350} height={300}/>
                          </div>
                        </div>
                      }
                      </>
                      )
                    )
                  }
                </a>
              </div>
              <div className='footerButton position-absolute'>
                <div className='socialsLink row d-flex align-items-center justify-content-end '>
                  <a href='https://linktr.ee/arqondesign' className='text-center py-2 footerLink text-white col-5' target='_blank'>
                    <button className='followText text-white'>Follow Us</button>
                  </a>
                  <div className='col-7 d-flex align-items-center justify-content-between'>
                    <a href='https://www.facebook.com/ARQONdesignandbuild' className='mx-1 mx-xxl-1'  target='_blank'>
                      <Image src={fb} height={55} width={55} />
                    </a>
                    <a href='https://www.instagram.com/arqondesign/'className='mx-1 mx-xxl-1'  target='_blank'>
                      <Image src={ig} height={55} width={55}/> 
                    </a>
                    <a href='https://www.youtube.com/channel/UCF9eCrL6sMOxFYVTztVtaJg'className='mx-1 mx-xxl-1'  target='_blank'>
                      <Image src={yt} height={55} width={55}/>
                    </a>
                    <a href='https://linktr.ee/arqondesign'className='mx-1 mx-xxl-1'  target='_blank'>
                      <Image src={linkedin} height={55} width={55}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xxl-3 col-md-6 pt-5 pt-xxl-0 pb-xxl-0 pb-xl-5'>
            <div className='row '>
              <div className='footerHeader col-12 px-0 px-md-5'>
                <span className=''>Features</span>
              </div>
              <div className='pt-3 px-0 px-md-5'>
                <ul>
                  <li className='featuresLink mb-xxl-3 mb-xl-2 mb-md-1 md-0'>
                    <a href='https://bluprint.onemega.com/arqon-design-conveys-modern-industrial-architecture-through-casa-penafrancia/' target='_blank'>
                      <span className='listType'>&#62;</span> Bluprint - Arqon Design Conveys Modern Industrial Architecture Through Casa Peñafrancia by 
                    </a>
                  </li>
                  <li className='featuresLink mb-xxl-3 mb-xl-2 mb-md-1 md-0'>
                    <a href='/' target='_blank'>
                      <span className='listType'>&#62; </span> Style Rules This Modern Minimalist Industrial Home by Real Living
                    </a>
                  </li>
                  <li className='featuresLink mb-xxl-3 mb-xl-2 mb-md-1 md-0'>
                    <a href='/' target='_blank'>
                      <span className='listType'>&#62; </span>10 Most Beautiful Real Homes in 2017
                    </a>
                  </li>
                  <li className='featuresLink mb-xxl-3 mb-xl-2 mb-md-1 md-0'>
                    <a href='/' target='_blank'>
                      <span className='listType'>&#62; </span> Spot.PH  - Breathtaking Country-Style Tagaytay Airbnb Viram Villa
                    </a>
                  </li>
                </ul>
              </div >
            </div>
          </div>
          <div className='col-xxl-3 col-md-6 pt-5 pt-xxl-0 pb-xxl-0 pb-xl-5 position-relative'>
            <div className='row '>
              <div className='footerHeader col-12 px-0 px-xxl-5 '>
                <span className=''>SERVICES</span>
              </div>
              <div className='pt-3 pb-5 pb-xxl-0 px-md-0 px-xxl-5 px-0'>
                <ul>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>Architectural Design</li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>Design and Build</li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>Building Information Modeling (BIM)</li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>Architectural Interiors</li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>Project Management</li>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span className='listType'>&#62; </span>Design Consultancy</li>
                </ul>
              </div>
            </div>
            <div className='position-absolute footerButton px-md-0 px-xxl-5'>
              <Link href='/Services_Main'>
                  <button className='text-center py-2 col-3 footerLink text-white col-4'>View Services</button>
                </Link>
            </div>
          </div>
          <div className='col-xxl-3 col-md-6 pt-5 pt-xxl-0 pb-xxl-0 pb-xl-5 position-relative'>
            <div className='row'>
              <div className='footerHeader col-12 px-0 px-md-5'>
                <span className=''>Contact Us</span>
              </div>
              <div className='footerDetails pt-3 pb-5 pb-xxl-0 px-0 px-md-5'>
                <ul>
                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span>Phone: +632 7502 7185</span></li>
                  <li className='featuresLink mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span>Email: 
                    <a href='mailto:info@arqon.com.ph?subject=Enquiry' >info@arqon.com.ph </a>
                  </span>
                  </li>

                  <li className='mb-xxl-3 mb-xl-2 mb-md-1 md-0'><span>Suite 1706 Atlanta Centre Building,
                    31 Annapolis St., Greenhills, San Juan City,
                    Metro Manila, Philippines 1552</span> 
                  </li>
                </ul>
              </div>
            </div>
            <div className='position-absolute footerButton px-0 px-md-5'>
              <Link href='/ContactUs'>
                <button className='text-center py-2 col-3 footerLink text-white col-4'>Contact us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='footerB d-flex justify-content-between align-items-center text-white px-lg-5 px-3 py-3'>
        <Image src={footerLogo} height={64.85} width={220}/>
          <span className='d-md-block d-none'>&copy; 2022 All Rights Reserved</span>
        <div className='d-flex' onClick={scrollUp}>
          <button className='buttonUp text-white' > Back to top </button>
          <div className='arrowUp'>
          <span > &#62; </span>
          </div>
        </div>
      </div>
      <div>
      <div className='footerB d-flex p-2 justify-content-center text-white d-md-none py-md-3'>
            <span className='d-lg-none h6'>&copy; 2022 All Rights Reserved</span>
        </div>
      </div>
    </div>
  )
}