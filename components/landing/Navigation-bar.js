import React from 'react'
import Image from 'next/image'
import arqonLogo from '../../assets/Arqon-Logos-Word.jpg'
import Link from 'next/link'

function NavigationBar() {
  return (
    <div>
        <nav className='navbar navbar-expand-xl navbar-light'>
            <a href='#' className='navbar-logo'>
                <Image src={arqonLogo} height={100} width={200}/>
            </a>
            <div className='navMenu d-flex align-items-center align-content-center ms-auto pe-5 '>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item '>
                        <a className='nav-link text-white' href='#home'>HOME</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-white' href='#SERVICES'>SERVICES</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-white' href='#PROJECTS'>PROJECTS</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-white' href='#OUR STORY'>OUR STORY</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-white' href='#FEATURES'>FEATURES</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-white' href='#CONTACT US'>CONTACT US</a>
                    </li>
                </ul>
            
            </div>
        </nav>
    </div>
  )
}

export default NavigationBar