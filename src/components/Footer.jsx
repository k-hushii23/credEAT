import React from "react";
import { Link } from "react-router-dom";  
const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12 border-t border-gray-800">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            <span className="text-white">Cred</span>
            <span className="text-orange-500">EAT</span>
          </h2>

          <p className="text-gray-400 text-sm leading-6">
            A smarter way for students to manage meals, reduce food waste,
            and utilize credits efficiently across campus.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Contact
          </h3>

          <p className="text-gray-400 text-sm">
            Email: support@credeat.com
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Sonipat, Haryana, India
          </p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2026 CredEAT. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;