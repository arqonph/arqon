import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '/components/landing/Navigation-bar'
import Footer from '/components/landing/Footer'
import arqonTopImg from '/assets/01_Arqon_top_image.jpg'

export default function Projects() {
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
        <p className='page-title'>Projects</p>
      </div>

      <div className='container'>
        <div class='row'>
          <div className='col-md-2'>
            <span>&nbsp;</span>
          </div>
          <div className='col-md-8 text-center'>
            <div className='page-desc_border-bottom'>
              <span className='page-desc-black'>Our</span>&nbsp;&nbsp;<span className='page-desc-turquoise'>EXPERTISE</span><span className='page-desc-black'>&nbsp;from client-tested</span>&nbsp;&nbsp;<span className='page-desc-turquoise'>EXPERIENCE.</span>
            </div>
          </div>
          <div className='col-md-2'>
            <span>&nbsp;</span>
          </div>
        </div>
        <div class='row'>
            <div className='col-md-2'>
                <span>&nbsp;</span>
            </div>
            <div className='col-md-8 text-center'>           
                <div className=''>
                    <br/><p>It's not just about our more than<span className='page-desc-turquoise-sm'>16 years</span>  
                    &nbsp;of design and project management experience we have under our belt. Our credentials 
                        include leading the architectural teams responsible for some of the most distinguished
                        <span className='page-desc-black-sm'>&nbsp; residential, office and commercial &nbsp;</span>developments in the country.</p>
                </div>
            </div>
            <div className='col-md-2'>
            <span>&nbsp;</span>
          </div>
        </div>
        <br></br>
      </div>


{/* */}

          <div className='row gx-0 residence pt-3 d-flex justify-content-center align-items-center'>
            <div className='col-lg-6 projectContainer'>
              <div className='position-relative vResidence'>
              {/* <Image src={vResidence} alt='V Residence' width={920} height={455} /> */}
                <div className='residenceTitle py-0 py-md-1'>
                  <p>
                    <span className='head d-block'>V Residence</span>
                    <span className='address'> Ayala Alabang Village, Muntinlupa </span>
                  </p>
                </div>
                <div className='projectsOverlay'>
                  <div className='projectFooterOverlay'>
                    <div className=' residenceTitle py-0 py-md-1 footerOverlay'>
                      <p>
                        <span className='head d-block'>V Residence</span>
                        <span className='address'> Ayala Alabang Village, Muntinlupa </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 projectContainer'>
              <div className='position-relative nResidence'>
              {/* <Image src={nResidence} alt='N Residence' width={920} height={450} /> */}
                <div className='residenceTitle py-0 py-md-1'>
                  <p>
                    <span className='head d-block'>N Residence</span>
                    <span className='address'> Angono, Rizal </span>
                  </p>
                </div>
                <div className='projectsOverlay'>
                  <div className='projectFooterOverlay'>
                    <div className=' residenceTitle py-0 py-md-1 footerOverlay'>
                      <p>
                        <span className='head d-block'>N Residence</span>
                        <span className='address'> Angono, Rizal </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 projectContainer'>
              <div className='position-relative sResidence'>
              {/* <Image src={sResidence} alt='S Residence' width={920} height={450} /> */}
                <div className='residenceTitle py-0 py-md-1'>
                  <p>
                    <span className='head d-block'>S Residence</span>
                    <span className='address'> Park Estate, Antipolo, Rizal </span>
                  </p>
                </div>
                <div className='projectsOverlay'>
                  <div className='projectFooterOverlay'>
                    <div className=' residenceTitle py-0 py-md-1 footerOverlay'>
                      <p>
                        <span className='head d-block'>S Residence</span>
                        <span className='address'> Park Estate, Antipolo, Rizal </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 projectContainer'>
              <div className='position-relative dResidence'>
              {/* <Image src={dResidence} alt='D Residence' width={920} height={450} /> */}
                <div className='residenceTitle py-0 py-md-1'>
                  <p>
                    <span className='head d-block'>D Residence</span>
                    <span className='address'> BF Homes, Quezon City </span>
                  </p>
                </div>
                <div className='projectsOverlay'>
                  <div className='projectFooterOverlay'>
                    <div className=' residenceTitle py-0 py-md-1 footerOverlay'>
                      <p>
                        <span className='head d-block'>D Residence</span>
                        <span className='address'> BF Homes, Quezon City </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 projectContainer'>
              <div className='position-relative vResidenceTagaytay'>
              {/* <Image src={vResidenceTagaytay} alt='V Residence' width={920} height={450} /> */}
                <div className='residenceTitle py-0 py-md-1'>
                  <p>
                    <span className='head d-block'>V Residence</span>
                    <span className='address'> Royale Tagaytay Estates, Alfonso, Cavite </span>
                  </p>
                </div>
                <div className='projectsOverlay'>
                  <div className='projectFooterOverlay'>
                    <div className=' residenceTitle py-0 py-md-1 footerOverlay'>
                      <p>
                        <span className='head d-block'>V Residence</span>
                        <span className='address'> Royale Tagaytay Estates, Alfonso, Cavite </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 projectContainer'>
              <div className='position-relative tResidence'>
              {/* <Image src={tResidence} alt='T Residence' width={920} height={450} /> */}
                <div className='residenceTitle py-0 py-md-1'>
                  <p>
                    <span className='head d-block'>T Residence</span>
                    <span className='address'> Navotas </span>
                  </p>
                </div>
                <div className='projectsOverlay'>
                  <div className='projectFooterOverlay'>
                    <div className=' residenceTitle py-0 py-md-1 footerOverlay'>
                      <p>
                        <span className='head d-block'>T Residence</span>
                        <span className='address'> Navotas </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 projectContainer'>
              <div className='position-relative sResidenceLimay'>
              {/* <Image src={sResidenceLimay} alt='S Residence' width={920} height={450} /> */}
                <div className='residenceTitle py-0 py-md-1'>
                  <p>
                    <span className='head d-block'>S Residence</span>
                    <span className='address'> Limay, Bataan </span>
                  </p>
                </div>
                <div className='projectsOverlay'>
                  <div className='projectFooterOverlay'>
                    <div className=' residenceTitle py-0 py-md-1 footerOverlay'>
                      <p>
                        <span className='head d-block'>S Residence</span>
                        <span className='address'> Limay, Bataan </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 projectContainer'>
              <div className='position-relative dResidenceAveia'>
              {/* <Image src={dResidenceAveia} alt='D Residence' width={920} height={450} /> */}
                <div className='residenceTitle py-0 py-md-1'>
                  <p>
                    <span className='head d-block'>D Residence</span>
                    <span className='address'> Aveia by Alveo Ayala Land, Laguna </span>
                  </p>
                </div>
                <div className='projectsOverlay'>
                  <div className='projectFooterOverlay'>
                    <div className=' residenceTitle py-0 py-md-1 footerOverlay'>
                      <p>
                        <span className='head d-block'>D Residence</span>
                        <span className='address'> Aveia by Alveo Ayala Land, Laguna </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 projectContainer'>
              <div className='position-relative mResidence'>
              {/* <Image src={mResidence} alt='M Residence' width={920} height={450} /> */}
                <div className='residenceTitle py-0 py-md-1'>
                  <p>
                    <span className='head d-block'>M Residence</span>
                    <span className='address'> Hagonoy, Bulacan </span>
                  </p>
                </div>
                <div className='projectsOverlay'>
                  <div className='projectFooterOverlay'>
                    <div className=' residenceTitle py-0 py-md-1 footerOverlay'>
                      <p>
                        <span className='head d-block'>M Residence</span>
                        <span className='address'> Hagonoy, Bulacan </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 projectContainer'>
              <div className='position-relative santosResidence'>
              {/* <Image src={santosResidence} alt='Santos Residence' width={920} height={450} /> */}
                <div className='residenceTitle py-0 py-md-1'>
                  <p>
                    <span className='head d-block'>Santos Residence</span>
                    <span className='address'> Kingville Court, Antipolo, Rizal </span>
                  </p>
                </div>
                <div className='projectsOverlay'>
                  <div className='projectFooterOverlay'>
                    <div className=' residenceTitle py-0 py-md-1 footerOverlay'>
                      <p>
                        <span className='head d-block'>Santos Residence</span>
                        <span className='address'> Kingville Court, Antipolo, Rizal </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



{/* */}
      <footer>
        <Footer />
      </footer>
    </>
  )
}
