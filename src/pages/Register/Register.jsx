


import './Register.css'



import { MenuItem, Select, TextField } from "@mui/material";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
// import { AuthContext } from "../../../provider/AuthProvider";
// import './CreateTask.css'
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
// import { AuthContext } from '../../provider/AuthProvider';
// import img1 from '../../../assets/task.png'
// import toast from "react-hot-toast";


const Register = () => {
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const { createNewUser, updateProfileUser,logout } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors },setError,control } = useForm();
    const onSubmit=data=>{
        console.log(data.email, data.password,data.photoURL,data.name)
        createNewUser(data.email,data.password)
            .then(result=>{
                console.log(result.user,"user console")
                
                
                  updateProfileUser(data.name,data.photoURL)
                  .then(() => {
                       
                    const userInfo = {
                        name: data.name,
                        email: data.email,
                        photo:data.photoURL
                      
                    }
                    logout()
                    .then(res=>{
                    
                    axios.post('http://localhost:5000/users', userInfo)
                        .then(res => {
                            console.log(res,"post from register")
                            if (res.data.insertedId) {
                                console.log('user added')
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Account Created ',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                logout()
                                .then(res=>navigate('/login'))


                               
                            }
                        })})


                })
                .catch(error => {
                    console.log(error)
                    
                })
   
            })
            .catch(error=>{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Registration failed",
                    
                  });
                console.log(error)
            })

    }
    return (
<div className='reg min-h-screen'>

<div className="py-20 ">
        <div className=" max-w-[400px]  mx-auto backdrop-blur-md  ">
           <div className=" rounded-lg ">
           <h2 className="font-serif font-semibold text-3xl text-center pt-2 text-white">Register</h2>
              
                   
               <div className=" shadow-2xl ">
             
                   <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                       <div className="form-control  ">
                        <div>
                        <TextField
                fullWidth
                id="outlined-search1"
                label="Your Username"
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Enter your name.."
                InputLabelProps={{
                    style: { color: 'white' ,fontFamily:'serif'}, // Change label color here
                }}
                InputProps={{
                    style: {
                    color: 'black',
                    borderBottom: "1px solid black",
                    fontFamily: 'serif'
                    },
                    
                }}
                style={{ fontFamily: 'serif' }}
                variant="standard"  
                />

{errors.name?.type === 'required' && <p className="text-red-600 font-serif text-[14px]">Name is required</p>}


                        </div>
                        <div>
                        
                    <TextField
                fullWidth
                id="outlined-search2"
                label="Your Email"
                type="text"
                {...register("email", { required: true })}
                name="email"
                placeholder="Enter your email.."
                InputLabelProps={{
                    style: { color: 'white' ,fontFamily:'serif'}, // Change label color here
                }}
                InputProps={{
                    style: {
                    color: 'black',
                    borderBottom: "1px solid black",
                    fontFamily: 'serif'
                    },
                    
                }}
                style={{ fontFamily: 'serif' }}
                variant="standard"  
                />

{errors.email?.type === 'required' && <p className="text-red-600 font-serif text-[14px]">Email is required</p>}

                        </div>
   
                       </div>
                       <div className="form-control">
                       <TextField
                        InputProps={{
                            style: { color: 'black', borderBottom: "1px solid black" ,fontFamily: 'serif' },
                        }}
                        InputLabelProps={{
                            style: { color: 'white' ,fontFamily:'serif'}, // Change label color here
                        }}
                        style={{ fontFamily: 'serif' }}
                        id="outlined-search3"
                        label="Your Password"
                        type="password"
                        {...register("password", { required: true })}
                        variant="standard"
                        placeholder="Enter your password.."
                    />
                     {errors.password?.type === 'required' && <p className="text-red-600 font-serif text-[14px]">Password is required</p>}

                          
                         
                       
                           
                       </div>
                       <div>
                       <TextField
                fullWidth
                id="outlined-search4"
                label="Your Photo URL"
                type="text"
                {...register("photoURL", { required: true })}
                name="photoURL"
                placeholder="Enter your photo url.."
                InputLabelProps={{
                    style: { color: 'white' ,fontFamily:'serif'}, // Change label color here
                }}
                InputProps={{
                    style: {
                    color: 'black',
                    borderBottom: "1px solid black",
                    fontFamily: 'serif'
                    },
                    
                }}
                style={{ fontFamily: 'serif' }}
                variant="standard"  
                />

{errors.photo?.type === 'required' && <p className="text-red-600 font-serif text-[14px]">Photo URl is required</p>}

                       </div>
                  
                       
                       <div className="form-control mt-8">
                                <input className="btn btn-xs bg-[#4a9bb4] font-serif font-semibold" type="submit" value="Register Now" />
                            </div>
                          
                       
                   </form>
                   <p className=' pb-4 font-Sora font-semibold text-center text-white '><small>Already have an account? <Link to="/login">Login now</Link> </small></p>
                   
                  
                   
               </div>
              
              

           </div>
       </div>
       
   </div>
   </div>

    );
};

export default Register;