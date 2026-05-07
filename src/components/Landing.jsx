import React from 'react'
import ProbStatement from './ProbStatement';
import Nav1 from './nav1';
import Process from './Process';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Meals from './Meals';
import Credits from './Credits';
import Vendor from './Vendors';
import Impact from './Impact';
import Signup from './Signup';
import Login from './Login';


const Landing = () => {

  return (
    <>
    <Nav1/>
    <div className="h-screen bg-black text-white flex items-center px-6 md:px-16 ">
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
          <button className="mt-7 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-semibold hover:shadow-2xl hover:scale-105">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
          // src="https://media.cnn.com/api/v1/images/stellar/prod/230808093641-02-eating-disorders-college-students-eating-wellness-stock.jpg?c=16x9&q=h_833,w_1480,c_fill"
          src='https://www.genspark.ai/api/files/s/7gRlp2Fd?cache_control=3600"'
          alt="hero"
          className="w-[80%] md:w-[90%] object-contain"
          />
        </div>
      </div>
      <br />
    </div>

    
    <ProbStatement/>
    <Process/>
    <Impact/>
    <About/>
    <Contact/>
    <Footer/>
    
    </>
    
  );

}

export default Landing