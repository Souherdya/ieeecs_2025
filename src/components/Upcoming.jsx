import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';
import { useEffect } from 'react';
import amreta from '../assets/amreta.jpeg'
export default function Upcoming(props) {

    const upcoming_event = props.upcoming_event; //Change it and the StartDate, rest is automated
    const StartDate = props.StartDate; //In 'Month Date(No suffix), Year' format
    const event_description = props.event_description;
    const content_link = props.content_link;


    // Define the future date here (local variable)
    const targetTime = Date.parse(StartDate);

    const getTimeLeft = () => {
    const now = Date.now();
    const difference = targetTime - now;
    return difference > 0 ? difference : 0;
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeLeft = getTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (updatedTimeLeft === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
  };

  return (
    <div className='flex flex-col pt-8 pb-4 px-8 sm:px-16 w-full items-start'>

        <h1 className='text-lg md:text-3xl text-orange-500 font-bold' style={{display:props.id=='1'?'block':'none'}}>
        Upcoming Events
        </h1>
        
        <div className='flex flex-row justify-center w-full h-full my-6'> 
        <div className='h-full w-full'>
        <h1 className='text-lg md:text-2xl text-orange-500 font-bold'>{upcoming_event}</h1>
        <p className='mt-1 text-sm text-slate-500'>{StartDate}</p>
        <p className='my-2 md:block text-xs xl:text-base w-[80%] md:w-[100%]'>{event_description}</p>
            <div className='flex gap-8 pt-0 sm:pt-2'>
            <a
            href={content_link}
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className='flex justify-center items-center w-40 h-12 mt-6 hover:cursor-pointer rounded-3xl bg-orange-500 text-base md:text-lg font-bold text-white'>Check out</button>
            </a>
            <p className='flex justify-center p-4 items-center w-40 h-12 border-2 border-orange-400 rounded-3xl mt-6 text-xs md:text-sm font-regular text-orange-400 font-bold'>{formatTime(timeLeft)}</p>
            </div>
        </div>
        </div>

    </div>
  )
}
