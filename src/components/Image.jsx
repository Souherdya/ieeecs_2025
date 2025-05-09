import React from 'react'
import friends from '../assets/friends.jpeg'

export const Image = () => {
  return (
    <section className='relative overflow-hidden bg-[rgba(0,0,0,0)] flex justify-center items-center w-full h-screen'>
  <img
    src={friends}
    alt="group pic"
    className='w-[100vh] h-[100vw] object-cover rotate-[270deg]'
    draggable={false}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20 pointer-events-none" />
</section>
  )
}
