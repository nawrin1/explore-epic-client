import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { Watch } from "react-loader-spinner";


const useAllUsers = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const {data:allUsers=[],isFetched,refetch}=useQuery({
        queryKey:['allusers'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/users');
            return res.data
        }

    })
    // if (!isFetched){
    //     return (
    //     <div className='flex justify-center items-center min-h-screen place-content-center mx-auto place-items-center '><Watch
    //     height="80"
    //     width="80"
    //     radius="48"
    //     color="#4fa94d"
    //     ariaLabel="watch-loading"
    //     wrapperStyle={{}}
    //     wrapperClassName=""
    //     visible={true}
    //   /></div>)

    // }
    return [allUsers,isFetched,refetch]
};

export default useAllUsers;