import React from 'react'
import { useState, useEffect } from "react"

const Intro = () => {
    const [animate, setAnimate] = useState(false)
    useEffect(()=>{
        setAnimate(true)
    },[])
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white text-center ">
        
        <h1 className={`text-5xl md:text-7xl font-bold tracking-wide transition-all duration-2000 ${
        animate ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <span className="text-white ">Cred</span>
            <span className="text-orange-500 ">EAT</span>
            {/* CredEAT */}
        </h1>
         <h1 className={` text-gray-400 mt-6 text-lg md:text-xl  transition-all duration-2000 ${
        animate ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            Where Every Meal Has Purpose
        </h1>
        
        {/* <p className="text-gray-400 mt-5 text-lg">
            Plan your meals smarter, confirm in advance, and avoid
            unnecessary mess food waste on campus.
          </p> */}
    </div>
  )
}

export default Intro