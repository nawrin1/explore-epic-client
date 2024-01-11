import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Watch } from "react-loader-spinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const GuideProfile = () => {
    const {user}=useContext(AuthContext)
   
    const axiosSecure=useAxiosSecure()
    const {data:guide=[],isFetched,refetch}=useQuery({
        queryKey:['guide'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/guide?email=${user?.email}`);
            return res.data
        }
    })
    console.log(guide,"guide prof")

    if (!guide){
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
        <div className=" mx-4  ">
           
          <div className="mx-4">
            <div className=" flex flex-col mt-8 w-[80%] lg:flex-row justify-around bg-slate-100  py-2 rounded-2xl px-4  gap-4  place-items-center ">
                <div className="w-[150px] h-[150px] flex  place-content-center place-items-center rounded-full border-2 border-black">
                    <img src={user.photoURL} className="w-[120px] h-[120px]  rounded-full" alt="" />

                </div>
                <div className="font-serif text-[16px] lg:text-xl bg-slate-200 p-4 rounded-xl ">
                    <h2><span className="font-semibold">Name: </span>{user.displayName}</h2>
                    <h2><span className="font-semibold">Email: </span>{user.email}</h2>
                    <h2><span className="font-semibold">Role: </span>Guide</h2>

                </div>
                

            </div>
            <div className="mt-5 flex flex-col lg:flex-row md:flex-row justify-around">
                <div className="font-serif w-[30%]">
                    <h2 className="text-3xl font-semibold mb-3 mt-3">Education--</h2>
                    <p className="text-slate-700">{guide.length>0?(guide[0].education?guide[0].education[0].degree:"Not Available"):""}</p>
                    <p className="text-slate-700">{guide.length>0?(guide[0].education?guide[0].education[0].school:""):""}</p>
                    <p className="text-slate-700">{guide.length>0?(guide[0].education?guide[0].education[0].graduationYear:""):""}</p>

                </div>
                <div className="font-serif w-[50%]">
                <h2 className="text-2xl font-semibold mb-3 mt-3">Work Experience--</h2>
                <p><span className="font-semibold">Company: </span>{guide.length>0?(guide[0].workExperience?guide[0].workExperience[0].company:"Not Available"):""}</p>
                <p><span className="font-semibold">Position: </span>{guide.length>0?(guide[0].workExperience?guide[0].workExperience[0].position:"Not Available"):""}</p>
                <p><span className="font-semibold">Duration: </span>({guide.length>0?(guide[0].workExperience?guide[0].workExperience[0].startDate:"Not Available"):""})-({guide.length>0?(guide[0].workExperience?guide[0].workExperience[0].endDate:"Not Available"):""})</p>
                <div className="">
                    <span className="font-semibold">Responsibilities:</span>
                    {guide.length>0 && (guide[0].workExperience && guide[0].workExperience[0].responsibilities.map((item, idx) => (
                        <ul className="text-slate-700"key={idx} style={{ listStyleType: 'disc', marginLeft: '30px' }}>
                        <li>{item}</li>
                        </ul>
                    )))}
                    </div>


                </div>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row justify-around font-serif">
                <div className="w-[40%]  ml-[0px] lg:ml-[5%]">
                <h2 className="font-serif text-2xl mb-3 font-semibold mt-3">Contact--</h2>
                <p><span className="font-semibold">Phone: </span>{guide.length>0?(guide[0].phone?guide[0].phone:"Not Available"):""}</p>
                <p><span className="font-semibold">Address: </span>{guide.length>0?(guide[0].address?guide[0].address:"Not Available"):""}</p>

                </div>
                <div className="w-[70%]">

                </div>
            </div>
            
          </div>
        </div>
    );
};

export default GuideProfile;