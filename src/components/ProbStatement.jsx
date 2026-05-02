import React from 'react'
import Process from './Process'


const ProbStatement = () => {
  return (
    <>
    
    <div>
        <section className="bg-[rgb(232,234,238)] text-black py-10 px-6 md:px-16">
        
          

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* LEFT SIDE (TEXT) */}
    <div className="w-full md:w-1/2">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        The Problem We Ignore Every Day
      </h2>

      <ul className="space-y-4 text-gray-400 text-lg">
        <li>• Mess food gets wasted daily</li>
        <li>• Students skip or forget meals</li>
        <li>• No system to plan meals in advance</li>
        <li>• Credits go unused and wasted</li>
      </ul>

    </div>

    {/* RIGHT SIDE (VISUAL CARDS) */}
    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
      
      <div className="bg-gray-900 p-6 rounded-xl text-center hover:shadow-2xl hover:scale-105 transition">
        <p className="text-3xl font-bold text-orange-500">30%</p>
        <p className="text-gray-400 mt-2">Food Wasted</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl text-center hover:shadow-2xl hover:scale-105 transition">
        <p className="text-3xl font-bold text-orange-500">50%</p>
        <p className="text-gray-400 mt-2">Meals Skipped</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl text-center hover:shadow-2xl hover:scale-105 transition">
        <p className="text-3xl font-bold text-orange-500">₹</p>
        <p className="text-gray-400 mt-2">Credits Lost</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl text-center hover:shadow-2xl hover:scale-105 transition">
        <p className="text-3xl font-bold text-orange-500">0</p>
        <p className="text-gray-400 mt-2">Planning Tools</p>
      </div>

    </div>

  </div>
</section>
    </div>
    {/* cards */}
    <div>
    <section className="py-20 px-10 bg-[rgb(232,234,238)]">
     <div className="flex items-center justify-center gap-8">
    
    <div className="bg-orange-500 rounded-3xl w-75 h-85 flex items-center justify-center cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]">
      <h3 className="text-2xl font-bold text-gray-900">Student</h3>
    </div>

    <div className="bg-orange-500 rounded-3xl w-75 h-85 flex items-center justify-center cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]">
      <h3 className="text-2xl font-bold text-gray-900">Admin</h3>
    </div>

    <div className="bg-orange-500 rounded-3xl w-75 h-85 flex items-center justify-center cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]">
      <h3 className="text-2xl font-bold text-gray-900">Vendors</h3>
    </div>

      </div>
    </section>
    </div>
    
    </>
  )
}

export default ProbStatement