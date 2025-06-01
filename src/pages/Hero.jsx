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
      upcoming_event="Elevate" 
      StartDate="July 18, 2025" 
      event_description="Welcome to the Upside Down of events — where innovation meets imagination!
      IEEE IEM Student Branch, in collaboration with all the IEEE IEM student chapters, brings you a mind-bending extravaganza!
      Get ready to venture into Hawkins, where every event is powered by curiosity, creativity, and chaos!" 
      content_link="https://www.instagram.com/p/DKLxQc4Tb-6/?igsh=OWM1d3c2dmIxZnls"
      img={souherdya}
      />

      <Upcoming 
      id='2'
      upcoming_event="Avenza" 
      StartDate="August 9, 2025" 
      event_description="We're in the endgame now.” Portals will open. Realities may collide. Timelines will converge.
      No post-credits scene this time—Are you ready to assemble?
      Glorious purpose awaits this 9th of August!" 
      content_link="https://www.instagram.com/p/DImD4Mcykuo/"/>

      <hr className="h-[2px] my-8 mx-14 border-0 bg-orange-300"></hr>
      <Stat />
      <Team />
      <Team_Core/>
      <Contact />
    </div>
  )
}
