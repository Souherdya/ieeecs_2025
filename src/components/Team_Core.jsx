import React from 'react';
import samya from '../assets/samya.jpeg';
import shinjan from '../assets/Shinjan.jpeg';
import swarnalee from '../assets/Swarnalee.jpeg'
import archishman from '../assets/archishman.jpeg'
import amreta from '../assets/amreta.jpeg'
import ishika from '../assets/ishika.jpeg'
import ananya from '../assets/ananya.jpeg'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Team_Core = () => {

    return (
        <section className='pb-20 bg-orange-500' id='team'>
            <div className='w-full text-center flex flex-col items-center mb-20'>
                <h1 className='w-[60%] text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4'>Our wonderful Core Team</h1>
            </div>

            <div className='flex flex-col items-center'>
                <div className='flex flex-col lg:flex-row justify-center gap-14 xl:gap-20 mb-20'>

                    <div className='w-full' id='rounak'>
                        <div className='absolute z-20 flex flex-1 flex-col w-fit items-center border-[0px] px-14 pt-10 pb-6 rounded-xl border-slate-200 shadow-lg'>
                            <div className='bg-gray-200 w-fit rounded-full overflow-hidden mb-4'>
                                <img src={archishman} alt="sumanta" className='w-36 h-36 object-cover' draggable={false}/>
                            </div>
                            <h1 className='text-xl font-semibold'>Archishman Das</h1>
                            <p className=' font-light'>Spokesperson</p>

                            <div  className='mt-8 flex gap-4 items-center justify-center'>
                            <a href='https://www.instagram.com/sasta_therapist' target='_blank' rel="noreferrer"><FaInstagram className='text-3xl text-pink-500 hover:text-violet-500 cursor-pointer' size={25} /></a>
                            <a href='https://www.linkedin.com/in/archishman-das-092b1428a/' target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer' size={25} /></a>
                            </div>
                        </div>

                        <div className=' bg-white  opacity-40 z-10 h-[332px] w-[257px] shadow-lg rounded-xl'></div>
                    </div>

                    <div className='w-full' id='samya'>
                        <div className='absolute z-20 flex flex-1 flex-col w-fit items-center border-[0px] px-14 pt-10 pb-6 rounded-xl border-slate-200 shadow-lg'>
                            <div className='bg-gray-200 w-fit rounded-full overflow-hidden mb-4'>
                                <img src={ishika} alt="shrestha" className='w-36 h-36 object-cover' draggable={false}/>
                            </div>
                            <h1 className='text-xl font-semibold'>Ishika Dutta</h1>
                            <p className='font-light'>PR Lead</p>

                            <div className='mt-8 flex gap-4 items-center justify-center'>
                            <a href="https://www.instagram.com/ishikadutta____?igsh=MXA3OTJhM2tmeHd2dw%3D%3D&utm_source=qr" target='_blank' rel="noreferrer"><FaInstagram className='text-3xl text-pink-500 hover:text-violet-500 cursor-pointer' size={25} /></a>
                            <a href='https://www.linkedin.com/in/ishika-dutta-7a13321b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer' size={25} /></a>
                        </div>
                    </div>

                        <div className=' bg-white  opacity-40 z-10 h-[332px] w-[257px] shadow-lg rounded-xl'></div>
                    </div>

                    <div className='w-full' id='subhraneel'>
                        <div className='absolute z-20 flex flex-1 flex-col w-fit items-center border-[0px] px-14 pt-10 pb-6 rounded-xl border-slate-200 shadow-lg'>
                            <div className='bg-gray-200 w-fit rounded-full overflow-hidden mb-4'>
                                <img src={swarnalee} alt="subhraneel" className='w-36 h-36 object-cover' draggable={false}/>
                            </div>
                            <h1 className='text-xl font-semibold'>Swarnalee Ray</h1>
                            <p className='font-light'>Graphics Lead</p>

                            <div className='mt-8 flex gap-4 items-center justify-center'>
                            <a href='https://www.instagram.com/srnal_e/' target='_blank' rel="noreferrer"><FaInstagram className='text-3xl text-pink-500 hover:text-violet-500 cursor-pointer' size={25} /></a>
                            <a href='https://www.linkedin.com/in/swarnalee-ray-451594255/' target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer' size={25} /></a>
                            </div>
                        </div>

                        <div className=' bg-white  opacity-40 z-10 h-[332px] w-[257px] shadow-lg rounded-xl'></div>
                    </div>

                </div>

                <div className='flex flex-col lg:flex-row justify-center gap-14 xl:gap-20'>

                    <div className='w-full' id='srijit'>
                        <div className='absolute z-20 flex flex-1 flex-col w-fit items-center border-[0px] px-14 pt-10 pb-6 rounded-xl border-slate-200 shadow-lg'>
                            <div className='bg-gray-200 w-fit rounded-full overflow-hidden mb-4'>
                                <img src={amreta} alt="Srijit" className='w-36 h-36  object-cover' draggable={false}/>
                            </div>
                            <h1 className='text-xl font-semibold'>Amreta Dey</h1>
                            <p className='font-light'>Content Lead</p>

                            <div className='mt-8 flex gap-4 items-center justify-center'>
                            <a href='https://www.instagram.com/its_a.d._1011/' target='_blank' rel="noreferrer"><FaInstagram className='text-3xl text-pink-500 hover:text-violet-500 cursor-pointer' size={25} /></a>
                            <a href='https://www.linkedin.com/in/amreta-dey-a1003b26b' target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer' size={25} /></a>
                            </div>
                        </div>

                        <div className=' bg-white  opacity-40 z-10 h-[332px] w-[257px] shadow-lg rounded-xl'></div>
                    </div>

                    <div className='w-full' id='Shinjan'>
                        <div className='absolute z-20 flex flex-1 flex-col w-fit items-center border-[0px] px-14 pt-10 pb-6 rounded-xl border-slate-200 shadow-lg'>
                            <div className='bg-gray-200 w-fit rounded-full overflow-hidden mb-4'>
                                <img src={ananya} alt="Shinjan" className='w-36 h-36 object-cover' draggable={false}/>
                            </div>
                            <h1 className='text-xl font-semibold'>Ananya Mukherjee</h1>
                            <p className='font-light'>Social Media Lead</p>

                            <div className='mt-8 flex gap-4 items-center justify-center'>
                                <a href="https://www.instagram.com/_ananya.mukherjee_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' rel="noreferrer"><FaInstagram className='text-3xl text-pink-500 hover:text-violet-500 cursor-pointer' size={25} /></a>
                                <a href='https://linkedin.com/in/ananya-mukherjee-43a0052a4' target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer' size={25} /></a>
                            </div>
                        </div>

                        <div className=' bg-white opacity-40 z-10 h-[332px] w-[257px] shadow-lg rounded-xl'></div>
                    </div>
                  </div>

                </div>
        </section>
    )
}
