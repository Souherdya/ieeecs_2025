import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Events.css';

import squid from '../assets/squid.jpg'
import converge from '../assets/converge-logo.png'
import elevate from '../assets/elevate.png'
import devsprint from '../assets/devsprint.jpg'
import deviosa from '../assets/deviosa.jpg'
import geller from '../assets/geller.png'
import converge_2k25 from '../assets/converge_2025.png'

export const Events = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  };

  const events = [{
    name: "Wingardium Deviosa",
    image: deviosa,
    date: "19.09.2023",
    text: "Stepping into the enchanting world of magic, our event  featured Sorting, Quidditch, Horcruxes, a Triwizard Tournament with a Yule Ball and more. It offered a diverse experience akin to Bertie Bott's Every Flavour Beans.Potterheads and Non-Potterheads, Wizards/Witches and Muggles, Aurors and Death Eaters, Gryffindors, Slytherins, Hufflepuffs and Ravenclaws—everyone was welcome to join the magical festivities!"
},
{
  name: "The Geller Cup",
  image: geller,
  date: "10.09.2024",
  text: "A fun-filled event where the only requirement is to bring your fabulous self and an appetite for some seriously epic games. Whether you’ve never seen an episode or just don’t get why people love that coffee shop so much, this is your chance to experience the magic (and madness) of Friends in the best way possible. Expect surprises, hilarious moments and maybe a few trivia questions that even a Friends fan might get wrong!"
},
{
    name: "Converge 2024",
    image: converge,
    date: "27.01.2024",
    text: "A mesmerizing tech fiesta that was more than just an event—it was an experience! Participants immersed themselves in riveting talks by industry trailblazers, unlocking the mysteries of cutting-edge technologies. They crafted their skills in application-based workshops, turning concepts into tangible tech marvels. The event also featured exciting technical and non-technical games, offering participants the chance to win cash prizes and more."
},
{
    name: "Elevate",
    image: elevate,
    date: "06.09.2023",
    text: "Elevate'23, the annual flagship event of IEEE IEM SB, took place from April 6th to 9th in collaboration with IEEE IEM CS. The event featured captivating workshops and exciting competitions, with enthusiastic participants winning cash prizes and more."
},
{
    name: "Squid Games",
    image: squid,
    date: "18.03.2023",
    text: "Drawing inspiration from the Netflix Drama Series, our Squid Game event was a blast! With four thrilling rounds challenging participants in aptitude, general knowledge, coding and more, each stage saw eliminations, paving the way for qualified participants. The ultimate round was a strategic showdown, requiring the four finalists to cleverly convince others to lose for personal gain."
},
{
    name: "Devsprint",
    image: devsprint,
    date: "08.11.2022",
    text: "Devsprint, a unique hackathon, kicked off with insightful sessions on Web Development, Machine Learning, and IoT. Partnering with industry leaders like Durbin Technologies and Applex Technologies, the event featured a hackathon on the above-mentioned tracks judged by these experts, who shared valuable insights for success in the field of technology"
},
{
  name: "Converge 2025",
  image: converge_2k25,
  date: "01.03.2025",
  text: "Converge 2025, the flagship event of IEEE IEM SB, is set to be yet another grand celebration of technology and innovation. Converge 2025 promises to be an unforgettable experience, featuring a lineup of captivating workshops and thrilling competitions and fun gaming carnival. Participants can look forward to engaging sessions led by industry experts, where they can enhance their skills and knowledge in various domains. The event will also include exciting competitions that will challenge participants to showcase their talents and creativity. With cash prizes and other exciting rewards up for grabs, Converge 2025 is sure to be a highlight of the year for all tech enthusiasts."
}]

  return (
    <section className='py-40' id='events'>
      <div className=' text-center px-14 mb-20'>
        <h1 className='text-3xl text-orange-500 md:text-4xl font-bold mb-4'>Events we hosted</h1>
        <p className=' text-gray-600 xl:w-2/4 lg:w-3/4 mx-auto'>From engaging workshops led by industry experts and technical competitions to fun themed events, we offer a diverse range of experiences to keep you engaged and excited. Stay tuned for upcoming events and register your spot.</p>
  </div>

        <div className="px-8 md:px-10">
        <Slider {...settings}>
            {events.map((event) => {
                return(
                    <div className="my-4 w-1/3 flex" key={event.name}>
                        <div className="flex mx-4 flex-col items-center justify-center">
                            <img src={event.image} alt="subject" className="flex flex-col items-center rounded-[12px] w-full h-[48vh]  mb-8"/>
                            <h1 className="font-semibold text-2xl text-center">{event.name}</h1>
                            <span className='mb-4 text-gray-400'>{event.date}</span>
                            <p className='text-left'>{event.text}</p>

                            {/*<div className='flex justify-end w-full mt-8'>
                              <button className="bn9"><span>Know more</span></button>
                </div>*/}
                        </div>
                    </div>
                )
            })}
            </Slider>
    </div>
      <div>
      </div>

    </section>
  )
}
