import React from 'react';
import { Home } from "../components/Home";
import { Image } from "../components/Image";
import { About } from "../components/About";
import { Events } from "../components/Events";
import { Stat } from "../components/Stat";
import { Team } from "../components/Team_Excom";
import { Contact } from '../components/Contact';
import { Navbar } from '../components/Navbar';
import { Counter } from '../components/Counter';
import Upcoming from '../components/Upcoming';
import { Team_Core } from '../components/Team_Core';
import souherdya from '../assets/Souherdya.jpeg'
export const Hero = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <hr className="h-[2px] mx-14 border-0 bg-orange-300"></hr>
      <Image />
      <About />
      <Events />
      <hr className="h-[2px] mx-14 border-0 bg-orange-300"></hr>

      <Upcoming
      id='1' 
      upcoming_event="SYTRON" 
      StartDate="August 29, 2025" 
      event_description="SYTRON is a premier tech event bringing together innovation, 
      creativity, and collaboration. The event features a diverse lineup of workshops, 
      panel discussions, coding challenges, gaming tournaments, and interactive sessions, 
      designed to inspire learners, developers, and tech enthusiasts alike." 
      content_link="https://www.sytron.co.in"
      />


      <hr className="h-[2px] my-8 mx-14 border-0 bg-orange-300"></hr>
      <Stat />
      <Team />
      <Team_Core/>
      <Contact />
    </div>
  )
}
