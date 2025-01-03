// import React, { useContext, useState, useRef, useEffect } from 'react';
// import { DContext } from '../Datacontext/Datacontext';


// export const Header = () => {
//     const { navbar } = useContext(DContext);
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

//     // Close dropdown on menu item click
//     const handleMenuItemClick = () => {
//         setMenuOpen(false); // Close dropdown when an item is clicked
//     };

//     // Toggle mobile menu
//     const toggleMobileMenu = () => {
//         setMobileMenuOpen(!mobileMenuOpen);
//     };

//     return (
//         <div>
//         <header className="fixed z-20 text-black w-full h-20 bg-white ">
//             <div className="container mx-auto flex justify-between items-center px-4 md:px-8 h-full">
//                 {/* Logo */}
//                 {/* <div className="text-lg font-bold">{navbar.logo}</div> */}
//                 <img src={navbar.logo} alt='waiting' className="w-24 h-24 rounded-full"></img>

//                 {/* Desktop Navbar */}
//                 <nav className="hidden md:flex gap-8 items-center">
//                     <a href='/'>{navbar.home}</a>
                  
//                     <div
//                         className="relative"
//                         ref={menuRef}
//                         onMouseLeave={() => setMenuOpen(false)} // Close on mouse leave
//                     >
//                         <p
//                             className="cursor-pointer"
//                             onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
//                         >
//                             {navbar.menu}
//                         </p>
//                         {menuOpen && (
//                             <div className="absolute top-full left-0 bg-white text-black shadow-lg py-2 rounded-md w-40">
//                                 <a href='/internship'
//                                     className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
//                                     onClick={handleMenuItemClick} // Close on item click
//                                 >
//                                     Menu Item 1
//                                 </a>
                               
//                             </div>
//                         )}
//                     </div>

                   
//                 </nav>

//                 {/* Mobile Menu Button */}
//                 <div className="md:hidden">
//                     <button
//                         onClick={toggleMobileMenu}
//                         className="text-black focus:outline-none"
//                     >
//                         {mobileMenuOpen ? '❌' : '🔽'}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {mobileMenuOpen && (
//                 <div className="md:hidden bg-white text-black px-4 py-6">
//                     <p className="py-2">{navbar.home}</p>
                    
                   
//                     <p className="py-2">{navbar.menu}</p>
                 
//                 </div>
//             )}
//         </header>
//           <div>
               
//             </div>
//         </div>
//     );
// };



import React, { useContext, useState, useRef, useEffect } from 'react';
import { DContext } from '../Datacontext/Datacontext';

export const Header = () => {
    const { navbar } = useContext(DContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false); // Dropdown close panna logic
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMenuItemClick = () => {
        setMenuOpen(false); // Menu item click aagum pothu close pannum
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="fixed z-20 text-black w-full bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8 h-16">
                {/* Logo */}
                <a href="/" className="text-lg font-bold flex items-center">
                    <img src={navbar.logos} alt="Logo" className="w-12 h-12 rounded-full" />
                    
                </a>

                {/* Desktop Navbar */}
                <nav className="hidden md:flex items-center space-x-6 relative right-24">
                    <a href="/" className="hover:text-blue-600">{navbar.home}</a>
                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="hover:text-blue-600 focus:outline-none"
                        >
                            {navbar.menu}
                        </button>
                        {menuOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 w-32">
                                <a
                                    href="/internship"
                                    className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
                                    onClick={handleMenuItemClick}
                                >
                                    Internship
                                </a>
                                
                            </div>
                        )}
                    </div>
                    
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-black focus:outline-none"
                    >
                        {mobileMenuOpen ? '❌' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white text-black px-4 py-4">
                    <a
                        href="/"
                        className="block py-2 hover:text-blue-600"
                        onClick={toggleMobileMenu}
                    >
                        {navbar.home}
                    </a>
                    <a
                        href="/internship"
                        className="block py-2 hover:text-blue-600"
                        onClick={toggleMobileMenu}
                    >
                        Internship
                    </a>
                  
                </div>
            )}
        </header>
    );
};
