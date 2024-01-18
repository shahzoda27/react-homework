import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tailwinds from './component/Tailwinds';
import Auth from './component/Auth';
import Admin from './component/Admin';
import SuperAdmin from './component/SuperAdmin';

export default function App() {
  
  return (
    <>
     <Routes>
      <Route path='/' element={<Tailwinds/>}/>
      <Route path='login' element={<Auth/>}/>
      <Route path='admin' element={<Admin/>}/>
      <Route path='super_admin' element={<SuperAdmin/>}/>
     </Routes>
    </>
  )
}