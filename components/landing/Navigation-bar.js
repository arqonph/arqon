import React, { useState } from 'react'
import Image from 'next/image'
import arqonLogo from '../../assets/headerArqonLogo.jpg'
import arqonPrimary from '../../assets/Arqon-Primary.jpg'
import Link from 'next/link'

function NavigationBar() {
  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-light px-5'>
            <a href='/' className='arqonLogo d-lg-flex d-none'>
                <Image src={arqonLogo} height={43} width={219}/>
            </a>
            <div
                className='navbar-toggler collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#toggleMobileMenu'
                aria-controls='toggleMobileMenu'
                aria-expanded='false'
            >
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            <a href='/' className='arqonLogo d-lg-none d-flex'>
                <Image src={arqonPrimary} height={60} width={50}/>
            </a>
            <a className='nav-link text-white d-lg-none d-flex ps-5' href='#'><span className='letterQ'>Q</span></a>

            <div className='collapse navbar-collapse' id='toggleMobileMenu'>
                <div className='mobileLogo text-center'>
                    <a href='/' className='arqonLogo d-lg-none '>
                        <Image src={arqonLogo} height={43} width={219}/>
                    </a>
                    </div>
                <div className='navMenu ms-auto text-start'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <Link href='#'>
                                <a className='nav-link text-white'><span>HOME</span></a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='#SERVICES'>
                                <a className='nav-link text-white'><span>SERVICES</span></a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='#PROJECTS'>
                                <a className='nav-link text-white'><span>PROJECTS</span></a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='#OUR STORY'>
                                <a className='nav-link text-white'><span>OUR STORY</span></a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='#FEATURES'>
                                <a className='nav-link text-white'><span>FEATURES</span></a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/ContactUs'>
                                <a className='nav-link text-white'><span>CONTACT US</span></a>
                            </Link>
                        </li>
                        <li className='nav-item d-lg-flex d-none'>
                            <a className='nav-link text-white' href='#'><span>Q</span></a>
                        </li>
                    </ul>                
                </div>
            </div>
        </nav>
    </div>
  )
}
export default NavigationBar