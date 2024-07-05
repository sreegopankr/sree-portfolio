"use client"
import React from 'react'
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';


const TransitionProvider = ({children}) => {
    const pathName = usePathname();

  return (
    <AnimatePresence mode='wait'>
    <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-[#6e6d6d] to-[#3d3c3c]">
        <motion.div 
            className='w-screen h-screen bg-black z-40 fixed rounded-b-[100px]'
            animate={{ height: "0vh" }}
            exit={{ height: "140vh" }}
            transition={{duration: 0.5, ease: "easeOut"}}
        />
        <motion.div 
            className='fixed bottom-0 top-0 left-0 right-0 m-auto text-white text-8xl cursor-default z-50 w-fit h-fit'
            initial={{opacity:1}}
            animate={{ opacity:0 }}
            exit={{opacity:0 }}
            transition={{duration: 0.8, ease: "easeOut"}}
        >{pathName.substring(1)}</motion.div>
        <motion.div 
            className='w-screen h-screen bg-black z-30 fixed bottom-0 rounded-t-[100px]'
            initial={{ height: "140vh" }}
            animate={{ height: "0vh" , transition: { delay: 0.5 }}}
        />
        <div className="h-24">
            <Navbar/>
        </div>
        <div className="h-[calc(100vh-6rem)]">
            {children}
        </div>
    </div>
    </AnimatePresence>
  )
}

export default TransitionProvider