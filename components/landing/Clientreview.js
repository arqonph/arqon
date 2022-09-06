import React, { useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import vResidence from '../../assets/V_Residence.jpg'
import nResidence from '../../assets/N_Residence.jpg'
import sResidence from '../../assets/S_Residence.jpg'
import dResidence from '../../assets/D_Residence.jpg'
import gResidence from '../../assets/G_Residence.jpg'
import tResidence from '../../assets/T_Residence.jpg'

function Clientreview() {
    const slideRef = useRef()
    // let previous = document.getElementsById('previous')
    let settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
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
                slidesToShow: 2,
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
    <section className='py-5'>
        <div className='clientSlide px-5 pb-5'>
            <div className=' clientReview d-flex justify-content-between align-items-center'>
                <div className='ps-xxl-5 py-2'>
                    <span className='header'>what our client say</span>
                </div>
                <div className='controls pe-xxl-5'>
                    <button className='previous border-0 bg-white' onClick={previous}><span className='fs-1'>&#8249;</span></button>
                    <button className='next border-0 bg-white' onClick={next}><span className='fs-1'>&#8250;</span></button>
                </div>
            </div>
            <div className='my-slider '>
            {/* <div className='slide d-flex align-items-center justify-content-cetner'> */}
                <Slider ref={slideRef} {...settings}>
                    <div className='slide-comment comment1'>
                        <Image src={vResidence} />
                    </div>
                    <div className='slide-comment comment2'>
                        <Image src={nResidence} />
                    </div>
                    <div className='slide-comment comment3'>
                        <Image src={sResidence} />
                    </div>
                    {/* <div className='slide-comment comment4'>
                        <Image src={dResidence} />
                    </div> */}
                    <div className='slide-comment comment5'>
                        <Image src={gResidence} />
                    </div>
                    <div className='slide-comment comment5'>
                        <Image src={tResidence} />
                    </div>
                </Slider>
            {/* </div> */}
            </div>
        </div>
    </section>
  )
}

export default Clientreview