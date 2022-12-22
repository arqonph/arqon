import React, { useRef } from "react";
import Image from "next/image";

import vResidence01 from '../assets/ARQON_Valdehueza Residence-0001.jpg'
import vResidence02 from '../assets/ARQON_Valdehueza Residence-0002.jpg'
import vResidence06 from '../assets/ARQON_Valdehueza Residence-0006.jpg'
import vResidence07 from '../assets/ARQON_Valdehueza Residence-0007.jpg'
import vResidence08 from '../assets/ARQON_Valdehueza Residence-0008.jpg'
import vResidence09 from '../assets/ARQON_Valdehueza Residence-0009.jpg'
import vResidence10 from '../assets/ARQON_Valdehueza Residence-0010.jpg'
import vResidence11 from '../assets/ARQON_Valdehueza Residence-0011.jpg'
import vResidence13 from '../assets/ARQON_Valdehueza Residence-0013.jpg'

import nResidence01 from '../assets/ARQON_Nicolas Residence_01.jpg'
import nResidence02 from '../assets/ARQON_Nicolas Residence_02.jpg'
import nResidence03 from '../assets/ARQON_Nicolas Residence_03.jpg'
import nResidence04 from '../assets/ARQON_Nicolas Residence_04.jpg'
import nResidence05 from '../assets/ARQON_Nicolas Residence_05.jpg'
import nResidence06 from '../assets/ARQON_Nicolas Residence_06.jpg'
import nResidence07 from '../assets/ARQON_Nicolas Residence_07.jpg'
import nResidence08 from '../assets/ARQON_Nicolas Residence_08.jpg'
import nResidence09 from '../assets/ARQON_Nicolas Residence_09.jpg' 
import nResidence10 from '../assets/ARQON_Nicolas Residence_10.jpg'
import nResidence11 from '../assets/ARQON_Nicolas Residence_11.jpg'

import sResidence03 from '../assets/01_Arqon_Projects_03.jpg'

import dResidence01 from '../assets/ARQON_Dizon Residence_01.jpg'
import dResidence02 from '../assets/ARQON_Dizon Residence_02.jpg'
import dResidence03 from '../assets/ARQON_Dizon Residence_03.jpg'
import dResidence04 from '../assets/ARQON_Dizon Residence_04.jpg'
import dResidence05 from '../assets/ARQON_Dizon Residence_05.jpg'
import dResidence06 from '../assets/ARQON_Dizon Residence_06.jpg'
import dResidence07 from '../assets/ARQON_Dizon Residence_07.jpg'

import vResidenceTagaytay00 from '../assets/V_Residence_Tagaytay.jpg'
import vResidenceTagaytay01 from '../assets/ARQON_V Residence_01.jpg'
import vResidenceTagaytay02 from '../assets/ARQON_V Residence_02.jpg'
import vResidenceTagaytay03 from '../assets/ARQON_V Residence_03.jpg'
import vResidenceTagaytay04 from '../assets/ARQON_V Residence_04.jpg'
import vResidenceTagaytay05 from '../assets/ARQON_V Residence_05.jpg'
import vResidenceTagaytay06 from '../assets/ARQON_V Residence_06_Perspective.jpg'
import vResidenceTagaytay07 from '../assets/ARQON_V Residence_07_Vinekar-0004 copy.jpg' //too big
import vResidenceTagaytay08 from '../assets/ARQON_V Residence_08_Vinekar-0005 copy.jpg' //too small

import gResidence01 from '../assets/G_Residence.jpg'

import tResidence01 from '../assets/ARQON_T Residence_01.jpg'
import tResidence02 from '../assets/ARQON_T Residence_02.jpg'
import tResidence03 from '../assets/ARQON_T Residence_03.jpg'
import tResidence04 from '../assets/ARQON_T Residence_04.jpg'
import tResidence05 from '../assets/ARQON_T Residence_05.jpg'
import tResidence06 from '../assets/ARQON_T Residence_06.jpg'
import tResidence07 from '../assets/ARQON_T Residence_07.jpg'
import tResidence08 from '../assets/ARQON_T Residence_08.jpg'
import tResidence09 from '../assets/ARQON_T Residence_09.jpg'
import tResidence10 from '../assets/ARQON_T Residence_10.jpg'
import tResidence11 from '../assets/ARQON_T Residence_11.jpg'
import tResidence12 from '../assets/ARQON_T Residence_12.jpg'
import tResidence13 from '../assets/ARQON_T Residence_13.jpg'

import Head from "next/head";
import Title from "../components/landing/Title";
import Navbar from "/components/landing/Navigation-bar";
import Footer from "/components/landing/Footer";
import arqonTopImg from "../assets/01_Arqon_top_image.jpg";
import Slider from "react-slick";

export default function Projects({ feed }) {
  const images = feed.data
  const slideRef = useRef();
  // let previous = document.getElementsById('previous')
  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const next = () => {
    slideRef.current.slickNext();
  };

  const previous = () => {
    slideRef.current.slickPrev();
  };

  return (
    <div className="projects">
      <Title />
      <Navbar />
      <div className="cover-container d-flex flex-column position-relative display-box">
        <Image src={arqonTopImg} />
        <div className="card-img-overlay">
          <h1 className="card-title SRHero-text">Projects</h1>
        </div>
      </div>
      <div className="container section-1 text-center pt-5 pb-5 ">
        <div className="row">
          <div className="col">
            <h1 className="hr-services">
              <span className="text-black">
                OUR EXPERTISE FROM CLIENT TESTED EXPERIENCE
              </span>
            </h1>
            <p>
            ARQON provides quality service that meets architectural, project management, and design and build needs.<br></br>
            For more than 16 years, the team has been designing and managing projects for distinguished residential, office, and commercial developments in the country. We value our clients’ vision and the projects they entrust to us.
            </p>
          </div>
        </div>
      </div>

      {/* */}
      
      <div className="row gx-0 residence pt-3 d-flex justify-content-center align-items-center">
        {/* V Residence Start */}
        <div className="col-lg-6 projectContainer" type='button' data-bs-toggle='modal' data-bs-target='#vResidenceModal'>
          <div className="position-relative vResidence">
            {/* <Image src={vResidence} alt='V Residence' width={920} height={455} /> */}
            <div className="residenceTitle py-0 py-md-1">
              <p>
                <span className="head d-block">V Residence</span>
                <span className='address'> Ayala Alabang Village, Muntinlupa </span>
              </p>
            </div>
            <div className="projectsOverlay">
              <div className="projectFooterOverlay">
                <div className=" residenceTitle py-0 py-md-1 footerOverlay">
                  <p>
                    <span className="head d-block">V Residence</span>
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
               <div className='modal-header'>
                <h5 className='modal-title' id='vResidenceModelLabel'>V Residence</h5>
                Ayala Alabang Village, Muntinlupa
                <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
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
      {/* V Residence End */}

      {/* N Residence Start */}
        <div className="col-lg-6 projectContainer">
          <div className='position-relative nResidence' type='button' data-bs-toggle='modal' data-bs-target='#nResidenceModal'>
            {/* <Image src={nResidence} alt='N Residence' width={920} height={450} /> */}
            <div className="residenceTitle py-0 py-md-1">
              <p>
                <span className="head d-block">N Residence</span>
                <span className="address"> Angono, Rizal </span>
              </p>
            </div>
            <div className="projectsOverlay">
              <div className="projectFooterOverlay">
                <div className=" residenceTitle py-0 py-md-1 footerOverlay">
                  <p>
                    <span className="head d-block">N Residence</span>
                    <span className="address"> Angono, Rizal </span>
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
            <div className='modal-header'>
              <h5 className='modal-title' id='nResidenceModelLabel'>N Residence</h5>
              Angono, Rizal
              <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
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
      {/* N Residence End */}

      {/* S Residence Start */}
        <div className="col-lg-6 projectContainer">
        <div className='position-relative sResidence' type='button' data-bs-toggle='modal' data-bs-target='#sResidenceModal'>
            {/* <Image src={sResidence} alt='S Residence' width={920} height={450} /> */}
            <div className="residenceTitle py-0 py-md-1">
              <p>
                <span className="head d-block">S Residence</span>
                <span className="address">Park Estate, Antipolo, Rizal </span>
              </p>
            </div>
            <div className="projectsOverlay">
              <div className="projectFooterOverlay">
                <div className=" residenceTitle py-0 py-md-1 footerOverlay">
                  <p>
                    <span className="head d-block">S Residence</span>
                    <span className="address">Park Estate, Antipolo, Rizal</span>
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
              <div className='modal-header'>
                <h5 className='modal-title' id='sResidenceModelLabel'>S Residence</h5>
                Park Estate, Antipolo, Rizal
                <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
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
      {/* S Residence End */}

      {/* D Residence Start */}
      <div className="col-lg-6 projectContainer">
        <div className='position-relative dResidence' type='button' data-bs-toggle='modal' data-bs-target='#dResidenceModal'>
          {/* <Image src={dResidence} alt='D Residence' width={920} height={450} /> */}
          <div className="residenceTitle py-0 py-md-1">
            <p>
              <span className="head d-block">D Residence</span>
              <span className="address">BF Homes, Quezon City</span>
            </p>
          </div>
          <div className="projectsOverlay">
            <div className="projectFooterOverlay">
              <div className=" residenceTitle py-0 py-md-1 footerOverlay">
                <p>
                  <span className="head d-block">D Residence</span>
                  <span className="address">BF Homes, Quezon City</span>
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
            <div className='modal-header'>
              <h5 className='modal-title' id='dResidenceModelLabel'>D Residence</h5>
              BF Homes, Quezon City
              <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
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
      {/* D Residence End */}

      {/* V Residence Tagaytay Start */}
        <div className="col-lg-6 projectContainer">
          <div className="position-relative vResidenceTagaytay" type='button' data-bs-toggle='modal' data-bs-target='#vResidenceTagaytayModal'>
            {/* <Image src={vResidenceTagaytay} alt='V Residence' width={920} height={450} /> */}
            <div className="residenceTitle py-0 py-md-1">
              <p>
                <span className="head d-block">V Residence</span>
                <span className="address">Royale Tagaytay Estates, Alfonso, Cavite</span>
              </p>
            </div>
            <div className="projectsOverlay">
              <div className="projectFooterOverlay">
                <div className=" residenceTitle py-0 py-md-1 footerOverlay">
                  <p>
                    <span className="head d-block">V Residence</span>
                    <span className="address">Royale Tagaytay Estates, Alfonso, Cavite</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* V_RESIDENCE_TAGAYTAY MODAL AND CAROUSEL */}
        <div className='modal fade modal-xl' id='vResidenceTagaytayModal' tabIndex='-1' aria-labelledby='vResidenceTagaytayModelLabel' aria-hidden='true'>
          <div className='modal-dialog modal-dialog-centered '>
            <div className='modal-content modalProject'>
              <div className='modal-header'>
                <h5 className='modal-title' id='vResidenceTagaytayModelLabel'>V Residence</h5>
                Royale Tagaytay Estates, Alfonso, Cavite
                <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body m-4'>
                <div className='vResidenceTagaytayCarousel'>
                  <div id='vResidenceTagaytayCarouselControls' className='carousel slide' data-bs-ride='carousel'>
                    <div className='carousel-inner'>
                      <div className='carousel-item  active'>
                        <Image src={vResidenceTagaytay00} alt='V_Residence_Tagaytay_00' />
                      </div>
                      <div className='carousel-item'>
                        <Image src={vResidenceTagaytay01} alt='V_Residence_Tagaytay_01' />
                      </div>
                      <div className='carousel-item'>
                        <Image src={vResidenceTagaytay02} alt='V_Residence_Tagaytay_02' />
                      </div>
                      <div className='carousel-item'>
                        <Image src={vResidenceTagaytay03} alt='V_Residence_Tagaytay_03' />
                      </div>
                      <div className='carousel-item'>
                        <Image src={vResidenceTagaytay04} alt='V_Residence_Tagaytay_04' />
                      </div>
                      <div className='carousel-item'>
                        <Image src={vResidenceTagaytay05} alt='V_Residence_Tagaytay_05' />
                      </div>
                      <div className='carousel-item'>
                        <Image src={vResidenceTagaytay06} alt='V_Residence_Tagaytay_06' />
                      </div>
                      
                    
                    </div>
                    <button className='carousel-control-prev' type='button' data-bs-target='#vResidenceTagaytayCarouselControls' data-bs-slide='prev'>
                      <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                      <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next' type='button' data-bs-target='#vResidenceTagaytayCarouselControls' data-bs-slide='next'>
                      <span className='carousel-control-next-icon' aria-hidden='true'></span>
                      <span className='visually-hidden'>Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
      {/* V Residence Tagaytay End */}

        <div className="col-lg-6 projectContainer">
          <div className="position-relative tResidence">
            {/* <Image src={tResidence} alt='T Residence' width={920} height={450} /> */}
            <div className="residenceTitle py-0 py-md-1">
              <p>
                <span className="head d-block">T Residence</span>
                <span className="address"> Navotas </span>
              </p>
            </div>
            <div className="projectsOverlay">
              <div className="projectFooterOverlay">
                <div className=" residenceTitle py-0 py-md-1 footerOverlay">
                  <p>
                    <span className="head d-block">T Residence</span>
                    <span className="address"> Navotas </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 projectContainer">
          <div className="position-relative sResidenceLimay">
            {/* <Image src={sResidenceLimay} alt='S Residence' width={920} height={450} /> */}
            <div className="residenceTitle py-0 py-md-1">
              <p>
                <span className="head d-block">S Residence</span>
                <span className="address"> Limay, Bataan </span>
              </p>
            </div>
            <div className="projectsOverlay">
              <div className="projectFooterOverlay">
                <div className=" residenceTitle py-0 py-md-1 footerOverlay">
                  <p>
                    <span className="head d-block">S Residence</span>
                    <span className="address"> Limay, Bataan </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 projectContainer">
          <div className="position-relative dResidenceAveia">
            {/* <Image src={dResidenceAveia} alt='D Residence' width={920} height={450} /> */}
            <div className="residenceTitle py-0 py-md-1">
              <p>
                <span className="head d-block">D Residence</span>
                <span className="address">
                  {" "}
                  Aveia by Alveo Ayala Land, Laguna{" "}
                </span>
              </p>
            </div>
            <div className="projectsOverlay">
              <div className="projectFooterOverlay">
                <div className=" residenceTitle py-0 py-md-1 footerOverlay">
                  <p>
                    <span className="head d-block">D Residence</span>
                    <span className="address">
                      {" "}
                      Aveia by Alveo Ayala Land, Laguna{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 projectContainer">
          <div className="position-relative mResidence">
            {/* <Image src={mResidence} alt='M Residence' width={920} height={450} /> */}
            <div className="residenceTitle py-0 py-md-1">
              <p>
                <span className="head d-block">M Residence</span>
                <span className="address"> Hagonoy, Bulacan </span>
              </p>
            </div>
            <div className="projectsOverlay">
              <div className="projectFooterOverlay">
                <div className=" residenceTitle py-0 py-md-1 footerOverlay">
                  <p>
                    <span className="head d-block">M Residence</span>
                    <span className="address"> Hagonoy, Bulacan </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 projectContainer">
          <div className="position-relative santosResidence">
            {/* <Image src={santosResidence} alt='Santos Residence' width={920} height={450} /> */}
            <div className="residenceTitle py-0 py-md-1">
              <p>
                <span className="head d-block">Santos Residence</span>
                <span className="address">
                  {" "}
                  Kingville Court, Antipolo, Rizal{" "}
                </span>
              </p>
            </div>
            <div className="projectsOverlay">
              <div className="projectFooterOverlay">
                <div className=" residenceTitle py-0 py-md-1 footerOverlay">
                  <p>
                    <span className="head d-block">Santos Residence</span>
                    <span className="address">
                      {" "}
                      Kingville Court, Antipolo, Rizal{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Projects */}
      {/* Start Clients Say */}
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#76CBC1",
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <div className="clientSlide pb-5 col-xxl-12 col-xl-6">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ color: "white", borderBlock: "solid", borderTop: 0 }}
          >
            <div className="ps-xxl-2">
              <br />
              <span style={{ color: "white", fontSize: 25 }}>
                what our clients say
              </span>
            </div>
            <div className="controls pe-xxl-5">
              <button
                className="previous border-0"
                style={{ backgroundColor: "#76CBC1" }}
                onClick={previous}
              >
                <span style={{ color: "white", fontSize: 25 }} className="fs-1">
                  &#8249;
                </span>
              </button>
              <button
                className="next border-0 "
                style={{ backgroundColor: "#76CBC1" }}
                onClick={next}
              >
                <span style={{ color: "white", fontSize: 25 }} className="fs-1">
                  &#8250;
                </span>
              </button>
            </div>
          </div>
          <div className="my-slider ">
            {/* <div className='slide d-flex align-items-center justify-content-cetner'> */}
            <Slider ref={slideRef} {...settings}>
              <div className="slide-comment comment1">
                <p>
                  <span>
                    We appoint ARQON because of their aesthetic taste. But we
                    were surprised because they delivered more than what we
                    expected. It was such a smooth process that building our
                    dream home was so chill. I like the transparency and the
                    commitment to the project. They were easy to talk to and we
                    had almost zero problems, making it such an easy ride for my
                    growing family. The best part about them is their commitment
                    even after the turn-over of the house. That’s what made us
                    believe we made the right decision with ARQON.
                  </span>
                </p>
                <span className="clientName">
                  Pao and Kat Villar-Valdehueza
                </span>
                <br />
                <span>Hueza and Valde The Good Froot</span>
              </div>
              <div className="slide-comment comment2">
                <p>
                  <span>
                    It was the best decision to hire Arqon to design and build
                    our dream vacation home. We met them in 2019 to kick off the
                    project and amidst the Taal eruption and long pandemic, they
                    managed to pull off a masterpiece that is beyond what we
                    ever imagined! They were always responsive to every single
                    question and request we have and worked on the budget we
                    set. And even after one year of turnover, they still provide
                    support whenever we need it! My husband and I are very
                    grateful to the entire team for making our dream come to
                    life.
                  </span>
                </p>
                <span className="clientName">Mihir and Princess Vinekar</span>
                <br />
                <span>Viram Villa Tagaytay</span>
              </div>
              <div className="slide-comment comment3">
                <p>
                  <span>
                    Considering constructing my family’s house was always a
                    stressful thought for me. As the time neared that I needed
                    to pursue building our house, thoughts of what people shared
                    to me, and me witnessing their experiences started to flood
                    my mind. Those shared experiences to me were not pleasant
                    ones. From tales of “be ready to put your marriage to the
                    test” to “be ready to financially go over budget” are just
                    examples of what were confronting me whenever I sought
                    advice from friends who have gone the path of constructing
                    their dream homes. When our turn finally came, I was blessed
                    to have met the team of Arqon. From the onset: discussing
                    the design to discussing the contract, up until finally
                    building, I would summarize the overall experience as
                    smooth, highly professional and most importantly true to
                    commitments. Never in my wildest dreams did I expect to
                    complete our dream house (covid times) in a little less than
                    a year, with the minimal of minimal (I must stress this) of
                    headaches. To summarize, dealing with Arqon was a breeze.
                    Simply put. Thank you Arqon for making this milestone in my
                    family’s life a positively memorable one.
                  </span>
                </p>
                <span className="clientName">Ariel Samaniego</span>
                <br />
                <span>VIn-Prints, Inc. </span>
              </div>
              <div className="slide-comment comment4">
                <p>
                  <span>
                    We absolutely love our new home and have received many
                    compliments on it! It was built with the highest quality and
                    turned out even more beautiful than we ever imagined. Seeing
                    the house come to life has been an exciting time for us, and
                    we were very pleased with the prompt attention to detail
                    shown by the team. From start to finish, this has been an
                    enjoyable project thanks to ARQON Design+Build. We love our
                    new dream home!
                  </span>
                </p>
                <span className="clientName">Mr. & Mrs. D</span>
                <br />
                <span>D Residence </span>
              </div>
              <div className="slide-comment comment5">
                <p>
                  <span>
                    ARQON helped me build my dream house from the planning stage
                    to full completion. When I bought a village lot of 235 sqm,
                    I knew I was in for a major challenge because I had big
                    plans that had to fit in a tiny space. In the tiny 235 sqm,
                    I wanted at least 3 bedrooms, 2 baths, a decent kitchen, a
                    generous living room space, pocket gardens, and as if to
                    make the project even more challenging, I wanted a pool.
                    After two preliminary meetings with Arqon, I was presented
                    with a brilliant plan that incorporates more than what I
                    initially thought. The resulting plan had 4 bedrooms, 3
                    baths, and all the rest of my specifications, in a coherent
                    layout that I immediately appreciated. It was a very easy
                    sell for me, as my sense of aesthetics and appreciation for
                    logic in architectural design was very much aligned with
                    Arqon’s. In executing the construction plan, three separate
                    contractors were hired. There was a contractor for the
                    building’s foundation and construction of a major retaining
                    wall at the basement level. There was a swimming pool
                    contract. Finally, Arqon was the main builder for the actual
                    structure. I give all the contractors, with Arqon as lead,
                    top commendation for the superb result of their work. Today,
                    my house is bordered by tall bamboos that work well to
                    highlight the design aesthetics of the structure, which land
                    squarely in the oxymoron: prominently subdued. I can
                    confidently say that it stands proud as the most beautiful
                    and well thought out in the two streets it is sitting on. As
                    a structure that is testament to the elegance of a
                    self-effacing design, it is a landmark.
                  </span>
                </p>
                <span className="clientName">Michael C.O. Santos</span>
                <br />
                <span>The Mango Farm </span>
              </div>
              <div className="slide-comment comment5">
                <p>
                  <span>
                    When we thought of having our office renovated, I didn’t
                    have a concrete plan of how I wanted it to look like. I knew
                    what we wanted in terms of workflow and layout but the
                    aesthetics, not so much. When April presented their concept,
                    it was perfect! Everything was well thought off and the plan
                    was laid off really well. I was so excited to see our new
                    office, our new “home”. Even if the construction was
                    affected by the lockdowns, they somehow managed to finish
                    the project swiftly. Everyone was also very easy to work
                    with. From the Architects to the whole team for making our
                    beautiful office, it makes us feel good going to work
                    everyday.
                  </span>
                </p>
                <span className="clientName">Anna Baysic</span>
                <br />
                <span>Dexact Printing Services</span>
              </div>
              <div className="slide-comment comment5">
                <p>
                  <span>
                    Arqon Design+Build helped us in many ways in achieving our
                    dream home. They listened to your inputs very well and gave
                    their honest opinions regarding the layout, material and the
                    whole plan. They treat you professionally as clients while
                    giving you suggestions like a friend. The team is creative ,
                    talented, knowledgeable and most of all, they can be
                    trusted.
                  </span>
                </p>
                <span className="clientName">Derek and Lea Yee</span>
                <br />
                <span>Likhang Malaya Studios and Motorcycle Cinema</span>
              </div>
              <div className="slide-comment comment5">
                <p>
                  <span>
                    Working with them is one of the best decisions we made in
                    planning our place. Everything was designed based on our
                    input and comfort. The assurance and confidence that we felt
                    during the meeting is one of the factors that made every
                    planning easy. From investing their time during the
                    meetings, considering the budget allocated for the project
                    and patience in taking minor revision, everything works
                    perfectly well. We are more than satisfied with the outcome.
                    Thank you ARQON Design!
                  </span>
                </p>
                <span className="clientName">
                  John Marvi and Wellen Cerda-De Guzman
                </span>
                <br />
                <span>Cinemaworks Wedding Art Film</span>
              </div>
            </Slider>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* End Clients Say */}

      <footer>
        <Footer data={images}/>
      </footer>
    </div>
  );
}



export const getStaticProps = async (context) => {

  const longLiveToken = `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.IG_APP_SECRET}&access_token=${process.env.INSTAGRAM_KEY}`
  const longLiveData = await fetch(longLiveToken)
  const longLiveAttr = await longLiveData.json()
  // console.log(longLiveAttr)

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${process.env.INSTAGRAM_KEY}`
  const data = await fetch(url)
  const feed = await data.json()
  // console.log(feed)
  return {
    props: {
      feed
    }
  }
}
