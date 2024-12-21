import React from 'react';


import backgorundvideo from '../../assest/3130284-uhd_3840_2160_30fps.mp4';

export const Navbar = () => {
    
   

    // useEffect(() => {
    //     // Prevent scrolling when the component mounts
    //     document.body.style.overflow = "hidden";
    //     return () => {
    //         // Enable scrolling when the component unmounts
    //         document.body.style.overflow = "auto";
    //     };
    // }, []);

    return (
        
        <div className=" fixed w-screen h-screen ">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-85" src={backgorundvideo} autoPlay loop muted></video>
        </div>
        
        
    );
};

