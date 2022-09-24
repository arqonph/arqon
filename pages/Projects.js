import React,  { useRef } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '/components/landing/Navigation-bar'
import Footer from '/components/landing/Footer'
import arqonTopImg from '/assets/01_Arqon_top_image.jpg'
import Slider from 'react-slick'

 function Projects() {

  const slideRef = useRef()
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
    const next = () => {
        slideRef.current.slickNext()
    }

    const previous = () => {
        slideRef.current.slickPrev()
    }

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
{/* End Projects */}
{/* Start Clients Say */}
<div className='container-fluid' style={{backgroundColor: '#76CBC1', paddingLeft: 50, paddingRight: 50}}>
          <div className='clientSlide pb-5 col-xxl-12 col-xl-6'>
              <div className='d-flex justify-content-between align-items-center' style={{color: 'white', borderBlock: 'solid', borderTop: 0 }}>
                  <div className='ps-xxl-2'>
                    <br/>
                      <span style={{color: 'white', fontSize: 25 }} >what our clients say</span>
                  </div>
                  <div className='controls pe-xxl-5'>
                      <button className='previous border-0' style={{backgroundColor: '#76CBC1' }} onClick={previous}><span style={{color: 'white', fontSize: 25 }} className='fs-1'>&#8249;</span></button>
                      <button className='next border-0 ' style={{backgroundColor: '#76CBC1' }} onClick={next}><span style={{color: 'white', fontSize: 25 }} className='fs-1'>&#8250;</span></button>
                  </div>
              </div>
              <div className='my-slider '>
              {/* <div className='slide d-flex align-items-center justify-content-cetner'> */}
                  <Slider ref={slideRef} {...settings}>
                      <div className='slide-comment comment1'>
                        <p>
                          <span >
                          We appoint ARQON because of their aesthetic taste.
                          But we were surprised because they delivered more than what we expected.
                          It was such a smooth process that building our dream home was so chill.
                          I like the transparency and the commitment to the project.
                          They were easy to talk to and we had almost zero problems, making it such an easy ride for my growing family.
                          The best part about them is their commitment even after the turn-over of the house.
                          That’s what made us believe we made the right decision with ARQON.
                          </span>
                        </p>
                        <span className='clientName'>Pao and Kat Villar-Valdehueza</span><br/>
                        <span >Hueza and Valde The Good Froot</span>
                      </div>
                      <div className='slide-comment comment2'>
                        <p>
                          <span>
                          It was the best decision to hire Arqon to design and build our dream vacation home.
                          We met them in 2019 to kick off the project and amidst the Taal eruption and long pandemic, they managed to pull off a masterpiece that is beyond what we ever imagined!
                          They were always responsive to every single question and request we have and worked on the budget we set.
                          And even after one year of turnover, they still provide support whenever we need it!
                          My husband and I are very grateful to the entire team for making our dream come to life. 
                          </span>
                        </p>
                          <span className='clientName'>Mihir and Princess Vinekar</span><br/>
                          <span>Viram Villa Tagaytay</span>
                      </div>
                      <div className='slide-comment comment3'>
                        <p>
                          <span>
                          Considering constructing my family’s house was always a stressful thought for me.
                          As the time neared that I needed to pursue building our house, thoughts of what people shared to me, and me witnessing their experiences started to flood my mind.
                          Those shared experiences to me were not pleasant ones.
                          From tales of “be ready to put your marriage to the test” to “be ready to financially go over budget” are just examples of what were confronting me whenever I sought advice from friends who have gone the path of constructing their dream homes.
                          
                          When our turn finally came, I was blessed to have met the team of Arqon.
                          From the onset: discussing the design to discussing the contract, up until finally building, I would summarize the overall experience as smooth, highly professional and most importantly true to commitments.
                          Never in my wildest dreams did I expect to complete our dream house (covid times) in a little less than a year, with the minimal of minimal (I must stress this) of headaches.
                          
                          To summarize, dealing with Arqon was a breeze. Simply put. 
                          Thank you Arqon for making this milestone in my family’s life a positively memorable one. 
                          </span>
                        </p>
                          <span className='clientName'>Ariel Samaniego</span><br/>
                          <span>VIn-Prints, Inc. </span>
                      </div>
                      <div className='slide-comment comment4'>
                        <p>
                          <span>
                            We absolutely love our new home and have received many compliments on it!
                            It was built with the highest quality and turned out even more beautiful than we ever imagined.
                            Seeing the house come to life has been an exciting time for us, and we were very pleased with the prompt attention to detail shown by the team.
                            From start to finish, this has been an enjoyable project thanks to ARQON Design+Build.
                            We love our new dream home! 
                          </span>
                        </p>
                          <span className='clientName'>Mr. & Mrs. D</span><br/>
                          <span>D Residence </span>
                      </div>
                      <div className='slide-comment comment5'>
                        <p>
                          <span>
                          ARQON helped me build my dream house from the planning stage to full completion.
                          When I bought a village lot of 235 sqm, I knew I was in for a major challenge because I had big plans that had to fit in a tiny space.
                          In the tiny 235 sqm, I wanted at least 3 bedrooms, 2 baths, a decent kitchen, a generous living room space, pocket gardens, and as if to make the project even more challenging, I wanted a pool.
                          After two preliminary meetings with Arqon, I was presented with a brilliant plan that incorporates more than what I initially thought.
                          The resulting plan had 4 bedrooms, 3 baths, and all the rest of my specifications, in a coherent layout that I immediately appreciated.
                          It was a very easy sell for me, as my sense of aesthetics and appreciation for logic in architectural design was very much aligned with Arqon’s.
                          In executing the construction plan, three separate contractors were hired.
                          There was a contractor for the building’s foundation and construction of a major retaining wall at the basement level.
                          There was a swimming pool contract.  Finally,  Arqon was the main builder for the actual structure.
                          
                          I give all the contractors, with Arqon as lead, top commendation for the superb result of their work.
                          Today, my house is bordered by tall bamboos that work well to highlight the design aesthetics of the structure, which land squarely in the oxymoron: prominently subdued.
                          I can confidently say that it stands proud as the most beautiful and well thought out in the two streets it is sitting on.
                          As a structure that is testament to the elegance of a self-effacing design, it is a landmark.
                          </span>
                        </p>
                          <span className='clientName'>Michael C.O. Santos</span><br/>
                          <span>The Mango Farm </span>
                      </div>
                      <div className='slide-comment comment5'>
                        <p>
                          <span>
                          When we thought of having our office renovated, I didn’t have a concrete plan of how I wanted it to look like.
                          I knew what we wanted in terms of workflow and layout but the aesthetics, not so much.
                          When April presented their concept, it was perfect!
                          Everything was well thought off and the plan was laid off really well.
                          I was so excited to see our new office, our new “home”.
                          Even if the construction was affected by the lockdowns, they somehow managed to finish the project swiftly.
                          Everyone was also very easy to work with.
                          From the Architects to the whole team for making our beautiful office, it makes us feel good going to work everyday.
                          </span>
                        </p>
                          <span className='clientName'>Anna Baysic</span><br/>
                          <span>Dexact Printing Services</span>
                      </div>
                      <div className='slide-comment comment5'>
                        <p>
                          <span>
                          Arqon Design+Build helped us in many ways in achieving our dream home.
                          They listened to your inputs very well and gave their honest opinions regarding the layout, material and the whole plan.
                          They treat you  professionally as clients while giving you suggestions like a friend.
                          The team is creative , talented, knowledgeable and most of all, they can be trusted. 
                          </span>
                        </p>
                          <span className='clientName'>Derek and Lea Yee</span><br/>
                          <span>Likhang Malaya Studios and Motorcycle Cinema</span>
                      </div>
                      <div className='slide-comment comment5'>
                        <p>
                          <span>
                          Working with them is one of the best decisions we made in planning our place.
                          Everything was designed based on our input and comfort.
                          The assurance and confidence that we felt during the meeting is one of the factors that made every planning easy.
                          From investing their time during the meetings, considering the budget allocated for the project and patience in taking minor revision, everything works perfectly well.
                          We are more than satisfied with the outcome. Thank you ARQON Design!
                          </span>
                        </p>
                          <span className='clientName'>John Marvi and Wellen Cerda-De Guzman</span><br/>
                          <span>Cinemaworks Wedding Art Film</span>
                      </div>
                  </Slider>
              {/* </div> */}
              </div>
          </div>
        </div>
{/* End Clients Say */}


      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Projects