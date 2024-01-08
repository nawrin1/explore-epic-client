

import { TextField } from "@mui/material";
import { useContext, useEffect } from "react";
import {Controller, useForm } from "react-hook-form";
import Select from 'react-select'
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";






// import axios from "axios";
// import Swal from "sweetalert2";
const AddPackage = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()


    const { register, handleSubmit, reset, formState: { errors },setError,control } = useForm();



    const onSubmit=async (data)=>{
        console.log(data)
        const packages={title:data.title, type:data.tourType,price:data.price,description:data.description,duration:data.duration,location:data.location,image1:data.photo1,image2:data.photo2,image3:data.photo3,image4:data.photo4,image5:data.photo5,plan1:data.day1,plan2:data.day2,plan3:data.day3,plan4:data.day4}
        // console.log(packages,"from add package")
        const pack={title:data.title, tour_type:data.tourType,price:data.price,description:data.description,duration:data.duration,location:data.location,image:data.photo1,image2:data.photo2,image3:data.photo3,image4:data.photo4,image5:data.photo5,itinerary:[data.day1,data.day2,data.day3,data.day4]}
        console.log(pack,"from add")

        const packData = await axiosSecure.post('/package', pack)
            console.log(packData.data)
            if(packData.data.insertedId){
                
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Booking confirmed`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                
            }


    }
    return (
        <div>
            <h1 className="text-center font-serif font-semibold text-blue-900 text-2xl">Add Packages</h1>
            <div className="flex justify-center mx-auto mt-3">

    <div className=" bg-white w-[80%] lg:w-[70%] rounded-2xl p-4 shadow-2xl shadow-slate-400">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            {/* <div className=" flex flex-col lg:flex-row justify-between ">
                        <div>
                        
                    <TextField
                
                id="outlined-search1"
                label="Tour title"
                type="text"
                
                {...register("title", { required: true })}
                name="title"
                placeholder="Enter title.."
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
                
                id="outlined-search3"
                label="Tour Type"
                type="text"
                {...register("tourType", { required: true })}
                name="tourType"
                placeholder="Enter tour type.."
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
                
                id="outlined-search4"
                label="Price"
                type="text"
                {...register("price", { required: true })}
                name="price"
                placeholder="Enter price.."
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
            </div> */}
            {/* <div className="flex flex-col lg:flex-row justify-between  ">
                        <div>
                        
                        <TextField
                        id="outlined-search2"
                        label="Tour description"
                        type="text"
                      
                        {...register("description", { required: true })}
                        name="description"
                        placeholder="Enter description.."
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
                        id="outlined-search11"
                        label="Location"
                        type="text"
                      
                        {...register("location", { required: true })}
                        name="location"
                        placeholder="Enter location.."
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
                        id="outlined-search10"
                        label="Duration"
                        type="text"
                      
                        {...register("duration", { required: true })}
                        name="duration"
                        placeholder="Enter days.."
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
            </div> */}
            {/* <div className=" flex flex-col lg:flex-row justify-between  ">
            <div>
                        
                        <TextField
                        id="outlined-search2"
                        label="Image1"
                        type="text"
                        placeholder="Enter image link.."
                      
                        {...register("photo1", { required: true })}
                        name="photo1"
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
                        id="outlined-search6"
                        label="Image2"
                        type="text"
                      
                        {...register("photo2", { required: true })}
                        name="photo2"
                        placeholder="Enter image link.."
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
                        label="Image3"
                        type="text"
                      
                        {...register("photo3", { required: true })}
                        name="photo3"
                        placeholder="Enter image link.."
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
            
            </div> */}
            {/* <div className="flex flex-col lg:flex-row justify-between">
            <div>
                        
                        <TextField
                        id="outlined-search8"
                        label="Image4"
                        type="text"
                      
                        {...register("photo4", { required: true })}
                        name="photo4"
                        placeholder="Enter image link.."
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
                        label="Image5"
                        type="text"
                      
                        {...register("photo5", { required: true })}
                        name="photo5"
                        placeholder="Enter image link.."
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
                        label="Day 1 "
                        type="text"
                      
                        {...register("day1", { required: true })}
                        name="day1"
                        placeholder="Enter day 1 plan.."
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
            
            
            </div> */}
            {/* <div className="flex flex-col lg:flex-row justify-between">
            <div>
                        
                        <TextField
                        id="outlined-search9"
                        label="Day 2 "
                        type="text"
                      
                        {...register("day2", { required: true })}
                        name="day2"
                        placeholder="Enter day 2 plan.."
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
                        label="Day 3 "
                        type="text"
                      
                        {...register("day3", { required: true })}
                        name="day3"
                        placeholder="Enter day 3 plan.."
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
                        label="Day 4 "
                        type="text"
                      
                        {...register("day4", { required: true })}
                        name="day4"
                        placeholder="Enter day 4 plan.."
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


            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
            <div>
                        
                        <TextField
                    
                    id="outlined-search1"
                    label="Tour title"
                    type="text"
                    
                    {...register("title", { required: true })}
                    name="title"
                    placeholder="Enter title.."
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
                    
                    id="outlined-search3"
                    label="Tour Type"
                    type="text"
                    {...register("tourType", { required: true })}
                    name="tourType"
                    placeholder="Enter tour type.."
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
                    
                    id="outlined-search4"
                    label="Price"
                    type="text"
                    {...register("price", { required: true })}
                    name="price"
                    placeholder="Enter price.."
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
                        id="outlined-search2"
                        label="Tour description"
                        type="text"
                      
                        {...register("description", { required: true })}
                        name="description"
                        placeholder="Enter description.."
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
                        id="outlined-search11"
                        label="Location"
                        type="text"
                      
                        {...register("location", { required: true })}
                        name="location"
                        placeholder="Enter location.."
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
                        id="outlined-search10"
                        label="Duration"
                        type="text"
                      
                        {...register("duration", { required: true })}
                        name="duration"
                        placeholder="Enter days.."
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
                        id="outlined-search2"
                        label="Image1"
                        type="text"
                        placeholder="Enter image link.."
                      
                        {...register("photo1", { required: true })}
                        name="photo1"
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
                        id="outlined-search6"
                        label="Image2"
                        type="text"
                      
                        {...register("photo2", { required: true })}
                        name="photo2"
                        placeholder="Enter image link.."
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
                        label="Image3"
                        type="text"
                      
                        {...register("photo3", { required: true })}
                        name="photo3"
                        placeholder="Enter image link.."
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
                        id="outlined-search8"
                        label="Image4"
                        type="text"
                      
                        {...register("photo4", { required: true })}
                        name="photo4"
                        placeholder="Enter image link.."
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
                        label="Image5"
                        type="text"
                      
                        {...register("photo5", { required: true })}
                        name="photo5"
                        placeholder="Enter image link.."
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
                        label="Day 1 "
                        type="text"
                      
                        {...register("day1", { required: true })}
                        name="day1"
                        placeholder="Enter day 1 plan.."
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
                        label="Day 2 "
                        type="text"
                      
                        {...register("day2", { required: true })}
                        name="day2"
                        placeholder="Enter day 2 plan.."
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
                        label="Day 3 "
                        type="text"
                      
                        {...register("day3", { required: true })}
                        name="day3"
                        placeholder="Enter day 3 plan.."
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
                        label="Day 4 "
                        type="text"
                      
                        {...register("day4", { required: true })}
                        name="day4"
                        placeholder="Enter day 4 plan.."
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


            <div className="form-control mt-8">
                                <input  className="btn bg-[#4a9bb4] font-Sora font-semibold" type="submit" value="Add Packages" />
                                
                            </div>
        
        </form>
    </div>


       
   </div>
            
        </div>
    );
};

export default AddPackage;