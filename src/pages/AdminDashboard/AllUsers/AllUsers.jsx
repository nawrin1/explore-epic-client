import { Watch } from "react-loader-spinner";
import useAllUsers from "../../../hooks/useAllUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AllUsers = () => {
    const [allUsers,isFetched,refetch]=useAllUsers()
    const axiosSecure=useAxiosSecure()
    console.log(allUsers,"from allusers")
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
    const handleAdmin=(data)=>{
        console.log(data.email,"email")
        axiosSecure.patch(`/admin/${data.email}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })




    }
    const handleGuide=(data)=>{
        console.log(data.email,"email")
        axiosSecure.patch(`/guide/${data.email}`)

        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is a Guide Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        const user={name:data.name,email:data.email,role:"guide",photo:data.photo}
        axiosSecure.post(`/guide`,user)
        






    }
    return (
        <div>
            <h2 className="font-serif text-3xl text-center text-blue-900 font-bold ">ALL USERS</h2>
<div className="flex justify-center items-center mx-auto h-min-h-screen text-[#012D48]">
<div className="overflow-x-auto h-[400px] bg-slate-200">
  <table className="table table-xs  bg-slate-100 font-serif">
    <thead className="bg-[#012D48] text-slate-100">
      <tr>
        <th></th> 
        <td>Name</td> 
        <td>Email</td> 
        <td>Role</td> 
        <td>Make Admin</td> 
        <td>Make guide</td> 
     
        <th></th> 
      </tr>
    </thead> 
    <tbody>
{
    allUsers?.map((data,idx)=><>
    
          <tr key={idx} className="border-blue-950 border-b-[1px] py-8">
        <th>{idx+1}</th> 
        <td>
        <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask  w-8 h-8 rounded-full">
                <img src={data.photo}alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
                
              <div className="font-bold">{data.name}</div>
             
            </div>
          </div>
        </td>
        <td>{data.email}</td> 
        <td>{data.role}</td> 
        <td> {data.role === "admin" || data.role === "guide" ? (
        <button disabled className="btn btn-xs  bg-blue-950 text-white" >Admin</button>
    ) : (
        <button className="btn btn-xs bg-blue-950 text-white" onClick={()=>handleAdmin(data)}>Admin</button>
    )}
        </td> 
        <td>{data.role === "guide" || data.role === "admin" ? (
        <button disabled className="btn btn-xs  bg-blue-950 text-white">Guide</button>
    ) : (
        <button className="btn btn-xs bg-blue-950 text-white" onClick={()=>handleGuide(data)}>Guide</button>
    )}</td> 

        
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

export default AllUsers;