import React from 'react'
import { useRef, useEffect, useState } from 'react';
import './Counter.css';
import { motion } from 'framer-motion';


export const Counter = () => {

  const Ref = useRef(null);
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;

  // The state for our timer
  const [timer1, setTimer1] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    // Compute years
    const d = Date.parse("September 15, 2024");
    const p = Date.parse(new Date());

    const total = d - p;
    const days = Math.round(total / day);
    const months = Math.floor(days / 30);
    const finalDays = days - months * 30;

    return {
      total,
      finalDays,
      months
    };
  };

  const startTimer = (e) => {
    let { total, finalDays, months } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer1(
        (months > 9 ? months : "0" + months) + " Months : " +
        (finalDays > 9 ? finalDays : "0" + finalDays) + " Days" + " to go!"
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer1("");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date("Sep 15, 2024 10:00:00");
    return deadline;
  };


  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);


  return (
    <>
    <div className='flex justify-between md:gap-10 items-center w-full px-0 lg:px-12 py-10'>
      <motion.div className='w-full pl-8' initial={{opacity: 0, x:-20}} animate={{opacity: 1, x:20}} transition={{delay: 0.7, ease: "easeIn"}}>
        <h1 className='text-lg md:text-2xl text-orange-500 font-bold'>Devsprint 2.0</h1>
        <p className='mt-1 text-sm text-slate-500'>September 2024</p>
        <p className='my-2 hidden md:block text-xs xl:text-sm w-[80%] md:w-[100%]'>Assemble your dream team with fellow problem-solvers and tech enthusiasts from across the globe. Brainstorm, prototype, and push boundaries, fueled by the shared energy of your team.</p>
      </motion.div>
      <div className='w-full flex justify-end h-fit '>
        <motion.div initial={{opacity: 0, x:20}} animate={{opacity: 1, x:-20}} transition={{delay: 1.2}} className='w-fit p-4'>
        <h1 className='text-xs md:text-lg xl:text-xl font-semibold text-orange-500 bn5 select-none'>{timer1}</h1>
        </motion.div>
      </div>
    </div>

  
    </>
  )
}
