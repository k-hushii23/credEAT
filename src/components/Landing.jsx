import React from 'react'

const Landing = () => {

  return (
    <>
    
    <div className="min-h-screen bg-[rgb(232,234,238)] text-black flex items-center px-6 md:px-16ls">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
        <div className="w-full md:w-1/2">
          <p className="text-orange-500 mb-3">
            Built for Students
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Reduce Food Waste.
            <br />
            <span className="text-orange-500">
              Save Your Credits.
            </span>
          </h1>
          
          <p className="text-gray-400 mt-5 text-lg">
            Plan your meals smarter, confirm in advance, and avoid
            unnecessary mess food waste on campus.
          </p>
          <button className="mt-7 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-semibold">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/230808093641-02-eating-disorders-college-students-eating-wellness-stock.jpg?c=16x9&q=h_833,w_1480,c_fill"
          alt="hero"
          className="w-[80%] md:w-[90%] object-contain"
          />
        </div>
      </div>
      <br />
    </div>
    {/* PROBLEM SECTION */}
<section className="bg-[rgb(232,234,238)] text-black py-20 px-6 md:px-16">
  
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
      
      <div className="bg-gray-900 p-6 rounded-xl text-center">
        <p className="text-3xl font-bold text-orange-500">30%</p>
        <p className="text-gray-400 mt-2">Food Wasted</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl text-center">
        <p className="text-3xl font-bold text-orange-500">50%</p>
        <p className="text-gray-400 mt-2">Meals Skipped</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl text-center">
        <p className="text-3xl font-bold text-orange-500">₹</p>
        <p className="text-gray-400 mt-2">Credits Lost</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl text-center">
        <p className="text-3xl font-bold text-orange-500">0</p>
        <p className="text-gray-400 mt-2">Planning Tools</p>
      </div>

    </div>

  </div>
</section>
   
    </>
    
  );

}

export default Landing