import React, { useContext } from 'react'
import { DContext } from '../Datacontext/Datacontext'

export const Services = () => {
  const {service}=useContext(DContext)
  console.log("service",service)

  const limitedServices = service && service.length > 6 ? service.slice(0, 6) : service

  const filteredServices = service && service[6] && service[6].choose && service[6].choose.length === 6 ? service[6].choose.slice(0, 6)  : service[6].choose
      
return (
    <>
    <div className="relative z-10 h-64 top-96 flex flex-wrap items-center justify-center gap-14 opacity-50">
      {
      limitedServices && limitedServices.length > (0) ? limitedServices.map((data,index)=>{
          return(
            
              <div key={index} className="w-96 h-5/6 bg-green-400 text-green-950 font-semibold text-xl items-center grid justify-center rounded-md">
                
                <p className="flex justify-center">{data.image}</p>
                <p className="flex justify-center">{data.topic}</p>
                <p className="flex justify-center">{data.content}</p>
                </div>
              )
        }) : (
          <div>No services available</div>
        )
      }

    </div>
    <div className="service_choose">
      <div className="grid justify-center relative bottom-28 gap-4">
    <p className="text-5xl font-semibold text-green-700">why choose us</p>
    <p className="text-lg font-bold text-gray-500">jksdbchbscbdjcbschbnjcbdcnbsbj</p>
    </div> 
      
    <div className="  z-10 h-64  flex flex-wrap items-center justify-center gap-14 opacity-50">
      
       
      {
        filteredServices.length > 0 ? (
          filteredServices.map((data, index) => (
            <div key={index} className="w-96 h-5/6 bg-green-400 text-green-950 font-semibold text-xl items-center grid justify-center rounded-md">
              <p>{data.image}</p>
              <p>{data.topic}</p>
              <p>{data.content}</p>
            </div>
          ))
        ) : (
          <div>No services available</div>
        )
      }
    </div>
   </div>
    </>
  )
}


