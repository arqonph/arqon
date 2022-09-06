import React,  { useRef } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import Slider from 'react-slick'
import vResidence from '../../assets/V_Residence.jpg'
import nResidence from '../../assets/N_Residence.jpg'
import sResidence from '../../assets/S_Residence.jpg'
import dResidence from '../../assets/D_Residence.jpg'
import gResidence from '../../assets/G_Residence.jpg'
import tResidence from '../../assets/T_Residence.jpg'
import arqon from '../../assets/05_Arqon_Contact Us_01.jpg'

function ContactUs() {
  const { register, handleSubmit, formState : {errors}, reset } = useForm()

  const sendMessage = async(values) => {
    let msg = await fetch('api/sendMessage', {
      body: JSON.stringify(values),
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
    })
    
    console.log(msg)
    try{
      if(msg.status == 200){
        window.alert('Thank you for contacting us.')
        reset()
      }
    }catch(error){
      window.alert('Something went wrong! ' + error)
    }
    
  }

  const slideRef = useRef()
    // let previous = document.getElementsById('previous')
    let settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
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
   <section>
    <div>
      <div className='contact d-flex align-items-center justify-content-between row py-5 px-xxl-5 px-md-3 px-2'>
        <div className='contactUsdiv col-xl-12 col-xxl-7 row gx-3 text-xxl-start text-center'>
          <div className='clientSlide pb-5 col-xxl-12 col-xl-6'>
              <div className=' clientReview d-flex justify-content-between align-items-center'>
                  <div className='ps-xxl-2'>
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
          <div className='col-xxl-12 col-xl-6 col-12 row d-flex align-items-center justify-content-between'>
            <div className='col-xxl-5 col-xl-6 contactUsLine px-5'>
              <h1>" WE BRING <span>YOUR</span> VISION TO LIFE. "</h1>
            </div>
            <div className='col-xxl-6 col-xl-6'>
              <form className='contactUsForm' onSubmit={handleSubmit(sendMessage)}>
                {/* <div className='headLine'>
                  <span>Let's bring your vission to life.</span>
                </div> */}
                <div className='contactusHead'>
                    <h1 className='text-xxl-white'>Get in touch!</h1>
                </div>
                <div className='formFields'>
                  <div className='py-1'>
                    <input id='name' type='text' className='contactField form-control' placeholder='Full Name'
                      {...register('name', 
                        { required: 'Your name is required' , 
                          minLength: {
                            value: 4,
                            message: 'Minimum length is 4'
                          },
                          maxLength: {
                            value: 20,
                            message: 'Maximum length is 20'
                          }
                        })
                      }
                      ></input>
                      <span>{errors.name?.message}</span>
                  </div>
                  <div className='py-1'>
                    <input id='email' type='email' className='contactField form-control' placeholder='Email'
                      {...register('email', 
                        { required: 'Email Address Required', 
                          pattern: { 
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ , 
                            message: 'Invalid Email Address'} 
                        })
                        }
                      ></input>
                      <span>{errors.email?.message}</span>
                  </div>
                  <div className='py-1'>
                    <input id='number' type='text' className='contactField form-control' placeholder='Contact Number'
                      {...register('number', 
                        { required: 'Phone Number Required', 
                          pattern: {
                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im ,
                            message: 'Please enter a valid phone number'
                          } 
                        })
                      }
                    ></input>
                    <span>{errors.number?.message}</span>
                  </div>
                  <div className='py-1'>
                    <textarea id='message' type='field area' className='textArea form-control' placeholder='Hello, I am interest in...'
                    {...register('message',
                      { required: 'You need to enter your message.' , 
                        minLength: {
                          value: 20,
                          message: 'Minimum length is 20'
                        },
                        maxLength: {
                          value: 1000,
                          message: 'Maximum length is 1000'
                        }
                      })
                    } 

                    ></textarea>
                    <span>{errors.message?.message}</span>
                  </div>
                  <div className='pb-md-5'>
                    <button className='contactSubmitBtn' type='submit' id='submit'> Send </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='contactUsImage col-xl-12 col-xxl-5 arqon'>
        </div>
      </div>
    </div>
   
   </section>
  )
}

export default ContactUs