// import React, { useContext } from 'react'
// import { DContext } from '../Datacontext/Datacontext'

// export const Portfolio = () => {
//   const {portfolio}=useContext(DContext)
//   console.log("portfolio",portfolio)

//   const limitedportfolio = portfolio && portfolio.length > 0 ? portfolio.slice(0.6) : portfolio

  
//   return (
//     <>
//     <div className="portfolio">
//       <div className=" z-10 grid justify-center gap-6">
//         <div className="grid justify-center">
//           <p>Our portfolio</p>
//           <p>jksdjhsdjvbhjdbjsdbvhjsvhjhsdjsdb</p>
//         </div>
//         <div className="flex gap-32">
//           <div>
//             <p>All</p>

//           </div>
//           <div>
//             <p>All AppDesign</p>

//           </div>
//           <div>
//             <p>All Development</p>

//           </div>
//           <div>
//             <p>Branding</p>

//           </div>
//           <div>
//             <p>IT Solution</p>
//           </div>
//         </div>
        
//       </div>
//       <div className="relative z-10 h-64  flex flex-wrap items-center justify-center gap-14 opacity-50">
//         {
//           limitedportfolio && limitedportfolio.length > 0 ? limitedportfolio.map((data,index)=>{
//             return(
//               <div key={index} className="w-96 h-5/6 bg-green-400 text-green-950 font-semibold text-xl items-center grid justify-center rounded-md">
//                 <p>{data.image}</p>
//               </div>

//             )
//           }) : (
//             <div></div>
//           )
//         }
//       </div>
//     </div>
//     </>
//   )
// }




// import React, { useContext } from 'react';
// import { DContext } from '../Datacontext/Datacontext';

// export const Portfolio = () => {
//   const { portfolio } = useContext(DContext);
//   console.log("portfolio", portfolio);

//   const limitedPortfolio = portfolio && portfolio.length > 0 ? portfolio.slice(0, 6) : portfolio;
//   const filterportfolio = portfolio && portfolio[6] && portfolio[6].pricingplane.length === 6 ? portfolio[6].pricingplane.slice(0, 3) : portfolio[6].pricingplane;
//   console.log("filtered portfolio", filterportfolio);

//   return (
//     <>
//       <div className="portfolio px-4">
//         {/* Portfolio Header Section */}
//         <div className="z-10 grid justify-center gap-6 text-center mt-8">
//           <div>
//             <p className="text-3xl sm:text-4xl font-semibold text-blue-600">Our Portfolio</p>
//             <p className="text-sm sm:text-base text-gray-500">
//             We take pride in delivering exceptional projects across diverse domains. From app design to IT solutions, our portfolio showcases the creativity, innovation, and expertise we bring to every project.
//             </p>
//           </div>

//           {/* Categories Section */}
//           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-black font-semibold">
//             <p className="cursor-pointer" title='A comprehensive view of our versatile work.'>All</p>
//             <p className="cursor-pointer" title='Stunning and intuitive designs that captivate users.'>App Design</p>
//             <p className="cursor-pointer" title='High-performing and user-friendly applications'>Development</p>
//             <p className="cursor-pointer" title='Crafting unique identities for standout businesses.'>Branding</p>
//             <p className="cursor-pointer" title='Tailored tech solutions to empower your growth.'>IT Solution</p>
//           </div>
//         </div>

//         {/* Portfolio Items Section */}
//         <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-14 mt-8">
//           {limitedPortfolio && limitedPortfolio.length > 0 ? (
//             limitedPortfolio.map((data, index) => (
//               <div
//                 key={index}
//                 className="w-full sm:w-64 md:w-72 lg:w-80 text-black bg-white font-semibold text-center p-4 rounded-md shadow-lg mb-6">
//                 <p>{data.title}</p>
//                 <p>{data.content}</p>
//               </div>
//             ))
//           ) : (
//             <div className="text-center text-gray-500">No portfolio items available</div>
//           )}
//         </div>

//         {/* Pricing Plans Section */}
//         <div>
//           <div className="justify-center grid">
//             <p className="text-3xl sm:text-4xl font-semibold text-blue-600">Pricing Plans</p>
//             <p className="text-sm sm:text-base text-black">nsnvsknb shvbs sdbv sdbsd</p>
//           </div>
//           <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-14 mt-8">
//             {filterportfolio && filterportfolio.length > 0 ? (
//               filterportfolio.map((data, index) => (
//                 <div
//                   key={index}
//                   className="w-full sm:w-64 md:w-72 lg:w-80 text-black bg-white font-semibold text-center p-4 rounded-md shadow-lg mb-6">
//                   <p>{data.bacsisc}</p>
//                   <p>{data.amount}</p>
//                   <p>{data.backup}</p>
//                   <p>{data.database}</p>
//                   <p>{data.domain}</p>
//                   <p>{data.email}</p>
//                   <p>{data.order}</p>
//                   <p>{data.space}</p>
//                   <p>{data.ssl}</p>
//                   <p>{data.support}</p>
//                   <p>{data.templete}</p>
//                   <p>{data.unlimitedemail}</p>
//                 </div>
//               ))
//             ) : (
//               <div>No pricing plans available</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };




import React, { useContext } from 'react';
import imageport from '../../assest/digital-low-poly-abstract-background-with-connecting-lines-dots.jpg'
import { DContext } from '../Datacontext/Datacontext';

export const Portfolio = () => {
  const { portfolio } = useContext(DContext);
  console.log("portfolio", portfolio);

  const limitedPortfolio = portfolio && portfolio.length > 0 ? portfolio.slice(0, 6) : portfolio;
  const filterportfolio =
    portfolio && portfolio[6] && portfolio[6].pricingplane.length === 6
      ? portfolio[6].pricingplane.slice(0, 3)
      : portfolio[6]?.pricingplane;

  console.log("filtered portfolio", filterportfolio);

  return (
    <>
      <div className="portfolio px-4 relative">
        {/* Background Image and Color Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageport})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
             opacity: 0.5
          }}
        ></div>

        {/* Portfolio Header Section */}
        <div className="z-10 grid justify-center gap-6 text-center mt-8 text-white relative">
          <div>
            <p className="text-3xl sm:text-4xl font-semibold">Our Portfolio</p>
            <p className="text-sm sm:text-base">
              We take pride in delivering exceptional projects across diverse domains. From app design to IT solutions, our portfolio showcases the creativity, innovation, and expertise we bring to every project.
            </p>
          </div>

          {/* Categories Section */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 font-semibold">
            <p className="cursor-pointer">All</p>
            <p className="cursor-pointer">App Design</p>
            <p className="cursor-pointer">Development</p>
            <p className="cursor-pointer">Branding</p>
            <p className="cursor-pointer">IT Solution</p>
          </div>
        </div>

        {/* Portfolio Items Section */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-14 mt-8">
          {limitedPortfolio && limitedPortfolio.length > 0 ? (
            limitedPortfolio.map((data, index) => (
              <div
                key={index}
                className="w-full sm:w-64 md:w-72 lg:w-1/4 text-black bg-white font-semibold text-center p-6 rounded-lg shadow-lg mb-6 transition duration-300 transform hover:scale-105"
              >
                <p className="text-xl text-blue-700">{data.title}</p>
                <p className="text-sm text-gray-700">{data.content}</p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No portfolio items available</div>
          )}
        </div>

        {/* Pricing Plans Section */}
        <div className="py-12">
          <div className="justify-center grid text-center text-white">
            <p className="text-3xl sm:text-4xl font-semibold">Pricing Plans</p>
            <p className="text-sm sm:text-base">Choose a plan that fits your needs and budget.</p>
          </div>
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-14 mt-8">
            {filterportfolio && filterportfolio.length > 0 ? (
              filterportfolio.map((data, index) => (
                <div
                  key={index}
                  className="w-full sm:w-64 grid gap-5 md:w-72 lg:w-1/4 text-black bg-white font-semibold text-center p-6 rounded-lg shadow-lg mb-6 transition duration-300 transform hover:scale-105"
                >
                   <p className="text-2xl text-blue-700">{data.basic}</p>
                <p className="text-xl text-green-700">{data.amount}</p>
                <p className="text-sm text-gray-700">{data.space}</p>
                <p className="text-sm text-gray-700">{data.domain}</p>
                <p className="text-sm text-gray-700">{data.ssl}</p>
                <p className="text-sm text-gray-700">{data.backup}</p>
                <p className="text-sm text-gray-700">{data.templete}</p>
                <p className="text-sm text-gray-700">{data.email}</p>
                <p className="text-sm text-gray-700">{data.database}</p>
                <p className="text-sm text-gray-700">{data.unlimitedemail}</p>
                <p className="text-sm text-gray-700">{data.support}</p>
                <p className="text-sm text-blue-700">{data.order}</p>
                </div>
              ))
            ) : (
              <div>No pricing plans available</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
