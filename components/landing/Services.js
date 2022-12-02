import React from 'react'

function Services() {
  return (
    <div className='services'>
      <section className='d-flex row mb-5 justify-content-center gy-3 gx-3 gy-md-0 text-wrap'>
        <div className='archiDesign col-xxl-3 col-lg-4 col-md-6 text-center container'>
          <div className='archiImage position-relative'>
            {/* <Image src={archiDesign} className='image'/> */}
            <div className='offerFooter'>
              <span className=''>Architectural Design</span>
            </div>
            <div className='overlay'>
              <div className='text'>
                <span>
                Meeting the need to create functional and aesthetically please and harmonious living spaces.
                Arqon has the expertise from client-tested experiences and almost a decade of training from the best Architectural firms of our country.
                </span>
              </div>
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
              <div className='text'>
                <span>
                It is the balance between the architectural design, time, quality, and cost - the clients’ most important considerations. 
                Design and Build service simplifies the process of project delivery while providing creative solutions.
                </span>
              </div>
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
              <span>Architectural Interiors</span>
            </div>
            <div className='overlay'>
              <div className='text'>
                <span>
                Is a tool that we use to create visual space simulations.
                It reduces conflicts and resolves problems ahead of time, especially in multi-disciplinary projects.
                In Arqon, we are equipped with skills and knowledge to be at par not only with world-class architecture but also with the emerging technology available to date.
                </span>
              </div>
              <div className='offerFooterOverlay'>
                <span className=''>Architectural Interiors</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xxl-3 col-md-6 d-flex position-relative pt-5 gy-xxl-0 gy-5'>
          <div className='whatWedo pe-5'>
            <div className='whatwedoDesc'>
              <span className='header bg-white pe-5'>WHAT WE DO</span>
              <div className='paragraph'>
                <p>
                  <span className='end2end'>End-to-end</span><br/>
                  <span className='end2end_dbserv'>design and build service.</span>
                </p>
                <p className=''>
                  ARQON is a full-service architectural firm that specializes in streamlined design and build projects. The firm envisions bringing your dreams of having quality and timeless houses to reality. 
                </p>
              </div>
              <div className='btnServies mt-4'>
                <button className='text-center text-white'>View Services</button>
              </div>
            </div>            
          </div>

        </div>
     
      </section>
    </div>
  )
}

export default Services