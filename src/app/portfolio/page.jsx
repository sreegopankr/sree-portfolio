"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 1,
    color: "from-[#b92b27] to-[#1565C0]",
    title: "Real Estate App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/estate.png",
    link: "https://kopzestate.netlify.app",
  },
  {
    id: 2,
    color: "from-[#1565C0] to-[#373B44]",
    title: "Next.js Porfolio App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/portfolio.png",
    link: "/",
  },
  {
    id: 3,
    color: "from-[#373B44] to-[#cc5333]",
    title: "Ecommerce App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/ecommerce.png",
    link: "https://kopzstore.netlify.app/",
  },
  {
    id: 4,
    color: "from-[#cc5333] to-[#dd1818]",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/spotify.png",
    link: "https://kopzspotify.netlify.app",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({target: ref});
  const x = useTransform(scrollYProgress,[0,1],["0%","-80%"]);

  return (
    <motion.div
    className="h-full"
    initial={{ y: "-200vh"}}
    animate={{ y: "0%"}}
    transition={{ duration: 1}}
    >
      <div className='h-[600vh]' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex justify-center items-center text-center text-8xl'>My Works</div>
        <div className='sticky top-0 h-screen flex gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className="flex">
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-[#434343] to-[#b92b27]'/>
          {items.map((item) => (
            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
              <div className=' flex flex-col text-white gap-6'>
                <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-7xl'>{item.title}</h1>
                <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[580px] xl:h-[380px]'>
                  <Image src={item.img} alt='' fill className="object-contain"/>
                </div>
                <p className='w-80 md:w96 lg:w-[500px] lg:text-md xl:w-[600px]'>{item.desc}</p>
                <Link href={item.link} className='flex justify-end'>
                  <button className='p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 rounded font-semibold m-4'>See Demo</button>
                </Link>
              </div>
            </div>
          ))}
          </motion.div>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-col justify-center items-center text-center gap-16'>
            <h1>Do you have a project?</h1>
            <div className='relative'>
            <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                A Self Taught Full Stack Developer &nbsp;🖤
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
            </div>
          </div>
    </motion.div>
    
  )
}


export default PortfolioPage