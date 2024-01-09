import { useContext } from "react";

import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";



const useGuide = () => {
    const { user,loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: isGuide} = useQuery({
        queryKey: [user?.email, 'isGuide'],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/guide/${user.email}`);
            console.log(res.data,"guide");
            return res.data?.guide;
        }
    })
    return [isGuide]
};

export default useGuide;