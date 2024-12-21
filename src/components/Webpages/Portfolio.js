import React, { useContext } from 'react'
import { DContext } from '../Datacontext/Datacontext'

export const Portfolio = () => {
  const {portfolio}=useContext(DContext)
  console.log("portfolio",portfolio)

  const limitedportfolio = portfolio && portfolio.length > 0 ? portfolio.slice(0.6) : portfolio

  
  return (
    <>
    <div className="portfolio">
      <div className=" z-10 grid justify-center gap-6">
        <div className="grid justify-center">
          <p>Our portfolio</p>
          <p>jksdjhsdjvbhjdbjsdbvhjsvhjhsdjsdb</p>
        </div>
        <div className="flex gap-32">
          <div>
            <p>All</p>

          </div>
          <div>
            <p>All AppDesign</p>

          </div>
          <div>
            <p>All Development</p>

          </div>
          <div>
            <p>Branding</p>

          </div>
          <div>
            <p>IT Solution</p>
          </div>
        </div>
        
      </div>
      <div className="relative z-10 h-64  flex flex-wrap items-center justify-center gap-14 opacity-50">
        {
          limitedportfolio && limitedportfolio.length > 0 ? limitedportfolio.map((data,index)=>{
            return(
              <div key={index} className="w-96 h-5/6 bg-green-400 text-green-950 font-semibold text-xl items-center grid justify-center rounded-md">
                <p>{data.image}</p>
              </div>

            )
          }) : (
            <div></div>
          )
        }
      </div>
    </div>
    </>
  )
}
