import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About 
            <span className="text-orange-500">CredEAT</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mb-10">
            CredEAT is a student-focused platform designed to reduce food waste
            in college mess systems. Every day, a huge amount of food gets wasted
            simply because students skip meals or forget to attend.
        </p>
        <div className="grid md:grid-cols-2 gap-10 ">
            <div className="bg-gray-900 p-6 rounded-xl hover:shadow-2xl hover:scale-105 transition">
                <h2 className="text-2xl font-semibold mb-3 text-orange-500">The Problem</h2>
                <p className="text-gray-400">
                    Students often don’t have a way to plan or confirm meals in advance.
                    This leads to unnecessary food preparation and large-scale waste,
                    along with loss of prepaid meal credits.
                </p>
            </div>
            {/* solution */}
            <div className="bg-gray-900 p-6 rounded-xl hover:shadow-2xl hover:scale-105 transition">
                <h2 className="text-2xl font-semibold mb-3 text-orange-500">
                    Our Solution
                </h2>
                 <p className="text-gray-400">
                    CredEAT allows students to confirm meals beforehand, helping mess
                    management prepare only what is needed. This reduces waste, saves
                    money, and builds a more efficient campus system.
                </p>
            </div>
        </div>
        <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-3 text-orange-500">
                Our Vision
            </h2>
            <p className="text-gray-400 max-w-3xl">
                We aim to create smarter campuses where resources are used efficiently.
                By combining technology with everyday student habits, CredEAT promotes
                sustainability while making student life more convenient.
            </p>


        </div>
    </div>
  )
}

export default About