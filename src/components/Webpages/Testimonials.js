// import React from 'react';

// const emojis = [
//   ["🐳", "Spouting Whale", "U+1F433"],
//   ["🐋", "Whale", "U+1F40B"],
//   ["🐬", "Dolphin", "U+1F42C"],
//   ["🐟", "Fish", "U+1F41F"],
//   ["🐠", "Tropical Fish", "U+1F420"],
//   ["🐡", "Blowfish", "U+1F421"],
//   ["🦈", "Shark", "U+1F988"],
//   ["🐙", "Octopus", "U+1F419"],
//   ["🐚", "Spiral Shell", "U+1F41A"],
//   ["🦑", "Squid", "U+1F991"],
//   ["🦀", "Crab", "U+1F980"],
//   ["🦐", "Shrimp", "U+1F990"],
//   ["🐚", "Seashell", "U+1F41A"],
//   ["🦋", "Butterfly", "U+1F98B"],
//   ["🐞", "Ladybird", "U+1F41E"],
//   ["🐜", "Ant", "U+1F41C"],
//   ["🐝", "Bee", "U+1F41D"],
//   ["🐞", "Ladybug", "U+1F41E"],
//   ["🐍", "Snake", "U+1F40D"]
// ];

// export const Testimonials = () => {
//   return (
//     <div className="wrapper  flex justify-center items-center w-full h-full bg-blue-500">
//       <div className="carousel relative w-full  flex flex-col justify-center items-center overflow-hidden  bg-white rounded-lg shadow-xl">
//         {/* Carousel items */}
//         <div className="flex transition-all duration-[2s] ease-linear animate-carousel-animate">
//           {emojis.map((emoji, index) => (
//             <div
//               key={index}
//               className="carousel__item relative w-full flex justify-start items-center opacity-0 animate-carousel-animate text-white"
//             >
//               {/* Emoji head */}
//               <div className="carousel__item-head rounded-full bg-teal-100 w-32 h-32 flex justify-center items-center text-5xl mb-6">
//                 {emoji[0]}
//               </div>

//               {/* Emoji body */}
//               <div className="carousel__item-body w-full bg-blue-500 rounded-lg py-6 px-8 ml-12">
//                 <p className="title text-xl font-bold text-black">{emoji[1]}</p>
//                 <p className="text-sm text-black">Unicode: {emoji[2]}</p>
//                 <p className="mt-4 text-lg text-black">
//                   This is a sample testimonial content. The carousel item will have more details and animations.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Prev and Next Buttons */}
//         <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-teal-500 text-white px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           Prev
//         </button>
//         <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-teal-500 text-white px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Testimonials = ({ items, initialActive }) => {
  const [active, setActive] = useState(initialActive);
  const [direction, setDirection] = useState("");

  const moveLeft = () => {
    setDirection("left");
    setActive((prevActive) => (prevActive - 1 + items.length) % items.length);
  };

  const moveRight = () => {
    setDirection("right");
    setActive((prevActive) => (prevActive + 1) % items.length);
  };

  const generateItems = () => {
    const generatedItems = [];
    for (let i = active - 2; i <= active + 2; i++) {
      const index = (i + items.length) % items.length;
      const level = active - i;
      generatedItems.push(
        <CSSTransition
          key={index}
          timeout={1000}
          classNames={direction === "left" ? "left" : "right"}
        >
          <Item id={items[index]} level={level} />
        </CSSTransition>
      );
    }
    return generatedItems;
  };

  return (
    <div className="testimonials-carousel  w-[95%] max-w-[810px] h-[200px] mx-auto my-8 md:h-[250px] lg:h-[300px] relative top-36">
      {/* Left Arrow */}
      <div
        className="arrow-left absolute w-[30px] h-[30px] bg-white text-center text-[20px] rounded-full cursor-pointer text-[#228291] leading-[30px] top-[50%] left-[-15px] transform -translate-y-1/2 md:w-[40px] md:h-[40px] md:text-[25px]"
        onClick={moveLeft}
      >
        &#x276E;
      </div>

      {/* Items */}
      <TransitionGroup>{generateItems()}</TransitionGroup>

      {/* Right Arrow */}
      <div
        className="arrow-right absolute w-[30px] h-[30px] bg-white text-center text-[20px] rounded-full cursor-pointer text-[#228291] leading-[30px] top-[50%] right-[-15px] transform -translate-y-1/2 md:w-[40px] md:h-[40px] md:text-[25px]"
        onClick={moveRight}
      >
        &#x276F;
      </div>
    </div>
  );
};

const Item = ({ id, level }) => {
  const baseClasses =
    "absolute text-center text-white text-[20px] transition-all duration-1000 md:text-[30px] lg:text-[40px]";
  const levelClasses = {
    "-2": "w-[80px] h-[100px] left-[80%] top-[30px] leading-[100px] bg-[#228291] md:w-[110px] md:h-[150px] lg:w-[140px] lg:h-[180px]",
    "-1": "w-[100px] h-[120px] left-[60%] top-[15px] leading-[120px] bg-[#6796E5] md:w-[130px] md:h-[180px] lg:w-[160px] lg:h-[210px]",
    "0": "w-[120px] h-[150px] left-[35%] top-0 leading-[150px] bg-[#4EC9E1] md:w-[150px] md:h-[200px] lg:w-[200px] lg:h-[250px]",
    "1": "w-[100px] h-[120px] left-[15%] top-[15px] leading-[120px] bg-[#6796E5] md:w-[130px] md:h-[180px] lg:w-[160px] lg:h-[210px]",
    "2": "w-[80px] h-[100px] left-[5%] top-[30px] leading-[100px] bg-[#228291] md:w-[110px] md:h-[150px] lg:w-[140px] lg:h-[180px]",
  };

  const className = `${baseClasses} ${levelClasses[level] || ""}`;

  return <div className={className}>{id}</div>;
};
