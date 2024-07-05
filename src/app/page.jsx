"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh"}}
      animate={{ y: "0%"}}
      transition={{ duration: 1}}
    >
    <div className="h-full flex flex-col lg:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
        <Image src="/file.png" alt="" fill className="object-contain"/>
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center items-center gap-5">
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold">Sreegopan K R.</h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" >Full Stack Developer</h2>
        {/* DESCRIPTION */}
        <p className="text-sm md:text-xl">Striving to be the Best Version of Myself
        </p>
        {/* BUTTONS */}
        <div className="flex self-start gap-4">
          <Link href="/portfolio">
            <button className="p-4 ring-1 ring-black rounded-lg bg-black text-white">View My Work</button>
          </Link>
          <Link href="/contact">
            <button className="p-4 ring-1 ring-black rounded-lg">Contact Me</button>
          </Link> 
        </div>
      </div>
    </div>
    </motion.div>
  )
};

export default Homepage;
