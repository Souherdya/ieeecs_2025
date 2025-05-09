import React from 'react';
import rounak from '../assets/rounak.jpg';
import sumanta from '../assets/sumanta.jpg';
import shrestha from '../assets/shrestha.jpg';
import kaushani from '../assets/kaushani.jpg';
import samya from '../assets/samya.jpeg';
import srijit from '../assets/srijit.jpg';
import subhraneel from '../assets/Subhraneel.jpeg';
import shinjan from '../assets/Shinjan.jpeg';
import souhardya from '../assets/souhardya.jpeg';
import souherdya from '../assets/Souherdya.jpeg'; 
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Team = () => {

    return (
        <section className='py-40 bg-orange-500' id='team'>
            <div className='w-full text-center flex flex-col items-center mb-20'>
                <h1 className='text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4'>Who's behind all this?</h1>
                <p className='text-white px-4  md:w-1/2'>Wondering who are the dedicated core members behind all this? There you go... Meet the Executives, the driving force behind it all! Working tirelessly day and night, they craft enriching experiences for y'all.</p>
            </div>

            <div className='flex flex-col items-center'>
                <div className='flex flex-col lg:flex-row justify-center gap-14 xl:gap-20 mb-20'>

                    <div className='w-full' id='rounak'>
                        <div className='absolute z-20 flex flex-1 flex-col w-fit items-center border-[0px] px-14 pt-10 pb-6 rounded-xl border-slate-200 shadow-lg'>
                            <div className='bg-gray-200 w-fit rounded-full overflow-hidden mb-4'>
                                <img src={rounak} alt="sumanta" className='w-36 h-36' draggable={false}/>
                            </div>
                            <h1 className='text-xl font-semibold'>Rounak Saha</h1>
                            <p className=' font-light'>Faculty Advisor</p>

                            <div  className='mt-8 flex gap-4 items-center justify-center'>
                            <a href='https://www.instagram.com/rounakrajsaha06/' target='_blank' rel="noreferrer"><FaInstagram className='text-3xl text-pink-500 hover:text-violet-500 cursor-pointer' size={25} /></a>
                            <a href='https://www.linkedin.com/in/rounak-raj-saha/' target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer' size={25} /></a>
                            </div>
                        </div>

                        <div className=' bg-white  opacity-40 z-10 h-[332px] w-[257px] shadow-lg rounded-xl'></div>
                    </div>

                    <div className='w-full' id='samya'>
                        <div className='absolute z-20 flex flex-1 flex-col w-fit items-center border-[0px] px-14 pt-10 pb-6 rounded-xl border-slate-200 shadow-lg'>
                            <div className='bg-gray-200 w-fit rounded-full overflow-hidden mb-4'>
                                <img src={samya} alt="shrestha" className='w-36 h-36' draggable={false}/>
                            </div>
                            <h1 className='text-xl font-semibold'>Samya Dutta</h1>
                            <p className='font-light'>Chairperson</p>

                            <div className='mt-8 flex gap-4 items-center justify-center'>
                            <a href="https://www.instagram.com/samyadutta29/" target='_blank' rel="noreferrer"><FaInstagram className='text-3xl text-pink-500 hover:text-violet-500 cursor-pointer' size={25} /></a>
                                <a href='https://www.linkedin.com/in/samya-dutta-74aa59249/' target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer' size={25} /></a>
                                 </div>
                        </div>

                        <div className=' bg-white  opacity-40 z-10 h-[332px] w-[257px] shadow-lg rounded-xl'></div>
                    </div>

                    <div className='w-full' id='subhraneel'>
                        <div className='absolute z-20 flex flex-1 flex-col w-fit items-center border-[0px] px-14 pt-10 pb-6 rounded-xl border-slate-200 shadow-lg'>
                            <div className='bg-gray-200 w-fit rounded-full overflow-hidden mb-4'>
                                <img src={subhraneel} alt="subhraneel" className='w-36 h-36 object-cover' draggable={false}/>
                            </div>
                            <h1 className='text-xl font-semibold'>Subhraneel Das</h1>
                            <p className='font-light'>Vice Chairperson</p>

                            <div className='mt-8 flex gap-4 items-center justify-center'>
                            <a href='https://www.instagram.com/_subhraneel.das_?igsh=MWE3Y3M5c2pldGxnZw==' target='_blank' rel="noreferrer"><FaInstagram className='text-3xl text-pink-500 hover:text-violet-500 cursor-pointer' size={25} /></a>
                            <a href='https://www.linkedin.com/in/subhraneeldasanalyst' target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer' size={25} /></a>
                            </div>
                        </div>

                        <div className=' bg-white  opacity-40 z-10 h-[332px] w-[257px] shadow-lg rounded-xl'></div>
                    </div>

                </div>

                <div className='flex flex-col lg:flex-row justify-center gap-14 xl:gap-20'>

                    <div className='w-full' id='srijit'>
                        <div className='absolute z-20 flex flex-1 flex-col w-fit items-center border-[0px] px-14 pt-10 pb-6 rounded-xl border-slate-200 shadow-lg'>
                            <div className='bg-gray-200 w-fit rounded-full overflow-hidden mb-4'>
                                <img src={srijit} alt="Srijit" className='w-36 h-36  object-cover' draggable={false}/>
                            </div>
                            <h1 className='text-xl font-semibold'>Srijit Chakraborty</h1>
                            <p className='font-light'>Treasurer</p>

                            <div className='mt-8 flex gap-4 items-center justify-center'>
                            <a href='https://www.instagram.com/__srijitt/' target='_blank' rel="noreferrer"><FaInstagram className='text-3xl text-pink-500 hover:text-violet-500 cursor-pointer' size={25} /></a>
                            <a href='https://www.linkedin.com/in/srijit-chakraborty154/' target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer' size={25} /></a>
                            </div>
                        </div>

                        <div className=' bg-white  opacity-40 z-10 h-[332px] w-[257px] shadow-lg rounded-xl'></div>
                    </div>

                    <div className='w-full' id='Shinjan'>
                        <div className='absolute z-20 flex flex-1 flex-col w-fit items-center border-[0px] px-14 pt-10 pb-6 rounded-xl border-slate-200 shadow-lg'>
                            <div className='bg-gray-200 w-fit rounded-full overflow-hidden mb-4'>
                                <img src={shinjan} alt="Shinjan" className='w-36 h-36' draggable={false}/>
                            </div>
                            <h1 className='text-xl font-semibold'>Shinjan Bhatta</h1>
                            <p className='font-light'>Secretary</p>

                            <div className='mt-8 flex gap-4 items-center justify-center'>
                                <a href="https://www.instagram.com/shinzo_speaks?igsh=MWJxY3R2ejR0ZXZw" target='_blank' rel="noreferrer"><FaInstagram className='text-3xl text-pink-500 hover:text-violet-500 cursor-pointer' size={25} /></a>
                                <a href='https://www.linkedin.com/in/shinjan-bhatta-10994828a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer' size={25} /></a>
                            </div>
                        </div>

                        <div className=' bg-white  opacity-40 z-10 h-[332px] w-[257px] shadow-lg rounded-xl'></div>
                    </div>


                    <div className='w-full' id='Souhadrya'>
                        <div className='absolute z-20 flex flex-1 flex-col w-fit items-center border-[0px] px-14 pt-10 pb-6 rounded-xl border-slate-200 shadow-lg'>
                            <div className='bg-gray-200 w-fit rounded-full overflow-hidden mb-4'>
                                <img src={souhardya} alt="Souhardya" className='w-36 h-36 object-cover' draggable={false}/>
                            </div>
                            <h1 className='text-xl font-semibold'>Souhardya Ray</h1>
                            <p className='font-light'>Joint - Secretary</p>

                            <div className='mt-8 flex gap-4 items-center justify-center'>
                                <a href="" target='_blank' rel="noreferrer"><FaInstagram className='text-3xl text-pink-500 hover:text-violet-500 cursor-pointer' size={25} /></a>
                                <a href='' target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer' size={25} /></a>
                            </div>
                        </div>

                        <div className=' bg-white  opacity-40 z-10 h-[332px] w-[257px] shadow-lg rounded-xl'></div>
                    </div>

                    <div className='w-full' id='Souherdya'>
                        <div className='absolute z-20 flex flex-1 flex-col w-fit items-center border-[0px] px-14 pt-10 pb-6 rounded-xl border-slate-200 shadow-lg'>
                            <div className='bg-gray-200 w-fit rounded-full overflow-hidden mb-4'>
                                <img src={souherdya} alt="Souherdya" className='w-36 h-36 object-cover' draggable={false}/>
                            </div>
                            <h1 className='text-xl font-semibold'>Souherdya Sarkar</h1>
                            <p className='font-light'>Webmaster</p>

                            <div className='mt-8 flex gap-4 items-center justify-center'>
                            <a href='' target='_blank' rel="noreferrer"><FaInstagram className='text-3xl text-pink-500 hover:text-violet-500 cursor-pointer' size={25} /></a>
                            <a href='https://www.linkedin.com/in/souherdya-sarkar/' target='_blank' rel="noreferrer"><FaLinkedin className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer' size={25} /></a>
                            </div>
                        </div>

                        <div className=' bg-white  opacity-40 z-10 h-[332px] w-[270px] shadow-lg rounded-xl'></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
