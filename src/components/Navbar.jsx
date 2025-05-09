import { useState } from "react";
import img from "../assets/logo.png";
import iem from "../assets/iem.png";
import "./Navbar.css";
import { MdMenuOpen } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import {Link} from 'react-scroll';

export const Navbar = () => {

  const [isOpen, setisOpen]  = useState(false);

  return (
    <div className="p-4 lg:px-10">
      <nav className="hidden lg:flex justify-between items-center ">
        <div>
          <a href="/"><img src={img} width={150} alt="logo" /></a>
        </div>
        <ul className="flex justify-center gap-20">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} ><li className="hover:text-orange-400 cursor-pointer">Home</li></Link>
          
          <Link to="about" spy={true} smooth={true} offset={50} duration={500} ><li className="hover:text-orange-400 cursor-pointer">About</li></Link>

          <Link to="events" spy={true} smooth={true} offset={50} duration={500} ><li className="hover:text-orange-400 cursor-pointer">Events</li></Link>

          <Link to="team" spy={true} smooth={true} offset={50} duration={500} ><li className="hover:text-orange-400 cursor-pointer">Team</li></Link>

          <Link to="contact" spy={true} smooth={true} offset={0} duration={1000} ><li className="hover:text-orange-400 cursor-pointer">Contact</li></Link> 
        </ul>
        <div>
          <div className="bn54">
          <img src={iem} alt="iemlogo" />
          </div>
        </div>
      </nav>

      <nav className="lg:hidden">
        <div className="flex justify-between items-center">
          <div>
            <img src={img} width={100} alt="logo" />
          </div>
          <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 0.7}} onClick={() => {setisOpen(!isOpen)}} >
            <MdMenuOpen size={30} />
          </motion.button>
        </div>

        {isOpen && <AnimatePresence><motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1, ease: "easeInOut"}} className="flex flex-col mt-8 items-center gap-8">
          <ul className="flex flex-col  items-center gap-6">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} ><li className="hover:text-orange-400" onClick={() => {setisOpen(!isOpen)}}>Home</li></Link>
          
          <Link to="about" spy={true} smooth={true} offset={50} duration={500} ><li className="hover:text-orange-400" onClick={() => {setisOpen(!isOpen)}}>About</li></Link>

          <Link to="events" spy={true} smooth={true} offset={50} duration={500} ><li className="hover:text-orange-400" onClick={() => {setisOpen(!isOpen)}}>Events</li></Link>

          <Link to="team" spy={true} smooth={true} offset={50} duration={500} ><li className="hover:text-orange-400" onClick={() => {setisOpen(!isOpen)}}>Team</li></Link>

          <Link to="contact" spy={true} smooth={true} offset={0} duration={1000} ><li className="hover:text-orange-400 cursor-pointer" onClick={() => {setisOpen(!isOpen)}}>Contact</li></Link> 
          </ul>
          <div>
          </div>
        </motion.div></AnimatePresence>}
      </nav>

    </div>
  );
};
