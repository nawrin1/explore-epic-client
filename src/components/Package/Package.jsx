import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Watch } from "react-loader-spinner";
import './Package.css'
import { FaHiking } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { TbAirBalloon } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Package = () => {

    const {data: pack = [], isFetched } = useQuery({
        queryKey: ['packages'], 
        queryFn: async() =>{
            const res = await axios.get('http://localhost:5000/package');
            return res.data;
        }
    })
    useEffect(() => {
        Aos.init({
            duration:1500
        });
        Aos.refresh();
      }, []);


  
    if(!isFetched){
        return <div className='flex justify-center items-center min-h-screen place-content-center mx-auto place-items-center '><Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /></div>
    }
    console.log(pack,"from package")



    return (
        <div className="back bg-stone-200 py-10 relative">
            <h2 className="text-center text-yellow-500 text-3xl mb-10 font-serif font-bold ">OUR PACKAGES</h2>
            <div className="div1 absolute top-[50%]   justify-center items-center hidden lg:block md:block">
                <p className=" text-xl text-yellow-300 font-serif ">-----Our Packages-----</p>
            </div>

            <div className="flex flex-col lg:flex-row  gap-4 justify-center mx-auto my-20 items-center " data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <div className="di w-[230px] h-[400px] bg-slate-50  " >
                <div className="relative">
                <img src={pack[0].image} alt="" className="h-[190px]" />
                <div className="absolute bottom-2 left-1 "><FaHeart className="text-white"></FaHeart></div>

                    </div>




                    <div className="p-2">
                        <h2 className="text-[20px] font-serif font-semibold">{pack[0].title}   <span className=" text-orange-400">${pack[0].price}</span></h2>
                        <div className="flex mt-8 "><p className="text-[18px] font-serif font-bold ">{pack[0].tour_type}- </p><div className="text-2xl "><FaHiking></FaHiking></div></div>
                        {/* <p>{pack[0].price}</p> */}


                    </div>
                    <div className="flex justify-center items-center mt-4">
                    <Link to={`details/${pack[0]._id}`}><button className="btn btn-outline btn-sm bg-slate-300 ">DETAILS</button></Link>
                    </div>
                    
                </div>
                <div className="di w-[230px] h-[400px] lg:mt-20 bg-slate-50  " >
                    <div className="relative"> 
                    <img src={pack[1].image} alt="" className="h-[180px]" />
                    <div className="absolute bottom-2 left-1 "><FaHeart className="text-white"></FaHeart></div>

                    </div>
                    <div className="p-2">
                    <h2 className="text-[20px] font-serif font-semibold">{pack[1].title}   <span className="text-right text-orange-400">${pack[1].price}</span></h2>
                    <div className="flex mt-8 "><p className="text-[18px] font-serif font-bold ">{pack[1].tour_type}- </p><div className="text-2xl "><FaWalking></FaWalking></div></div>
                        {/* <p>{pack[0].price}</p> */}

                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <Link to={`details/${pack[1]._id}`}><button className="btn btn-outline btn-sm bg-slate-300 ">DETAILS</button></Link>
                    </div>

                </div>
                <div className="di w-[230px] h-[400px] bg-slate-50 ">
                    <div className="relative">
                    <img src={pack[2].image} alt="" className="h-[190px]" />
                    <div className="absolute bottom-2 left-1 "><FaHeart className="text-white"></FaHeart></div>

                    </div>
                    <div className="p-2">
                    <h2 className="text-[20px] font-serif font-semibold">{pack[2].title}   <span className=" text-orange-400">${pack[2].price}</span></h2>
                    <div className="flex mt-8 "><p className="text-[18px] font-serif font-bold ">{pack[2].tour_type}- </p><div className="text-2xl "><TbAirBalloon></TbAirBalloon></div></div>
                        {/* <p>{pack[0].price}</p> */}
                    </div>
                    <div className="flex justify-center items-center mt-4">
                    <Link to={`details/${pack[2]._id}`}><button className="btn btn-outline btn-sm bg-slate-300 ">DETAILS</button></Link>
                    </div>
                    
                </div>

         </div>
         <div className="flex items-center justify-center mx-auto">
            <button className="btn btn-outline  border-x-4 border-yellow-400 text-2xl font-serif font-semibold shadow-lg shadow-slate-400">All Packages</button>
         </div>

            
        </div>
    );
};

export default Package;