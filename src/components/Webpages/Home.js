import React from 'react';
import Twitter from '../../assest/twitter.png'
import Facebook from '../../assest/facebook.png'
import Linkedin from '../../assest/linkedin.png'
import Instagram from '../../assest/instagram.png'

export const Home = () => {
  return (
    <div className="relative top-24 z-10 grid justify-center items-center w-full h-screen  text-white px-4 ">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
          Delivering Superior IT Solutions
        </h1>
        <h2 className="text-blue-500 font-bold mt-2">Services</h2>
      </div>

      {/* Description */}
      <div className="w-full max-w-3xl text-center text-lg sm:text-xl font-medium">
        <p>
          Welcome to <span className="font-bold text-blue-400">GP Tech Solution</span>, your trusted partner in innovative web development and IT solutions. 
          We are committed to delivering unparalleled services tailored to meet your unique business needs.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-4 justify-center mt-4">
        <img src={Twitter} alt="Twitter" className="w-10 h-10 rounded-full bg-blue-800 cursor-pointer hover:bg-blue-600 transition duration-300" />
        <img src={Facebook} alt="Facebook" className="w-10 h-10 rounded-full bg-blue-800 cursor-pointer hover:bg-blue-600 transition duration-300" />
        <img src={Linkedin} alt="Linkedin" className="w-10 h-10 rounded-full bg-blue-800 cursor-pointer hover:bg-blue-600 transition duration-300" />
        <img src={Instagram} alt="Instagram" className="w-10 h-10 rounded-full bg-blue-800 cursor-pointer hover:bg-blue-600 transition duration-300" />
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center mt-4">
        <button className="w-40 h-14 flex justify-center items-center font-bold text-lg bg-blue-900 rounded-2xl hover:bg-blue-700 hover:text-blue-300 transition duration-300">
          Get Quotes
        </button>
        <button className="w-40 h-14 flex justify-center items-center font-bold text-lg bg-blue-900 rounded-2xl hover:bg-blue-700 hover:text-blue-300 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};


