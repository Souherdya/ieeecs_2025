import React from 'react';
import { Home } from "../components/Home";
import { Image } from "../components/Image";
import { About } from "../components/About";
import { Events } from "../components/Events";
import { Stat } from "../components/Stat";
import { Team } from "../components/Team";
import { Contact } from '../components/Contact';
import { Navbar } from '../components/Navbar';
import { Counter } from '../components/Counter';


export const Hero = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <hr className="h-[2px] mx-14 border-0 bg-orange-300"></hr>
      <Counter />
      <Image />
      <About />
      <Events />
      <hr className="h-[2px] my-8 mx-14 border-0 bg-orange-300"></hr>
      <Stat />
      <Team />
      <Contact />
    </div>
  )
}
