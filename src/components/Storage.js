import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Webpages/Navbar'

import { Home } from './Webpages/Home'
 import Internship from './Webpages/Internship'



export const Storage = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Navbar/>}></Route>
        
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/internship' element={<Internship/>}></Route>
    </Routes>
    
  
    </>
  )
}





