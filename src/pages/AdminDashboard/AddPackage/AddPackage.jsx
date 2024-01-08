

import { TextField } from "@mui/material";
import { useContext, useEffect } from "react";
import {Controller, useForm } from "react-hook-form";
import Select from 'react-select'
import { AuthContext } from "../../../provider/AuthProvider";






// import axios from "axios";
// import Swal from "sweetalert2";
const AddPackage = () => {
    const {user}=useContext(AuthContext)


    const { register, handleSubmit, reset, formState: { errors },setError,control } = useForm();
    const options = [
        { value: 'x', label: 'x' },
        { value: 'y', label: 'y' },
        { value: 'z', label: 'z' }
      ]

    // useEffect(()=>{
    //     if (user){
    //         setDisable(false)
    //     }
    //     else{
    //         setDisable(true)
    //     }

    //   },[user])
    const onSubmit=async (data)=>{
        console.log(data)
        const book={name:data.name, photo:data.photo,email:user.email,guide:data.guide.value}
        console.log(book,"from book now")
        // const bookData = await axios.post('http://localhost:5000/booking', book)
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
        <div>
            <h1>add</h1>
            <div className="flex justify-center mx-auto mt-3">

    <div className=" bg-white w-[80%] rounded-2xl p-4 shadow-2xl shadow-slate-400">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control  ">
                        <div>
                        
                    <TextField
                
                id="outlined-search1"
                label="Tourist Name"
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Enter your name.."
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
            </div>
            <div className="form-control  ">
                        <div>
                        
                        <TextField
                        id="outlined-search2"
                        label="Tourist Email"
                        type="text"
                      
                        {...register("email", { required: true })}
                        name="email"
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
                        label="Image"
                        type="text"
                      
                        {...register("photo", { required: true })}
                        name="photo"
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
            <div className="form-control mt-3">
            <Controller
          name="guide"
          control={control}
          {...register("guide", { required: true })}
          // Set your default value here
          render={({ field }) => (
            <Select
              {...field}
              defaultValue={{label:"select tour guide"}}
              options={options} // Provide your options array
            />
          )}
        />



            </div>
            <div className=" flex justify-between mt-2">
            <div>

            </div>
        <div className="mt-2">
     
        </div>
            </div>

            <div className="form-control mt-2">
                                <input  className="btn bg-[#4a9bb4] font-Sora font-semibold" type="submit" value="Book Now" />
                                
                            </div>
        
        </form>
    </div>


       
   </div>
            
        </div>
    );
};

export default AddPackage;