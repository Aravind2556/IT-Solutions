


// import React from 'react'
// import Twitter from '../../assest/twitter.png'
// import Facebook from '../../assest/facebook.png'
// import linedin from '../../assest/linkedin.png'
// import instagram from '../../assest/instagram.png'

// export const Home = () => {
//   return (
//     <div className="relative z-10 grid justify-center items-center w-full h-full text-white px-4 top-64 gap-10">
//       {/* Header */}
//       <div className="text-3xl font-semibold  sm:text-4xl md:text-5xl">
//         <p>Delivering Superior IT Solutions</p>
//         <p className="text-blue-700">Services</p>
//       </div>
      
//       {/* Description */}
//       <div className="w-full sm:w-full md:w-full  font-bold text-xl">
//         <p>Welcome to GP Tech Sollution, your trusted partner in innovative web development and IT solutions. Our commitment is to provide unparalleled services tailored to meet your unique business needs.</p>
//       </div>
      
//       {/* Flex section 1 */}
//       <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 justify-center">
//         <img src={Twitter} alt='image' className="w-8 h-8 rounded-full bg-blue-800 cursor-pointer hover:bg-blue-600"  />
//         <img src={Facebook} alt='image' className="w-8 h-8 rounded-full bg-blue-800 cursor-pointer hover:bg-blue-600 " />
//         <img src={linedin} alt='image' className="w-8 h-8 rounded-full bg-blue-800 cursor-pointer hover:bg-blue-600" />
//         <img src={instagram} alt='image' className="w-8 h-8 rounded-full bg-blue-800 cursor-pointer hover:bg-blue-600" />
        
//       </div>
      
//       {/* Flex section 2 */}
//       <div className="flex flex-col sm:flex-row gap-5 justify-center">
//         <p className="w-40 h-20 items-center flex justify-center font-bold text-xl text-white hover:text-blue-300 cursor-pointer bg-blue-900 rounded-2xl">Get Quotes</p>
//         <p className="w-40 h-20 items-center flex justify-center font-bold text-xl text-white hover:text-blue-300 cursor-pointer bg-blue-900 rounded-2xl">Get Started</p>
//       </div>
//     </div>
//   );
// };


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


