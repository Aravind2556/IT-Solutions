// import React from 'react'

// export const Home = () => {
//   return (
//     <div className="relative z-10 grid  justify-center items-center w-full h-full  text-white px-4  top-64 gap-10">
//         <div className="text-5xl font-semibold text-green-700">
//             <p>Delivering Superior Services IT Solutions.</p>

//         </div>
//         <div className="w-96">
//             <p>You can easily change any design to your own. It is also highly customizable SEO friendly template.</p>

//         </div>
//         <div className="flex gap-6">
//             <p>fjbs</p>
//             <p>fjbs</p>
//             <p>fjbs</p>
//             <p>fjbs</p>
//             <p>fjbs</p>

//         </div>
//         <div className="flex">
//             <p>jhvdshjds</p>
//             <p>bsdvhgds</p>

//         </div>
//     </div>
//   )
// }


import React from 'react'

export const Home = () => {
  return (
    <div className="relative z-10 grid justify-center items-center w-full h-full text-white px-4 top-64 gap-10">
      {/* Header */}
      <div className="text-3xl font-semibold text-green-700 sm:text-4xl md:text-5xl">
        <p>Delivering Superior Services IT Solutions.</p>
      </div>
      
      {/* Description */}
      <div className="w-full sm:w-72 md:w-96 text-center">
        <p>You can easily change any design to your own. It is also highly customizable SEO-friendly template.</p>
      </div>
      
      {/* Flex section 1 */}
      <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 justify-center">
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
        <p>Item 4</p>
        <p>Item 5</p>
      </div>
      
      {/* Flex section 2 */}
      <div className="flex flex-col sm:flex-row gap-2 justify-center">
        <p>Feature 1</p>
        <p>Feature 2</p>
      </div>
    </div>
  );
};

