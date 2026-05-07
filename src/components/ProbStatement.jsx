import React from 'react'
import Process from './Process'


const ProbStatement = () => {
  return (
    <>
    <h1 className="text-4xl md:text-6xl font-bold leading-tight py-10 text-center pb-20 bg-black text-white">
            Food Wastage Is Costing  
            <span className="text-orange-500"> Everyone </span>
    </h1>
    <div>
        <section className="bg-black text-white py-10 px-6 md:px-16">
        
          

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 ">
    
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

    {/* (VISUAL CARDS) */}
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
    <h1 className="text-4xl md:text-6xl font-bold leading-tight pt-20 py-10 text-center pb-20 bg-black text-white">
           Who Benefits from 
            <span className="text-orange-500"> CredEAT???</span>
          </h1>
    {/* cards */}
    <div>
    <section className="py-0 px-6 bg-black">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch justify-center">

    {/* Student */}
    <div className="flex-1 bg-orange-500 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:scale-105 hover:shadow-2xl transition">
      <h2 className="text-xl font-bold mb-4 text-black">Student</h2>
      <p className="text-sm text-black/90 leading-relaxed">
        Save money by skipping meals you don’t need. Earn credits instantly and use them across campus instead of letting your meal value go to waste.
      </p>
    </div>

    {/* Mess Admin */}
    <div className="flex-1 bg-orange-500 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:scale-105 hover:shadow-2xl transition">
      <h2 className="text-xl font-bold mb-4 text-black">Mess Admin</h2>
      <p className="text-sm text-black/90 leading-relaxed">
        Get accurate meal demand in advance. Plan food preparation efficiently based on real student choices, reducing overproduction and minimizing food wastage across campus.
      </p>
    </div>

    {/* Vendors */}
    <div className="flex-1 bg-orange-500 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:scale-105 hover:shadow-2xl transition">
      <h2 className="text-xl font-bold mb-4 text-black">Vendors</h2>
      <p className="text-sm text-black/90 leading-relaxed">
        Increase customer flow as students use credits at campus outlets. Seamless credit-to-cash conversion ensures steady revenue while attracting more spending.
      </p>
    </div>

  </div>

</section>
    </div>
    
    </>
  )
}

export default ProbStatement