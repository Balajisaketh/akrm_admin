import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Modal } from "flowbite-react"
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux"
import { userdata } from "../redux/DataSlice"
import { useEffect, useState } from "react"
const DetailsModal=(
    {
    setShow,
    close,
    show,
    bookid
    


}:{
        setShow:any,
        close:any,
        show:any,
        bookid:any


    
})=>{
    const [filteredusers,setFilteredUsers]=useState([])
      const dataval=useSelector((state:any)=>state.usersReducer.value)
      console.log(dataval,"i m val from store in datamodal");    
      useEffect(() => {
        setFilteredUsers([])
        // Filter the data once when the component mounts or bookid changes
        const filtered = dataval.filter((user: any) => user?.bookingid === bookid);
        setFilteredUsers(filtered);
        console.log("filtered users", filtered);
      }, [bookid]); 
      console.log("filtred users",filteredusers)
    return(
        
  <>
    <Modal
    
    show={show} 
    size="lg"
    popup={true}
 onClose={close}
 className=" h-max w-[90vw] mx-auto shadow-xl mt-4 z-10 rounded-md"
  >

    {/* <Modal.Header /> */}

    <Modal.Body className=" w-screen  mx-auto flex  relative space-x-5  m-3 py-1">

    <FontAwesomeIcon icon={faXmark} size="lg" color="gray" className="absolute left-2 top-1" onClick={close}/>

{/* <div className="grid grid-cols-12 grid-flow-col space-x-10 border-gray-400 rounded-lg">
<div className="border-2 border-gray-400  col-span-6 rounded-lg">
    <div className="row">
<div className="flex justify-between px-3">
<div className="column">
<h2>Age</h2>
<p className="text-left"></p>
</div>
<div className="column">
<h2>Gender</h2>
<p className="text-left"></p>
</div>
</div>
<div className="flex justify-between px-3 py-4">
<div className="column">
<h2></h2>
<p>PAH</p>
<p className="text-left">No</p>
</div>
<div className="column">
<h2>Heart Failure</h2>
<p className="text-left">No</p>
</div>
<div className="column">
<h2>Hemophilia</h2>
<p className="text-left">No</p>
</div>


</div>

</div>
</div>
<div className="border-2 border-gray-400  col-span-6 rounded-lg">
    <div className="row">
<div className="flex justify-between px-3">
<div className="column">
<h2>Country</h2>
<p className="text-left">no</p>
</div>
<div className="column">
<h2>State</h2>
<p className="text-left"></p>
</div>
</div>
<div className="flex justify-between py-3">
<div className="column">
<h2 className="mx-3 whitespace-nowrap">Medical Knowledge</h2>
<p className="text-left mx-3">No</p>
</div>
<div className="column">
<h2></h2>
<p className="mx-3">StreetAddress</p>
<p className="text-left mx-3"></p>
</div>
<div className="column">    
<h2 className="mr-3">PostalCode</h2>
<p className="text-left mx-3"></p>
</div>



</div>

</div>
</div>
</div>   */}
{
    filteredusers?.map((val:any,index:Number)=>{
        
        return (
            <>
<div className="grid grid-cols-12 grid-flow-col space-x-24  rounded-lg relative">
<div className="border-2 border-gray-200 col-span-6 rounded-lg p-3 ">
    <div className="row">
<div className="flex justify-between px-3">
<div className="column">
<h2>Age</h2>
<p className="text-left">{val?.age}</p>
</div>
<div className="column">
<h2>Gender</h2>
<p className="text-left">{val?.gender}</p>
</div>
</div>
<div className="flex justify-between px-3 py-4">
<div className="column">
<h2></h2>
<p>PAH</p>
<p className="text-left">{val?.pah}</p>
</div>
<div className="column">
<h2>Heart Failure</h2>
<p className="text-left">{val?.heartfailure}</p>
</div>
<div className="column">
<h2>Hemophilia</h2>
<p className="text-left">{val?.hemophilia}</p>
</div>


</div>

</div>
</div>
<div className="verticalline h-[100%] border-2 border-gray-300 absolute left-[45%]">

</div>
<div className="border-2 border-gray-200  col-span-6 rounded-lg p-3 ">
    <div className="row">
<div className="flex justify-between px-3">
<div className="column">
<h2>Country</h2>
<p className="text-left">{val?.country}</p>
</div>
<div className="column">
<h2>State</h2>
<p className="text-left">{val?.state}</p>
</div>
</div>
<div className="flex justify-between px-1 py-4">
<div className="column">
<h2 className="mx-3 whitespace-nowrap">Medical Knowledge</h2>
<p className="text-left mx-3">{val?.ownmedicaldecision}</p>
</div>
<div className="column">
<h2></h2>
<p className="mx-3">StreetAddress</p>
<p className="text-left mx-3">{val?.street_address}</p>
</div>
<div className="column px-3">    
<h2 className="mr-3">PostalCode</h2>
<p className="text-left mx-3">{val?.postal_code}</p>
</div>



</div>

</div>
</div>
</div>  
            </>
        )
    })
    
}



    </Modal.Body>

  </Modal>
  </>
    )
    
}
export default DetailsModal