"use client"
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const text = "Say Hello";

const ContactPage = () => {
  const [success,setSuccess] = useState(false);
  const [error,setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
    className="h-full"
    initial={{ y: "-200vh"}}
    animate={{ y: "0%"}}
    transition={{ duration: 1}}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
          <div className='text-white'>
            {text.split("").map((letter,index)=>(
              <motion.span
                key={index}
                initial={{ opacity: 1}}
                animate={{ opacity: 0}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index*0.1,
                }}
              >{letter}</motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form 
          ref={form} 
          className='h-1/2 lg:h-full lg:w-1/2 flex flex-col text-xl bg-gray-600 rounded-xl justify-center p-24 gap-8'
          onSubmit={sendEmail}
        >
          <span>Dear Sreegopan,</span>
          <textarea name='user_message' rows={6} className='bg-transparent border-b-2 border-b-black resize-none outline-none'/>
          <span>My mail address is:</span>
          <input name='user_email' type="text" className='bg-transparent border-b-2 border-b-black  outline-none'/>
          <span>Regards</span>
          <button className='bg-black text-white p-4 rounded font-semibold text-gray-600'>Send</button>
          {success && <span className='text-green-600 font-semibold'>Your message has been sent successfully!</span> }
          {error && <span className='text-red-600 font-semibold'>Something went wrong!</span> }
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage