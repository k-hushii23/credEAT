import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-orange-500">Us</span>
        </h1>
        <p className="text-gray-400 mb-10 max-w-2xl">
            Have questions, suggestions, or want to collaborate?  
            We’d love to hear from you.
        </p>
        <form className="max-w-2xl space-y-6">
            <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white outline-none focus:ring-2 focus:ring-orange-500"
            />
             <textarea
             rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white outline-none focus:ring-2 focus:ring-orange-500">
            </textarea>
            <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition"
            >Send Message
            </button>

        </form>
        
    </div>
  )
}

export default Contact