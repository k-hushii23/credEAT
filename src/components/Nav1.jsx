import React from 'react'

const Nav1 = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-16 py-4 bg-orange-500 text-white fixed top-0 left-0 z-50">
      
      <h1 className="text-xl font-bold">
        <span className="text-black ">Cred</span>
        <span className="text-white">EAT</span>
      </h1>

      <div className="hidden md:flex items-center gap-6 text-black font-semibold">
        <a href="#" className="px-4 py-2 border border-orange-500 rounded-lg hover:bg-white hover:text-black transition">Home</a>
        <a href="#" className="px-4 py-2 border border-orange-500 rounded-lg hover:bg-white hover:text-black transition">About</a>
        <a href="#" className="px-4 py-2 border border-orange-500 rounded-lg hover:bg-white hover:text-black transition">Contact</a>
      </div>

      

    </nav>
  )
}

export default Nav1