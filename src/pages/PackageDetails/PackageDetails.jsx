import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Watch } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { HiMiniCalendarDays } from "react-icons/hi2";
import { BiSolidPlaneAlt } from "react-icons/bi";
import BookingForm from "../../components/BookingForm/BookingForm";
import './PackageDetails.css'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const PackageDetails = () => {
    const {id}=useParams()
    const axiosPublic=useAxiosPublic()
    const {data: packages = [], isFetched } = useQuery({
        queryKey: ['packagedetails'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/package?id=${id}`);
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
    console.log(packages,"from packagedetails")
    const{image,image2,image3,image4,image5,title,description,duration,itinerary,location,price,tour_type}=packages[0]
    console.log(image)


    

    return (
        <div className="min-h-screen ">
            <div className="relative">
                <img src={image} alt="" className="lg:h-[700px] md:h-[700px] h-[400px] w-full object-fill"  />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-transparent"></div>
                <div className="lg:text-3xl md:text-3xl text-xl font-extrabold text-white absolute z-20 left-5 bottom-[50%]"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                    <p>{title}</p>
                    <p>{location}</p>
                </div>

            </div>
            <div className="flex flex-col lg:flex-row md:flex-row gap-4   justify-between mx-auto p-4 mt-4">
                <div className="lg:w-[70%] md:w-[60%] ">
                    <p className="font-serif font-medium lg:text-[15px] text-slate-700 md:text-[15px] text-justify text-[14px] ">{description}</p>
                    <div className="flex justify-between">
                    <p className="lg:text-xl md:text-[15px] text-[14px] mt-4 font-serif font-semibold">Tour Type:<span className="font-medium">{tour_type}</span></p>
                    <p className="lg:text-xl md:text-[15px] text-[14px] mt-4 font-serif font-semibold ">Price:  <span className="text-yellow-600">${price}</span></p>
                    <div className="lg:text-xl md:text-[15px] text-[14px] mt-4 font-serif font-semibold flex  ">Duration:  <span className="font-medium">{duration}</span><div className="mt-1 ml-2"><HiMiniCalendarDays></HiMiniCalendarDays></div></div>
                    </div>
                    <div className="carousel lg:w-[70%] mt-8 lg:mt-8 md:mt-4 font-serif">
  <div id="slide1" className="carousel-item relative w-full ">
  <div className="text-center bg-blue-100 w-full "><div className="flex justify-center pt-[11%] font-semibold ">Day-1<div className="mt-1 ml-2 "><BiSolidPlaneAlt></BiSolidPlaneAlt></div></div><p className="pb-[11%] ">{itinerary[0]}</p></div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle btn-ghost">❮</a> 
      <a href="#slide2" className="btn btn-circle btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="text-center bg-blue-100 w-full "><div className="flex justify-center pt-[11%]  font-semibold">Day-2<div className="mt-1 ml-2"><BiSolidPlaneAlt></BiSolidPlaneAlt></div></div><p className="pb-[11%]">{itinerary[1]}</p></div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
      <a href="#slide1" className="btn btn-circle btn-ghost">❮</a> 
      <a href="#slide3" className="btn btn-circle btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="text-center bg-blue-100 w-full "><div className="flex justify-center pt-[11%]  font-semibold">Day-3<div className="mt-1 ml-2"><BiSolidPlaneAlt></BiSolidPlaneAlt></div></div><p className="pb-[11%]">{itinerary[2]}</p></div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle btn-ghost">❮</a> 
      <a href="#slide4" className="btn btn-circle btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="text-center bg-blue-100 w-full "><div className="flex justify-center pt-[11%]  font-semibold">Day-4<div className="mt-1 ml-2"><BiSolidPlaneAlt></BiSolidPlaneAlt></div></div><p className="pb-[11%]">{itinerary[3]}</p></div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle btn-ghost">❮</a> 
      <a href="#slide1" className="btn btn-circle btn-ghost">❯</a>
    </div>
  </div>
</div>
                    
                    

                </div>

                <div className="lg:w-[30%] md:w-[40%] md:flex md:flex-col  md:place-content-center"  data-aos="zoom-in"
>
                    <div className="flex gap-2">
                        <div>
                            <img src={image2} alt="" className="h-[160px] w-[200px]" />

                        </div>
                        <div>
                        <img src={image3} alt="" className="h-[160px] w-[200px]" />

                        </div>

                    </div>
                    <div className="flex gap-2 mt-2">
                    <div >
                            <img src={image4} alt="" className="h-[160px] w-[200px]" />

                        </div>
                        <div>
                        <img src={image5} alt="" className="h-[160px] w-[200px]" />

                        </div>


                    </div>

                </div>

            </div>
            <div>
              <h2 className="text-center text-yellow-500 text-4xl mt-16">BOOK NOW</h2>
              <hr className="text-center h-1 w-[50%] bg-[#edbd4c] justify-center mx-auto rounded-full mt-3 "></hr>
            <div className="backg flex  py-10">
             
              <BookingForm price={price}></BookingForm>

          

            </div>
            </div>

           
            
        </div>
    );
};

export default PackageDetails;