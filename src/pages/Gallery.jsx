import React from 'react'
import undercons from '../assets/undercons.svg';

export const Gallery = () => {
  return (
    <section className='flex flex-col items-center py-12'>
      <div className='mb-0 flex flex-col items-center justify-center gap-10'>
        <h1 className='text-4xl text-center font-bold text-orange-600'>This part is under construction.</h1>
        <a href='/' className='hover:text-orange-500'>(Back to home?)</a>
      </div>
    <div className='flex items-center justify-center'>
      <img src={undercons} alt="under construction" className='w-[80vw] h-[80vh]'/>
    </div>
    </section>
  )
}
