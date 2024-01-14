import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Watch } from "react-loader-spinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Select from 'react-select'
import { TextField } from "@mui/material";
import { DatePicker} from "antd";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const GuideProfile = () => {
    const {user}=useContext(AuthContext)
    const[year,setYear]=useState(null)
    const[startDate,setStartDate]=useState(null)
    const[endSate,setEndDate]=useState(null)
    const { register, handleSubmit, reset, formState: { errors },setError,control } = useForm();
   
    const axiosSecure=useAxiosSecure()
    const axiosPublic=useAxiosPublic()
    const {data:guide=[],isFetched,refetch}=useQuery({
        queryKey:['guide'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/guide?email=${user?.email}`);
            return res.data
        }
    })
  

    const {data: pack = [], isFetched:isFetchedPackage } = useQuery({
        queryKey: ['packages'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/package');
            return res.data;
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







    const options = [
        { value: 'x', label: 'x' },
        { value: 'y', label: 'y' },
        { value: 'z', label: 'z' }
      ]
      const onYearChange = (date, dateString) => {
        console.log(date, dateString);
        setYear(dateString)
      }
      const onStartChange = (date, dateString) => {
        console.log(date, dateString);
        setStartDate(dateString)
      }
      const onEndChange = (date, dateString) => {
        console.log(date, dateString);
        setEndDate(dateString)
      }

    const onSubmit=async (data)=>{
        console.log(data)
        const book={name:data.name, photo:data.photo,graduation:year,email:user.email,guide:data.guide.value,prices:price,status:'In Review',id:id,title:title}
        console.log(book,"from book now")
        // const bookData = await axiosSecure.post('/booking', book)
        //     console.log(bookData.data)
        //     if(bookData.data.insertedId){
                
        //         reset();
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: `Booking confirmed`,
        //             showConfirmButton: false,
        //             timer: 1500
        //           });
                
        //     }


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
          <div className="mt-20 ">
            <h2 className="font-serif text-3xl text-center text-blue-900 font-bold">Add Profile Information</h2>
            <div className="flex justify-center mx-auto mt-3">

    <div className=" bg-white w-[400px] rounded-2xl p-4 shadow-2xl shadow-slate-400">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control  ">
                        <div>
                        
                    <TextField
                
                id="outlined-search1"
                label="Phone"
                type="text"
                {...register("phone", { required: true })}
                name="pone"
                placeholder="Enter your contact number.."
                InputProps={{
                    style: {
                    color: 'black',
                    borderBottom: "1px solid black",
                    },
                    
                    
                }}
                style={{ fontFamily: 'serif', width: '100%' }}
                variant="standard"  
                />

                        </div>
            </div>
            <div className="form-control  ">
                        <div>
                        
                        <TextField
                        id="outlined-search2"
                        label="Address"
                        type="text"
                        placeholder="Enter your address.."
                      
                        {...register("address")}
                        name="address"
                        InputProps={{
                            style: {
                            color: 'black',
                            borderBottom: "1px solid black",
                            }
                           
                        }}
                       
                        
                        style={{ fontFamily: 'serif', width: '100%' }}
                        variant="standard"
                        />


                        </div>
            </div>
            <div className="form-control  ">
            <div>
                        
                        <TextField
                        id="outlined-search2"
                        label="Institute"
                        type="text"
                        placeholder="Enter your institute.."
                      
                        {...register("Institute", { required: true })}
                        name="Institute"
                        InputProps={{
                            style: {
                            color: 'black',
                            borderBottom: "1px solid black",
                            },
                        }}
                        style={{ fontFamily: 'serif', width: '100%' }}
                        variant="standard"
                        />
            
            </div>
            </div>
            <div className=" flex justify-between mt-2">

                    <div className="mt-2">
                        <h2 className="font-serif font-medium">Graduation Year:</h2>
        <DatePicker   onChange={onYearChange} picker="year" />
                   </div>
                    <div className="mt-3">
                    <TextField
                                    id="outlined-search5"
                                    label="degree"
                                    type="text"
                                    placeholder="Enter your degree.."
                                
                                    {...register("degree", { required: true })}
                                    name="degree"
                                    InputProps={{
                                        style: {
                                        color: 'black',
                                        borderBottom: "1px solid black",
                                        },
                                    }}
                                    style={{ fontFamily: 'serif', width: '100%' }}
                                    variant="standard"
                                    />
                
                    </div>
            </div>
            <h2 className="font-serif font-semibold mt-6">Work Experience:</h2>
            
            <div className=" flex justify-between mt-3 gap-4">
                <div>
                <TextField
                        id="outlined-search6"
                        label="Company"
                        type="text"
                        placeholder="Enter your company.."
                      
                        {...register("company", { required: true })}
                        name="company"
                        InputProps={{
                            style: {
                            color: 'black',
                            borderBottom: "1px solid black",
                            },
                        }}
                        style={{ fontFamily: 'serif', width: '100%' }}
                        variant="standard"
                        />

                </div>
                
                <div>
                <TextField
                        id="outlined-search7"
                        label="Position"
                        type="text"
                        placeholder="Enter your position.."
                      
                        {...register("position", { required: true })}
                        name="position"
                        InputProps={{
                            style: {
                            color: 'black',
                            borderBottom: "1px solid black",
                            },
                        }}
                        style={{ fontFamily: 'serif', width: '100%' }}
                        variant="standard"
                        />

                </div>
            </div>
            <div className=" flex justify-between mt-3 gap-4">
                <div>
                    <h2 className="font-serif font-medium">Start Date:</h2>
                <DatePicker   onChange={onStartChange}  />
                
                </div>
                
                <div>
                <h2 className="font-serif font-medium">End Date:</h2>
                <DatePicker   onChange={onEndChange}  />


                </div>
            </div>
            <div className=" flex justify-between mt-3 gap-4">
                <div>
                <TextField
                        id="outlined-search8"
                        label="Responsibility 1"
                        type="text"
                        placeholder="Your first responsibility.."
                      
                        {...register("responsibility1", { required: true })}
                        name="responsibility1"
                        InputProps={{
                            style: {
                            color: 'black',
                            borderBottom: "1px solid black",
                            },
                        }}
                        style={{ fontFamily: 'serif', width: '100%' }}
                        variant="standard"
                        />

                </div>
                
                <div>
                <TextField
                        id="outlined-search9"
                        label="Responsibility 2"
                        type="text"
                        placeholder="Your second responsibility.."
                      
                        {...register("responsibility2", { required: true })}
                        name="responsibility2"
                        InputProps={{
                            style: {
                            color: 'black',
                            borderBottom: "1px solid black",
                            },
                        }}
                        style={{ fontFamily: 'serif', width: '100%' }}
                        variant="standard"
                        />

                </div>
            </div>
            <div className="mt-3  ">
            <Controller
          name="package"
          control={control}
          {...register("package", { required: true })}
          // Set your default value here
          render={({ field }) => (
            <Select
              {...field}
              defaultValue={{label:"select tour package"}}
              options={options} // Provide your options array
            />
          )}
        />
            </div>

            <div className="form-control mt-2">
                                <input  className="btn bg-[#4a9bb4] font-Sora font-semibold" type="submit" value="Book Now" />
                                
                            </div>
        
        </form>
    </div>


       
   </div>


          </div>
        </div>
    );
};

export default GuideProfile;