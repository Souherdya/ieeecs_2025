import React from 'react'

export const About = () => {
  return (
    <div className='py-40 px-8 md:px-0 w-full bg-orange-500' id='about'>
        <div className='flex flex-col text-center md:text-left md:flex-row xl:px-12 items-center'>
            <h1 className='w-full md:px-24 xl:px-44 text-4xl lg:text-6xl font-bold  mb-4 md:md-0 text-white'>Well...,</h1>
            <p className='w-full lg:text-base bg-white shadow-2xl hover:shadow-white hover:shadow-lg md:pr-14 text-orange-500 p-8 rounded-xl md:mr-10'>Crave evolution?.. Dive into a world of excitement with IEEE IEM CS! Engage in seminars, hackathons and themed events. Chat with experts, join hands-on workshops and explore innovative research across fields of Machine Learning, Generative AI, Cybersecurity and Ethical Hacking.This is just the start—come, be part of the family: Where ideas spark and visionaries ascend.</p>
        </div>

        <div className='flex flex-col text-center md:text-left md:flex-row-reverse xl:px-12 items-center mt-20 md:mt-40'>
            <h1 className='w-full md:px-24 md:text-right xl:px-44 text-4xl lg:text-6xl font-bold  mb-4 md:md-0 text-white'>Guess What?</h1>
            <p className='w-full lg:text-base bg-white shadow-2xl hover:shadow-white hover:shadow-lg text-orange-500 p-8 rounded-xl md:ml-10'>Ever felt like you were born to innovate? We do too! For over a decade, IEEE IEM CS has ignited minds with lively discussions and thrilling competitions. Unleash your creative spirit as it's our mission to spark your passion, nurture knowledge, and mold future pioneers. Join us on this dynamic journey and be the leaders of tomorrow, today!</p>
        </div>

        <div className='flex flex-col text-center md:text-left md:flex-row xl:px-12 items-center mt-20 md:mt-40'>
            <h1 className='w-full md:px-24 xl:px-44 text-4xl lg:text-6xl font-bold  mb-4 md:md-0 text-white'>We're Fun.</h1>
            <p className='w-full lg:text-base md:mr-10 bg-white shadow-2xl hover:shadow-white hover:shadow-lg text-orange-500 p-8 rounded-xl'>Our exceptional team, driven by passion, flawlessly coordinates events around the clock. From strategizing future plans to meticulously handling every detail, we promise an unparalleled experience. Engaging in research, publishing papers, collaborating on tech projects, attending hackathons and participating in IEEE conferences, we break barriers and create impact together. Be part of our journey and leave your mark!</p>
        </div>
    </div>
  )
}
