
import { Watch } from "react-loader-spinner";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const WishList = () => {
    const {user,loading}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    console.log(user?.email)

    const {data:allWish=[],isFetched,refetch}=useQuery({
        queryKey:['allWish',user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res=await axiosSecure.get(`/wishlist?email=${user?.email}`);
            return res.data
        }

    })
     
   
    console.log(allWish,"from wish list")
        if (!isFetched){
        return (
        <div className='flex justify-center items-center min-h-screen place-content-center mx-auto place-items-center '><Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /></div>)

    }
    // const handleAdmin=(data)=>{
    //     console.log(data.email,"email")
    //     axiosSecure.patch(`/admin/${data.email}`)
    //     .then(res =>{
    //         console.log(res.data)
    //         if(res.data.modifiedCount > 0){
    //             refetch();
    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: `${data.name} is an Admin Now!`,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               });
    //         }
    //     })




    // }
    // const handleGuide=(data)=>{
    //     console.log(data.email,"email")
    //     axiosSecure.patch(`/guide/${data.email}`)

    //     .then(res =>{
    //         console.log(res.data)
    //         if(res.data.modifiedCount > 0){
    //             refetch();
    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: `${data.name} is a Guide Now!`,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               });
    //         }
    //     })
    //     const user={name:data.name,email:data.email,role:"guide",photo:data.photo}
    //     axiosSecure.post(`/guide`,user)
        






    // }
    return (
        <div>
            <h2 className="font-serif text-3xl text-center text-blue-900 font-bold ">WISHLIST</h2>
<div className="flex justify-center items-center mx-auto h-min-h-screen text-[#012D48]">
<div className="overflow-x-auto w-[70%] h-[400px] bg-slate-200">
  <table className="table table-xs  bg-slate-100 font-serif">
    <thead className="bg-[#012D48] text-slate-100">
      <tr>
        <th></th> 
        <td>Remove</td>
        <td>Package</td> 
         
        <td>Details</td>
     
        <th></th> 
      </tr>
    </thead> 
    <tbody>
{
    allWish?.map((data,idx)=><>
    
          <tr key={idx} className="border-blue-950 border-b-[1px] py-8">
        <th>{idx+1}</th> 
        <td> 
        <button  className="btn btn-xs  bg-blue-950 text-white" >remove</button>
   
        </td> 
        <td>
        {data.title}
        </td>
        
        <td> 
        <button  className="btn btn-xs  bg-blue-950 text-white" >Details</button>
   
        </td> 
        

        
      </tr>
    </>)
}
     
      
    </tbody> 
    
  </table>
</div>
</div>
            
        </div>
    );
};

export default WishList;