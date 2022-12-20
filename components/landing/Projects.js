import React , { useRef } from 'react'
import Image from 'next/image'
import vResidence01 from '../../assets/ARQON_Valdehueza Residence-0001.jpg'
import vResidence02 from '../../assets/ARQON_Valdehueza Residence-0002.jpg'
import vResidence06 from '../../assets/ARQON_Valdehueza Residence-0006.jpg'
import vResidence07 from '../../assets/ARQON_Valdehueza Residence-0007.jpg'
import vResidence08 from '../../assets/ARQON_Valdehueza Residence-0008.jpg'
import vResidence09 from '../../assets/ARQON_Valdehueza Residence-0009.jpg'
import vResidence10 from '../../assets/ARQON_Valdehueza Residence-0010.jpg'
import vResidence11 from '../../assets/ARQON_Valdehueza Residence-0011.jpg'
import vResidence13 from '../../assets/ARQON_Valdehueza Residence-0013.jpg'
import vResidence15 from '../../assets/ARQON_Valdehueza Residence-0015.jpg' //comment out muna, the resolution is too big.

import nResidence01 from '../../assets/ARQON_Nicolas Residence_01.jpg'
import nResidence02 from '../../assets/ARQON_Nicolas Residence_02.jpg'
import nResidence03 from '../../assets/ARQON_Nicolas Residence_03.jpg'
import nResidence04 from '../../assets/ARQON_Nicolas Residence_04.jpg'
import nResidence05 from '../../assets/ARQON_Nicolas Residence_05.jpg'
import nResidence06 from '../../assets/ARQON_Nicolas Residence_06.jpg'
import nResidence07 from '../../assets/ARQON_Nicolas Residence_07.jpg'
import nResidence08 from '../../assets/ARQON_Nicolas Residence_08.jpg'
import nResidence09 from '../../assets/ARQON_Nicolas Residence_09.jpg' //comment out muna, the resolution is too big.
import nResidence10 from '../../assets/ARQON_Nicolas Residence_10.jpg'
import nResidence11 from '../../assets/ARQON_Nicolas Residence_11.jpg'

import sResidence03 from '../../assets/01_Arqon_Projects_03.jpg'

import dResidence01 from '../../assets/ARQON_Dizon Residence_01.jpg'
import dResidence02 from '../../assets/ARQON_Dizon Residence_02.jpg'
import dResidence03 from '../../assets/ARQON_Dizon Residence_03.jpg'
import dResidence04 from '../../assets/ARQON_Dizon Residence_04.jpg'
import dResidence05 from '../../assets/ARQON_Dizon Residence_05.jpg'
import dResidence06 from '../../assets/ARQON_Dizon Residence_06.jpg'
import dResidence07 from '../../assets/ARQON_Dizon Residence_07.jpg'



function Projects() {
  return (
    <div>
        <section>
        <div className='pt-5'>
          <div className='sampleProject text-center'>
            <div className='container px-xxl-5 px-0 pb-3'>
              <h1><span className='sampleProjHead px-4 pb-4 '> DISCOVER SOME OF OUR PROJECTS </span></h1>
              <div className='d-flex justify-content-center text-center pt-4 '>
                <p>We provide end-to-end solutions with quality service to meet architectural, project management, and design and build needs. ARQON is a collaborative one-stop shop.</p>
              </div>
            </div>
          </div>
          <div className='row gx-0 residence pt-3 d-flex justify-content-center align-items-center'>
            <div className='col-lg-6 projectContainer' type='button' data-bs-toggle='modal' data-bs-target='#vResidenceModal'>
              <div className='position-relative vResidence'>
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
            {/* V_RESIDENCE MODAL AND CAROUSEL */}
            <div className='modal fade modal-xl' id='vResidenceModal' tabIndex='-1' aria-labelledby='vResidenceModelLabel' aria-hidden='true'>
              <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content modalProject'>
                  {/* <div className='modal-header'>
                    <h5 className='modal-title' id='vResidenceModelLabel'>V RESIDENCE</h5>
                    <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div> */}
                  <div className='modal-body m-4'>
                    <div className='vResidenceCarousel'>
                      <div id='vResidenceCarouselControls' className='carousel slide' data-bs-ride='carousel'>
                        <div className='carousel-inner'>
                          <div className='carousel-item active'>
                            <Image src={vResidence01} alt='V_Residence01' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={vResidence02} alt='V_Residence02' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={vResidence06} alt='V_Residence06' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={vResidence07} alt='V_Residence07' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={vResidence08} alt='V_Residence08' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={vResidence09} alt='V_Residence09' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={vResidence10} alt='V_Residence10' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={vResidence11} alt='V_Residence11' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={vResidence13} alt='V_Residence13' />
                          </div>
                        </div>
                        <button className='carousel-control-prev' type='button' data-bs-target='#vResidenceCarouselControls' data-bs-slide='prev'>
                          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                          <span className='visually-hidden'>Previous</span>
                        </button>
                        <button className='carousel-control-next' type='button' data-bs-target='#vResidenceCarouselControls' data-bs-slide='next'>
                          <span className='carousel-control-next-icon' aria-hidden='true'></span>
                          <span className='visually-hidden'>Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 projectContainer'>
              <div className='position-relative nResidence' type='button' data-bs-toggle='modal' data-bs-target='#nResidenceModal'>
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
            {/* N_RESIDENCE MODAL AND CAROUSEL */}
            <div className='modal fade modal-xl' id='nResidenceModal' tabIndex='-1' aria-labelledby='nResidenceModelLabel' aria-hidden='true'>
              <div className='modal-dialog modal-dialog-centered '>
                <div className='modal-content modalProject'>
                  {/* <div className='modal-header'>
                    <h5 className='modal-title' id='nResidenceModelLabel'>N RESIDENCE</h5>
                    <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div> */}
                  <div className='modal-body m-4'>
                    <div className='nResidenceCarousel'>
                      <div id='nResidenceCarouselControls' className='carousel slide' data-bs-ride='carousel'>
                        <div className='carousel-inner'>
                          <div className='carousel-item active'>
                          <Image src={nResidence01} alt='N_Residence01' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={nResidence02} alt='N_Residence02' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={nResidence03} alt='N_Residence03' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={nResidence04} alt='N_Residence04' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={nResidence05} alt='N_Residence05' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={nResidence06} alt='N_Residence06' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={nResidence07} alt='N_Residence07' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={nResidence08} alt='N_Residence08' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={nResidence09} alt='N_Residence09' />
                          </div> 
                          <div className='carousel-item'>
                            <Image src={nResidence10} alt='N_Residence10' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={nResidence11} alt='N_Residence11' />
                          </div>
                        </div>
                        <button className='carousel-control-prev' type='button' data-bs-target='#nResidenceCarouselControls' data-bs-slide='prev'>
                          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                          <span className='visually-hidden'>Previous</span>
                        </button>
                        <button className='carousel-control-next' type='button' data-bs-target='#nResidenceCarouselControls' data-bs-slide='next'>
                          <span className='carousel-control-next-icon' aria-hidden='true'></span>
                          <span className='visually-hidden'>Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 projectContainer'>
              <div className='position-relative sResidence' type='button' data-bs-toggle='modal' data-bs-target='#sResidenceModal'>
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
            {/* S_RESIDENCE MODAL AND CAROUSEL */}
            <div className='modal fade modal-xl' id='sResidenceModal' tabIndex='-1' aria-labelledby='sResidenceModelLabel' aria-hidden='true'>
              <div className='modal-dialog modal-dialog-centered '>
                <div className='modal-content modalProject'>
                  {/* <div className='modal-header'>
                    <h5 className='modal-title' id='sResidenceModelLabel'>N RESIDENCE</h5>
                    <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div> */}
                  <div className='modal-body m-4'>
                    <div className='sResidenceCarousel'>
                      <div id='sResidenceCarouselControls' className='carousel slide' data-bs-ride='carousel'>
                        <div className='carousel-inner'>
                          <div className='carousel-item  active'>
                            <Image src={sResidence03} alt='S_Residence03' />
                          </div>
                        </div>
                        <button className='carousel-control-prev' type='button' data-bs-target='#sResidenceCarouselControls' data-bs-slide='prev'>
                          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                          <span className='visually-hidden'>Previous</span>
                        </button>
                        <button className='carousel-control-next' type='button' data-bs-target='#sResidenceCarouselControls' data-bs-slide='next'>
                          <span className='carousel-control-next-icon' aria-hidden='true'></span>
                          <span className='visually-hidden'>Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 projectContainer'>
              <div className='position-relative dResidence' type='button' data-bs-toggle='modal' data-bs-target='#dResidenceModal'>
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
             {/* D_RESIDENCE MODAL AND CAROUSEL */}
             <div className='modal fade modal-xl' id='dResidenceModal' tabIndex='-1' aria-labelledby='dResidenceModelLabel' aria-hidden='true'>
              <div className='modal-dialog modal-dialog-centered '>
                <div className='modal-content modalProject'>
                  {/* <div className='modal-header'>
                    <h5 className='modal-title' id='sResidenceModelLabel'>N RESIDENCE</h5>
                    <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div> */}
                  <div className='modal-body m-4'>
                    <div className='dResidenceCarousel'>
                      <div id='dResidenceCarouselControls' className='carousel slide' data-bs-ride='carousel'>
                        <div className='carousel-inner'>
                          <div className='carousel-item active'>
                            <Image src={dResidence01} alt='D_Residence01' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={dResidence02} alt='D_Residence02' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={dResidence03} alt='D_Residence03' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={dResidence04} alt='D_Residence04' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={dResidence05} alt='D_Residence05' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={dResidence06} alt='D_Residence06' />
                          </div>
                          <div className='carousel-item'>
                            <Image src={dResidence07} alt='D_Residence07' />
                          </div>
                        </div>
                        <button className='carousel-control-prev' type='button' data-bs-target='#dResidenceCarouselControls' data-bs-slide='prev'>
                          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                          <span className='visually-hidden'>Previous</span>
                        </button>
                        <button className='carousel-control-next' type='button' data-bs-target='#dResidenceCarouselControls' data-bs-slide='next'>
                          <span className='carousel-control-next-icon' aria-hidden='true'></span>
                          <span className='visually-hidden'>Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects