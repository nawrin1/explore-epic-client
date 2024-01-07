
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img1 from '../../assets/bg3-removebg-preview.png'
import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import useAdmin from '../../hooks/useAdmin';
const Navbar = () => {
    console.log(useLocation().pathname)
    const {user,logout}=useContext(AuthContext)
    const navigate=useNavigate()
    const admin=useAdmin()
    console.log(admin[0],"from nav")
    const handleLogOut=()=>{
      logout()
      .then(() => {     
          Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'logged out successfully',
          showConfirmButton: false,
          timer: 1500

        
      })
      navigate('/')
    }

)
    .catch(error => console.log(error));
}
    return (
        <div className="fixed top-0 left-0 w-full bg-transparent z-50 text-white lg:pr-4">
            <div className="navbar  ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:border-slate-900">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#00000048] rounded-box w-52">
      <li className={`navli ${ useLocation().pathname=== '/' ? 'active' : ''}`}><Link to="/">Homepage</Link></li>
      <li className={`navli ${ useLocation().pathname=== '/about' ? 'active' : ''}`}><Link to="/about">About</Link></li>
      <li className={`navli ${ useLocation().pathname=== '/contact' ? 'active' : ''}`}><Link to="/contact">Contact</Link></li>
      <li className={`navli ${ useLocation().pathname=== '/dashboard' ? 'active' : ''}`}><Link to="/dashboard">Dashboard</Link></li>
      
        {
          user?<li onClick={handleLogOut}><Link>Logout</Link></li>:<li className={`navli ${ useLocation().pathname=== '/login' ? 'active' : ''}`}><Link to="/login">Login</Link></li>
        }
    
      </ul>
    </div>
    <div>
    {
            user ? <>
            {/* <span className="mx-4 font-Sora font-semibold">{user?.displayName}</span> */}
             <label tabIndex={0} className="btn profile btn-ghost btn-circle avatar">
             
                <div className="w-7 rounded-full ">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                </div>
            </label>
                
                {/* <button onClick={handleLogOut} className="btn btn-outline">LogOut</button> */}
            </> : ""
                
            
        }
    </div>
  </div>
  <div className="navbar-center">
   
  </div>
  <div className="navbar-end ">
    {/* <h2 className="text-2xl">Explore Epic</h2> */}
    <img src={img1} className="w-36 h-24"alt="" />

    
  </div>
</div>
            

            
        </div>
    );
};

export default Navbar;