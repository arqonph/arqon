import React from 'react'

function Services() {
  return (
    <div className='services'>
      <section className='d-flex row mb-5 justify-content-center gy-3 gy-md-0 text-wrap'>
        <div className='archiDesign col-xxl-3 col-lg-4 col-md-6 text-center container'>
          <div className='archiImage position-relative'>
            {/* <Image src={archiDesign} className='image'/> */}
            <div className='offerFooter'>
              <span className=''>Architectural Design</span>
            </div>
            <div className='overlay'>
              <div className='text'>Some text here....</div>
              <div className='offerFooterOverlay'>
                <span className=''>Architectural Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className='designAndBuild col-xxl-3 col-lg-4 col-md-6 text-center container'>
          <div className='designBuildImage position-relative'>
            {/* <Image src={designAndBuild} height={520} width={482}/> */}
            <div className='offerFooter'>
              <span>Design and Build</span>
            </div>
            <div className='overlay'>
              <div className='text'>Some text here....</div>
              <div className='offerFooterOverlay'>
                <span className=''>Design and Build</span>
              </div>
            </div>
          </div>
        </div>
        <div className='modeling col-xxl-3 col-lg-4 col-md-6 text-center gy-md-3 gy-lg-0 container'>
          <div className='modelingImage position-relative'>
            {/* <Image src={modeling} height={520} width={482}/> */}
            <div className='offerFooter'>
              <span>Build Information Modeling</span>
            </div>
            <div className='overlay'>
              <div className='text'>Some text here....</div>
              <div className='offerFooterOverlay'>
                <span className=''>Build Information Modeling</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xxl-3 col-md-6 d-flex align-items-center position-relative gy-xxl-0 gy-5 '>
          <div className='whatWedo '>
            <div className='whatwedoDesc '>
              <h1><span className='bg-white pe-3'>what we do</span></h1>
              <div className='paragraph me-xxl-5'>
                <p className=''>
                  We are a full service architectural firm that specializes in streamlined design and build projects.
                </p>
                <p className=''>
                  Through our collaborative partnerships and top-shelf technological advancements, enabling clients to achieve their vision drives us to be the best in what we do.
                </p>
              </div>
              <div className='btnServies'>
                <button className='text-center text-white'>View services</button>
              </div>
            </div>            
          </div>

        </div>
     
      </section>
    </div>
  )
}

export default Services