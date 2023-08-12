import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import axios from 'axios'
import moment from 'moment'
function Bookings() {
    const [resdata,Setresdata]=useState<any>([])
    useEffect(()=>{
         axios.get("http://localhost:5876/api/getpays").then((res)=>{
            console.log(res.data,"i m data from response")
            Setresdata(res.data)
         }).catch((err)=>{
            console.log(err,"i m error from response")
            
         })
    },[])
    return (
        <>
        <div className='grid grid-cols-12 grid-flow-col'>
       <div className='col-span-2 h-auto w-auto'>
    <Sidebar/>
       </div>
       <div className='col-span-10 bg-[#f1f5f9]   h-auto w-full'>
    
    <div className='w-auto  shadow-md bg-white rounded-lg mx-8 h-auto my-8'>
    
        
    <div className="relative overflow-x-auto ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-10">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Paymentid
                    </th>
                    <th scope="col" className="px-6 py-3">
                        AMOUNT
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date Of Pay
                    </th>
                    <th scope="col" className="px-6 py-3">
                   Pay Status
                    </th>
                  
                </tr>
            </thead>
            <tbody>
                {
                    resdata?.map((val:any,index:Number)=>{
                        const tretdate=moment().format('DD/MM/YYYY')
                        console.log(val,"i m data")
                         return (
     <tr className=" dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                     <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             {val?.bookingid}
                     </th>
                     <td className="px-6 py-3">
                         {val?.price}
                     </td>
                     <td className="px-6 py-3">
                         {tretdate}
                     </td>
                     
                     <td className=" mx-auto px-10">
                     {
                        val?.status=="pending" ?(
                            <p className='text-yellow-400 mx-auto'>{val?.status}</p>
                        ):(
                            <p className='text-green-400'>{val?.status}</p>
                        )
                     }
                    </td>
            </tr> 
                         )
                    })
                }
                
                
            </tbody>
        </table>
    </div>
    
    
    
    </div>
       </div>
        </div>
        </>
      )
}

export default Bookings