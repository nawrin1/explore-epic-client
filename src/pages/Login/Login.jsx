
import './Login.css'



import { MenuItem, Select, TextField } from "@mui/material";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
// import { AuthContext } from "../../../provider/AuthProvider";
// import './CreateTask.css'
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Social from '../../components/Social/Social';
// import img1 from '../../../assets/task.png'
// import toast from "react-hot-toast";


const Login = () => {
    // const {user}=useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors },setError,control } = useForm();
    const {login}=useContext(AuthContext)
    const navigate=useNavigate()
    const onSubmit=data=>{
        console.log(data.email, data.password)
        login(data.email,data.password)
        .then(result=>{
            console.log("logged in")
            let timerInterval;
            Swal.fire({
            title: "Logging in",
            
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
                navigate("/")
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
            });
            


        })
        .catch(error=>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Login failed",
                
              });

        })
    }
    return (

<div className='login min-h-screen '>
<div className=" py-20 ">
        <div className=" max-w-[400px]  mx-auto backdrop-blur-md ">
           <div className=" rounded-lg ">
           <h2 className="font-serif font-semibold text-3xl text-center pt-2 text-white">LOGIN</h2>
              
                   
               <div className=" shadow-2xl  ">
             
                   <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                       <div className="form-control  ">
                        <div>
                        
                    <TextField
                fullWidth
                id="outlined-search1"
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
                        id="outlined-search2"
                        label="Your Password"
                        type="password"
                        {...register("password", { required: true })}
                        variant="standard"
                        placeholder="Enter your password.."
                    />
                     {errors.password?.type === 'required' && <p className="text-red-600 font-serif text-[14px]">Password is required</p>}

                          
                         
                       
                           
                       </div>
                  
                       
                       <div className="form-control mt-8">
                                <input className="btn btn-sm bg-[#4a9bb4] font-serif font-semibold" type="submit" value="Login Now" />
                            </div>
                          
                       
                   </form>
                   <Social></Social>
                   <p className=' pb-4 font-Sora font-semibold text-center text-white mt-3'><small>Are You New Here? <Link to="/register">Create an account</Link> </small></p>
                   
                  
                   
               </div>
              
              

           </div>
       </div>
       
   </div>
   </div>

    );
};

export default Login;