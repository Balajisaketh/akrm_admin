import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate} from "react-router-dom"    
import { faBook, faIndianRupeeSign, faPieChart, faSignOut } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
    const navigate=useNavigate();
  return (
    <div className='h-screen bg-[#212b36]'>
   
  <h2 className='text-left mx-6 py-10 text-xl leading-4 text-white font-bold not-italic'>Iv Medics</h2>
  <h2 className='text-left mx-6 py-2 text-lg text-[#454f5b] font-bold not-italic leading-10'>PAGES</h2>

  <div className='h-auto mx-4 space-y-8 my-8'>
     <div className='text-left mx-2  flex space-x-4 pb-2' onClick={()=>navigate("/payments")}>
        <FontAwesomeIcon icon={faIndianRupeeSign} color='white'/>
      <p className='text-white text-lg leading-4'>Payments</p>
     </div>
     <div className='text-left mx-2  flex space-x-4 py-3' onClick={()=>navigate("/bookings")}>
     <FontAwesomeIcon icon={faBook} color='white'/>
      <p className='text-white text-lg leading-4'>Bookings</p>
     </div>
     
       <div className='text-left mx-2  flex space-x-4 py-3'>
       <FontAwesomeIcon icon={faPieChart} color='white'/>
        <p className='text-white text-lg leading-4'>Analytics</p>
       </div>
       <div className='text-left mx-2  flex space-x-4 py-3'>
       <FontAwesomeIcon icon={faSignOut} color='white'/>
        <p className='text-white text-lg leading-4'>Log Out</p>
       </div>
  </div>
    </div>
  )
}
