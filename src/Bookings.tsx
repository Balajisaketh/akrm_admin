'use client';
import React, { useEffect, useState } from 'react'
import  Table  from 'flowbite-react'
import Sidebar from './components/Sidebar'
import axios from 'axios'
import moment from 'moment'
import DetailsModal from './Modal/DetailsModal';
import { useSelector,useDispatch } from 'react-redux';
import {userdata} from '../src/redux/DataSlice'
function Bookings() {
    const [resdata,Setresdata]=useState<any>([])
    const userdataval=useSelector((state:any)=>state.usersReducer.value)
    console.log("user",userdataval)
    
    const [id,setid]=useState(0)
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
const handlecheck=(val:any)=>{
  setid(val?.bookingid)
     handleShow()
  dispatch(userdata(val))


}
    const handleShow = () => setShow(true)
    useEffect(()=>{
         axios.get("http://localhost:5876/api/getpatients").then((res)=>{
            console.log(res.data,"i m data from response")
            Setresdata(res.data)
         }).catch((err)=>{
            console.log(err,"i m error from response")
            
         })
    },[])
    const userdatavl=useSelector((state:any)=>state.usersReducer.value)
console.log(userdataval,"i m red data")
  return (
    <>
    
       
             {
                <DetailsModal close={handleClose}  show={show} setShow={handleShow} bookid={id}/>
             }
       

    
    
    <div className='grid grid-cols-12 grid-flow-col'>
        
        
   <div className='col-span-2 h-auto w-auto'>
<Sidebar/>
   </div>
   <div className='col-span-10   h-auto w-full'>

<div className='w-auto  shadow-md rounded-lg mx-8 h-auto my-8'>
    {/* <div className='w-12 bg-yellow-400 h-auto z-30'>
{
    
    show&&<DetailsModal close={handleClose}  show={show} setShow={handleShow}/>
}
</div> */}
    
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-10">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Bookingid
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Treatment
                </th>
                <th scope="col" className="px-6 py-3">
                    Treatment Date
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
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
                 <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         {val?.bookingid}
                 </th>
                 <td className="px-6 py-2">
                     {val?.fullname}
                 </td>
                 <td className="px-6 py-2">
                     {val?.treatmenttype}
                 </td>
                 <td className="px-6 py-2">
                 {tretdate}
                 </td>
                 <td className="px-6 py-2 text-right">
                 <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={()=>handlecheck(val)}>view</button>
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