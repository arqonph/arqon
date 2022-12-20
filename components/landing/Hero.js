import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import arqonHero from '../../assets/01_Arqon_Home page_01-01.jpg'
import Slider from 'react-slick'

function Hero() {
  const videoRef = useRef()
  
  // useEffect(() => {
  //   const observer = new IntersectionObserver ((entries) =>{
  //     const entry = entries[0]
  //     videoRef.current.play()
  //     if(entry.isIntersecting){
  //       videoRef.current.play()
  //       // videoRef.current.volume= 0.3
  //     } else{
  //       videoRef.current.pause()
  //     }
  //   })
  //   observer.observe(videoRef.current)
  // },[])

  return (
    <div>

          <div className=''>
            <video className='arqonReels'
              controls
              controlsList='nodownload nofullscreen noplaybackrate foobar'
              disablePictureInPicture
              // ref={videoRef}
              autoPlay 
              loop
              muted
              >
              <source src='/Landing_Page_05_1080p.mp4' type='video/mp4'/>
            </video>
          </div>
        {/* </Slider> */}
    </div>
  )
}

export default Hero