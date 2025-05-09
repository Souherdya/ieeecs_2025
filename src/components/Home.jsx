import React from 'react'
import './Home.css';
import { motion } from 'framer-motion';
import {Link} from 'react-scroll';

export const Home = () => {

    return (
      <motion.div id='home' className='z-10 text-center pt-40 pb-20 flex flex-col items-center'>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, ease: "easeIn" }} className='text-orange-500 px-10 md:px-0 font-bold text-2xl lg:text-4xl mb-4'>IEEE Computer Society IEM Student Chapter</motion.h1>
        <p className='w-[80%] md:w-[60%] text-sm md:text-base text-slate-400 mb-8 text-justify'>Empowering students to build a better future through technology. This is the place where excellence meets creativity. As one of the foremost active societies of the college , we organise seminars , workshops and hackathons to simulate your engineering skills. Research activities, engaging talks on emerging new trends in technologies...these are just a few of what IEEE CS Student Chapter does. Sounds exciting, right? So join us in this journey and see for yourself!</p>
        <Link to="stat" spy={true} smooth={true} offset={-100} duration={800} >
          <button className="bn632-hover bn21 w-48 h-10 md:w-[200px] md:h-12">EXPLORE</button>
          </Link>

      </motion.div>
    )
  }
