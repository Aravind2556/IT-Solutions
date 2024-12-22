import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Webpages/Navbar'
import { Header } from './Webpages/Header'
import { Home } from './Webpages/Home'
import { Services } from './Webpages/Services'
import { Portfolio } from './Webpages/Portfolio'
import { Testimonials } from './Webpages/Testimonials'
import { Growth } from './Webpages/Growth'

export const Storage = () => {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Navbar/>}></Route>
        <Route path='/header' element={<Header/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
    </Routes>
    <div>
        <Header/>
        <Home/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Growth/>
    </div>
    </>
  )
}





// import React, { useState, useRef, useEffect } from 'react';

// export const Header = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [submenuOpen, setSubmenuOpen] = useState(null); // Track submenu visibility for each menu item

//     // Refs for menu and submenu to handle click outside
//     const menuRef = useRef(null);
//     const submenuRef = useRef(null);

//     // Toggle menu visibility for small screens
//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     // Toggle submenu for a specific menu item
//     const toggleSubmenu = (menu) => {
//         setSubmenuOpen(submenuOpen === menu ? null : menu); // If the same submenu is clicked again, close it
//     };

//     // Close the menu and submenu if clicked outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (
//                 menuRef.current && !menuRef.current.contains(event.target) && 
//                 submenuRef.current && !submenuRef.current.contains(event.target)
//             ) {
//                 setMenuOpen(false); // Close the menu if clicked outside
//                 setSubmenuOpen(null); // Close the submenu if clicked outside
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     // Close submenu when a field inside it is clicked
//     const handleSubmenuItemClick = () => {
//         setSubmenuOpen(null); // Close the submenu when an item is clicked
//     };

//     return (
//         <div className="fixed z-10 w-full bg-black text-white px-4 sm:px-6 lg:px-12">
//             <div className="flex justify-between items-center py-4">
//                 {/* Logo */}
//                 <p className="text-xl font-bold">MyLogo</p>

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex space-x-6">
//                     <p>Home</p>
//                     <p>Services</p>
//                     <div ref={submenuRef}>
//                         <p onClick={() => toggleSubmenu('portfolio')} className="cursor-pointer">Portfolio</p>
//                         {submenuOpen === 'portfolio' && (
//                             <div className="bg-black text-white absolute mt-2 space-y-2 py-2 px-4">
//                                 <p className="cursor-pointer" onClick={handleSubmenuItemClick}>Web Design</p>
//                                 <p className="cursor-pointer" onClick={handleSubmenuItemClick}>Mobile App</p>
//                                 <p className="cursor-pointer" onClick={handleSubmenuItemClick}>Graphics</p>
//                             </div>
//                         )}
//                     </div>
//                     <p>Testimonials</p>
//                     <p>Team</p>
//                 </div>

//                 {/* Hamburger Button for Mobile */}
//                 <div className="md:hidden flex items-center" ref={menuRef}>
//                     <button onClick={toggleMenu} className="space-y-2">
//                         {/* Hamburger Icon */}
//                         <div
//                             className={`w-6 h-1 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
//                         ></div>
//                         <div
//                             className={`w-6 h-1 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
//                         ></div>
//                         <div
//                             className={`w-6 h-1 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
//                         ></div>
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Dropdown Menu */}
//             {menuOpen && (
//                 <div className="md:hidden flex flex-col bg-black text-white space-y-4 py-4 px-6">
//                     <p>Home</p>
//                     <p>Services</p>
//                     <div>
//                         <p onClick={() => toggleSubmenu('portfolio')} className="cursor-pointer">Portfolio</p>
//                         {submenuOpen === 'portfolio' && (
//                             <div className="bg-black text-white space-y-2 py-2 px-4">
//                                 <p className="cursor-pointer" onClick={handleSubmenuItemClick}>Web Design</p>
//                                 <p className="cursor-pointer" onClick={handleSubmenuItemClick}>Mobile App</p>
//                                 <p className="cursor-pointer" onClick={handleSubmenuItemClick}>Graphics</p>
//                             </div>
//                         )}
//                     </div>
//                     <p>Testimonials</p>
//                     <p>Team</p>
//                 </div>
//             )}
//         </div>
//     );
// };



 // useEffect(() => {
    //     // Prevent scrolling when the component mounts
    //     document.body.style.overflow = "hidden";
    //     return () => {
    //         // Enable scrolling when the component unmounts
    //         document.body.style.overflow = "auto";
    //     };
    // }, []);

