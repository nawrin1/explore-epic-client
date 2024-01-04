import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";



const Social= () => {
    const { googleSign} = useContext(AuthContext)
  
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        console.log("google ")
        googleSign()
        .then(result =>{
            
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photo:result.user.photoURL
            }
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
                // navigate("/")
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
            });
            navigate('/')
            axios.post('http://localhost:5000/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
            
        })
    }

    return (
        <div className=" mx-8">
          
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-sm bg-emerald-400 w-full">
                    <FaGoogle className=""></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default Social;