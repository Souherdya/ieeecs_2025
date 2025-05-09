import React from 'react'
import img from "../assets/logo.png";
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center lg:flex-row flex-col">
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <div>
                        <img src={img} width={150} alt='logo'/>
                    </div>
                </div>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 lg:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2025 —
                    <span className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Made with ❤️ by Srijitt and Souherdya.</span>
                </p>
                
                <span className="inline-flex lg:ml-auto lg:mt-0 mt-4 justify-center px-8 items-center gap-5 md:justify-start">
                    <p className=' text-sm text-gray-400 font-medium'>FOLLOW US ON: </p>
                    <a href='https://www.facebook.com/profile.php?id=61553446581446' target='_blank' rel="noreferrer"><FaFacebook className='text-3xl text-orange-400 hover:text-blue-400 cursor-pointer' size={25} /></a>
                    <a href='https://www.instagram.com/ieeecsiem_official/' target='_blank' rel="noreferrer"><FaInstagram className='text-3xl text-orange-400 hover:text-violet-500 cursor-pointer' size={25} /></a>
                    <a href='https://www.linkedin.com/company/ieee-computer-society-iem/' target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-orange-500 hover:text-blue-700 cursor-pointer' size={25} /></a>
                </span>

                <Link to="home" spy={true} smooth={true} offset={-100} duration={800} >
                <span className='text-center hover:underline-offset-2 cursor-pointer hover:underline text-orange-500 px-4'>(Back to top)</span></Link>
            </div>
        </footer>
    )
}
