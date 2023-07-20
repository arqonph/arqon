import React from 'react'
import Link from 'next/link'

function Services() {
  return (
    <div className='services'>
      <section className='d-flex row mb-5 justify-content-center gy-3 gx-3 gy-md-0 text-wrap'>
        <div className='archiDesign col-xxl-3 col-md-6 text-center containerServices'>
          <div className='archiImage servicesImg position-relative'>
            {/* <Image src={archiDesign} className='image'/> */}
            <div className='offerFooter'>
              <span className=''>Architectural Design</span>
            </div>
            <div className='overlay'>
              <div className='text'>
                <span>
                We meet the need to create functional and aesthetically pleasing, and harmonious living spaces.
                ARQON has the expertise from client-tested experiences and almost a decade of training from the best architectural firms of our country.
                </span>
              </div>
              <div className='offerFooterOverlay'>
                <span className=''>Architectural Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className='designAndBuild col-xxl-3 col-md-6 text-center containerServices pt-sm-0 pt-lg-0'>
          <div className='designBuildImage servicesImg position-relative'>
            {/* <Image src={designAndBuild} height={520} width={482}/> */}
            <div className='offerFooter'>
              <span>Design and Build</span>
            </div>
            <div className='overlay'>
              <div className='text'>
                <span>
                We simplify the process of project delivery while providing creative solutions.
                Design and Build services balance architectural design, time, quality, and cost—important factors that clients should always consider.
                </span>
              </div>
              <div className='offerFooterOverlay'>
                <span className=''>Design and Build</span>
              </div>
            </div>
          </div>
        </div>
        <div className='modeling col-xxl-3 col-md-6 text-center containerServices pt-sm-0 pt-md-3 pt-lg-3 pt-xxl-0'>
          <div className='modelingImage servicesImg position-relative'>
            {/* <Image src={modeling} height={520} width={482}/> */}
            <div className='offerFooter'>
              <span>Architectural Interiors</span>
            </div>
            <div className='overlay'>
              <div className='text'>
                <span>
                We create visual space simulations using BIM to ensure that ideas and directions are clearly communicated and possible problems are resolved ahead of time,
                especially in multi-disciplinary projects. In Arqon, we are equipped with skills and knowledge to be at par not only with world-class architecture but also with the emerging technology available to date.
                </span>
              </div>
              <div className='offerFooterOverlay'>
                <span className=''>Architectural Interiors</span>
              </div>
            </div>
          </div>
        </div>
        <div className='whatWedoParent col-xxl-3 col-md-6 d-flex servicesImg position-relative pt-5 pt-sm-5 pt-lg-5 mt-lg-5 pt-xxl-5 mt-xxl-0'>
          <div className='whatWedo '>
            <div className='whatwedoDesc justify-content-center'>
              <span className='header bg-white pe-3'>WHAT WE DO</span>
              <div className='paragraph'>
                <p>
                  <span className='end2end'>End-to-end</span><br/>
                  <span className='end2end_dbserv'>design and build service.</span>
                </p>
                <p className=''>
                  ARQON is a full-service architectural firm that specializes in streamlined design and build projects. The firm envisions bringing your dreams of having quality and timeless houses to reality. 
                </p>
              </div>
              <div className='btnServies mt-4' >
                <Link href='/Services_Main'>
                  <button className='text-center py-2 col-3 servicesBtn text-white col-4'>View Services</button>
                </Link>
              </div>
            </div>            
          </div>

        </div>
     
      </section>
    </div>
  )
}

export default Services