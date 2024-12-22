// import React, { useContext, useState, useRef, useEffect } from 'react';
// import { DContext } from '../Datacontext/Datacontext';

// export const Header = () => {
//     const { navbar } = useContext(DContext);
//     const [menuOpen, setMenuOpen] = useState(false);
//     const menuRef = useRef(null); // Reference for the dropdown menu

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (menuRef.current && !menuRef.current.contains(event.target)) {
//                 setMenuOpen(false); // Close dropdown if clicked outside
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     // Close dropdown when the cursor leaves the dropdown area
//     const handleMouseLeave = () => {
//         setMenuOpen(false);
//     };

//     // Close dropdown on menu item click
//     const handleMenuItemClick = () => {
//         setMenuOpen(false); // Close dropdown when an item is clicked
//     };

//     return (
//         <div className="fixed z-20 text-white flex justify-center gap-16 w-full h-20 items-center bg-black opacity-70">
//             <p>{navbar.logo}</p>
//             <p>{navbar.home}</p>
//             <p>{navbar.services}</p>
//             <p>{navbar.portfolio}</p>
//             <p>{navbar.testimonials}</p>
//             <p>{navbar.team}</p>

//             {/* Dropdown for Menu */}
//             <div
//                 className="relative"
//                 ref={menuRef}
//                 onMouseLeave={handleMouseLeave} // Close on mouse leave
//             >
//                 <p
//                     className="cursor-pointer"
//                     onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
//                 >
//                     {navbar.menu}
//                 </p>
//                 {menuOpen && (
//                     <div className="absolute top-full left-0 bg-gray-800 text-white shadow-lg py-2 rounded-md w-40">
//                         <p
//                             className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
//                             onClick={handleMenuItemClick} // Close on item click
//                         >
//                             Menu Item 1
//                         </p>
//                         <p
//                             className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
//                             onClick={handleMenuItemClick} // Close on item click
//                         >
//                             Menu Item 2
//                         </p>
//                         <p
//                             className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
//                             onClick={handleMenuItemClick} // Close on item click
//                         >
//                             Menu Item 3
//                         </p>
//                     </div>
//                 )}
//             </div>

//             <p>{navbar.news}</p>
//             <p>{navbar.getquotes}</p>
//         </div>
//     );
// };


import React, { useContext, useState, useRef, useEffect } from 'react';
import { DContext } from '../Datacontext/Datacontext';

export const Header = () => {
    const { navbar } = useContext(DContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef(null); // Reference for the dropdown menu

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false); // Close dropdown if clicked outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close dropdown on menu item click
    const handleMenuItemClick = () => {
        setMenuOpen(false); // Close dropdown when an item is clicked
    };

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="fixed z-20 text-white w-full h-20 bg-black opacity-90">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8 h-full">
                {/* Logo */}
                <div className="text-lg font-bold">{navbar.logo}</div>

                {/* Desktop Navbar */}
                <nav className="hidden md:flex gap-8 items-center">
                    <p>{navbar.home}</p>
                    <p>{navbar.services}</p>
                    <p>{navbar.portfolio}</p>
                    <p>{navbar.testimonials}</p>
                    <p>{navbar.team}</p>

                    {/* Dropdown for Menu */}
                    <div
                        className="relative"
                        ref={menuRef}
                        onMouseLeave={() => setMenuOpen(false)} // Close on mouse leave
                    >
                        <p
                            className="cursor-pointer"
                            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
                        >
                            {navbar.menu}
                        </p>
                        {menuOpen && (
                            <div className="absolute top-full left-0 bg-gray-800 text-white shadow-lg py-2 rounded-md w-40">
                                <p
                                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                                    onClick={handleMenuItemClick} // Close on item click
                                >
                                    Menu Item 1
                                </p>
                                <p
                                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                                    onClick={handleMenuItemClick} // Close on item click
                                >
                                    Menu Item 2
                                </p>
                                <p
                                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                                    onClick={handleMenuItemClick} // Close on item click
                                >
                                    Menu Item 3
                                </p>
                            </div>
                        )}
                    </div>

                    <p>{navbar.news}</p>
                    <p>{navbar.getquotes}</p>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none"
                    >
                        {mobileMenuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-gray-900 text-white px-4 py-6">
                    <p className="py-2">{navbar.home}</p>
                    <p className="py-2">{navbar.services}</p>
                    <p className="py-2">{navbar.portfolio}</p>
                    <p className="py-2">{navbar.testimonials}</p>
                    <p className="py-2">{navbar.team}</p>
                    <p className="py-2">{navbar.menu}</p>
                    <p className="py-2">{navbar.news}</p>
                    <p className="py-2">{navbar.getquotes}</p>
                </div>
            )}
        </header>
    );
};


