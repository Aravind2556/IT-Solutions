import React from 'react';


import backgorundvideo from '../../assest/WhatsApp Video 2024-12-21 at 21.37.21_df7c97ae.mp4';

export const Navbar = () => {
    


    return (
        
        <div className=" fixed w-screen h-screen ">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-85" src={backgorundvideo} autoPlay loop muted></video>
        </div>
        
        
    );
};

