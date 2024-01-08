import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Watch } from "react-loader-spinner";


const AdminProfile = () => {
    const {user}=useContext(AuthContext)
    if (!user){
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
    
    return (
        <div className="flex justify-center">
           
            <div className="h-[350px] w-[70%] flex justify-center bg-slate-300  gap-4  place-items-center ">
                <div className="w-[220px] h-[220px] flex justify center place-content-center place-items-center rounded-full border-2 border-white">
                    <img src={user.photoURL} className="w-[200px] h-[200px]  rounded-full" alt="" />

                </div>
                <div className="font-serif text-2xl  ">
                    <h2><span className="font-semibold">Name: </span>{user.displayName}</h2>
                    <h2><span className="font-semibold">Email: </span>{user.email}</h2>
                    <h2><span className="font-semibold">Role: </span>Admin</h2>

                </div>
                

            </div>
            
        </div>
    );
};

export default AdminProfile;