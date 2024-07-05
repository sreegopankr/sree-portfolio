"use client"
import React, { useRef } from 'react';
import { motion, useInView, useScroll } from 'framer-motion';
import Brain from '@/components/Brain';

const AboutPage = () => {
  const containerRef = useRef();

  const {scrollYProgress} = useScroll({container: containerRef})

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {margin: "-100px"})

  const educationRef = useRef();
  const isEducationRefInView = useInView(educationRef, {margin: "-100px"})
  
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2'>
          {/* BIOGRAPHY CONTAINER */}
          <div className='flex flex-col gap-12 justify-center'>
            {/* BIOGRAPHY TITLE */}
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className='text-lg'>I am a self-taught full stack developer with a BTech in Civil Engineering. Driven by a passion for software development, I transitioned into the tech industry, embarking on a journey of continuous self-improvement. I have completed a cohort and earned certifications in Data Structures and Algorithms, as well as the MERN stack. Currently, I am enhancing my skills by learning Next.js.</p>
            {/* BIOGRAPHY QUOTE */}
            <span className='italic'>Sreegopan K R</span>
            {/* BIOGRAPHY SIGN SVG */}
            <div className='self-end'>
              <svg xmlns="http://www.w3.org/2000/svg" width="172" height="116" viewBox="0 0 172 116" fill="none">
              <path d="M18 102C44.2721 87.8269 52.9362 57.0589 52.2222 28.5C52.1647 26.1988 51.8986 15.7192 47.4444 15.7778C43.251 15.833 39.4371 20.4125 39.1667 24.3333C38.8479 28.9556 46.4314 32.7598 49.3333 34.8889C53.1474 37.6872 68.2222 45.043 68.2222 50.7778C68.2222 58.9111 54.1761 69.1972 48.5556 73.1111C38.555 80.0751 23.5402 86.5215 12.2222 78.5C2.71797 71.764 -5.66008 35.7868 15.2222 42.5556C27.4444 46.5172 29.453 66.2354 32.7778 76.1667C36.4649 87.1801 40.8899 106.773 52.7778 112.667C58.1658 115.338 64.2583 111.888 68.0556 108.167C75.588 100.785 76.0842 92.0674 72.4444 82.4444C71.4335 79.7716 67.0211 73.2756 66.6667 76.1111C66.3336 78.7758 68.307 80.307 70 82" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              <path d="M71 50C72.9856 46.6129 74 43.1535 74 39.2222C74 39.1415 73.9074 42.6667 74 43.7778C74.149 45.5659 76.0501 42.2 76.5556 42.0556C78.3122 41.5537 80.2348 40.8696 82 41.5C83.5684 42.0601 85.5482 41.9204 86 40C86.3996 38.3017 88.8739 39.4297 90 38.4444C92.6714 36.107 94.8973 37.8055 97.2222 35.2222C100.089 32.0368 98.4871 18.7964 96.2222 15.4444C92.5738 10.0448 96 27.6698 96 28.9444C96 29.9259 98.5229 38.0293 100 35.4444C100.627 34.3468 101.947 34.0961 102 32.7778C102.164 28.6801 103.957 43.4871 104 45.5556C104.09 49.8881 107.103 64 101.222 64C95.8707 64 94.8211 56.02 96.5556 52.0556C97.5636 49.7514 100.244 48.4987 101.556 46.2222C103.197 43.3732 104 40.2084 104 36.9444C104 35.388 103.767 31.354 105.222 30.2222C106.835 28.9681 107.513 34.5556 109.556 34.5556C111.337 34.5556 109.746 30.9247 109.222 29.2222C107.811 24.6363 114.26 28.8385 114.944 26.4444C115.731 23.6913 117.177 18.695 119.389 24.8889C119.727 25.8349 118.538 26.7349 118.778 28.4444C119.127 30.9399 119 33.4858 119 36" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              <path d="M119 26C119 21.0718 120.176 26.4412 121.889 23.4444C125.144 17.7478 117.941 19.497 121.222 22.7778C121.589 23.1444 122.473 22.031 123 22C124.752 21.8969 126.604 22.2589 128.333 21.9444C129.376 21.7549 129.068 19.7951 128.944 19.0556C128.596 16.9647 126.413 18.9511 125.667 17.7778C123.322 14.0925 134.442 14 135.5 14C138.181 14 141.7 5.70149 143 3.44444C144.076 1.57491 145.559 1.62655 146.444 3.77778C152.865 19.3695 151.47 38.3474 155.444 54.7222C156.449 58.8602 156.896 66 162.222 66C169.526 66 169.524 65.1416 170 58" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div 
            className='flex flex-col gap-12 justify-center'
            ref={skillRef}  
          >
            {/* SKILLS TITLE */}
            <motion.h1 
              className='font-bold text-2xl'
              initial={{x:"-300px"}}
              animate={ isSkillRefInView? {x:0}: {}}
              transition={{ delay: 0.2}}
              >SKILLS</motion.h1>
            {/* SKILLS LIST */}
            <motion.div className='flex gap-4 flex-wrap'
              initial={{x:"-300px"}}
              animate={ isSkillRefInView? {x:0}: {}}
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity:0.2 , y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EDUCATION CONTAINER */}
          <div 
            className='flex flex-col gap-12 justify-center pb-48'
            ref={educationRef}  
          >
            {/* EDUCATION TITLE */}
            <motion.h1 
              className='font-bold text-2xl'
              initial={{x:"-300px"}}
              animate={ isEducationRefInView? {x:0}: {}}
              transition={{ delay: 0.2}}
            >EDUCATION</motion.h1>
            {/* EDUCATION LIST */}
            <motion.div
              initial={{x:"-300px"}}
              animate={ isEducationRefInView? {x:0}: {}}
            >

              {/* EDUCATION LIST ITEM */}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3 '>
                  {/* COURSE */}
                  <div className='bg-white font-semibold rounded-b-lg rounded-s-lg p-3'>Btech CE</div>
                  {/* UNIVERSITY/SCHOOL */}
                  <div className='p-3 text-sm italic'>Cochin University Of Science and Technology</div>
                  {/* YEAR */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>2019-2023</div>
                  {/* CGPA */}
                  <div className='p-1 rounded text-sm bg-white font-semibold w-fit'>8.14 CGPA</div>
                </div>

                {/* CENTER */}
                <div className='w-1/6'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className='w-1/3 '></div>
              </div>

              {/* EDUCATION LIST ITEM */}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3 '>
                  
                </div>

                {/* CENTER */}
                <div className='w-1/6'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className='w-1/3 '>
                  {/* COURSE */}
                  <div className='bg-white font-semibold rounded-b-lg rounded-s-lg p-3'>12th CBSE</div>
                  {/* UNIVERSITY/SCHOOL */}
                  <div className='p-3 text-sm italic'>SN Vidya Bhavan</div>
                  {/* YEAR */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>2016-2018</div>
                  {/* CGPA */}
                  <div className='p-1 rounded text-sm bg-white font-semibold w-fit'>8.4 CGPA</div>
                </div>
              </div>

              {/* EDUCATION LIST ITEM */}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3 '>
                  {/* COURSE */}
                  <div className='bg-white font-semibold rounded-b-lg rounded-s-lg p-3'>10th CBSE</div>
                  {/* UNIVERSITY/SCHOOL */}
                  <div className='p-3 text-sm italic'>Hira English School</div>
                  {/* YEAR */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>2015</div>
                  {/* CGPA */}
                  <div className='p-1 rounded text-sm bg-white font-semibold w-fit'>10 CGPA</div>
                </div>

                {/* CENTER */}
                <div className='w-1/6'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className='w-1/3 '></div>
              </div>
                
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className='hidden lg:block lg:w-1/3 xl:w-1/2 sticky top-0 z-30'>
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage