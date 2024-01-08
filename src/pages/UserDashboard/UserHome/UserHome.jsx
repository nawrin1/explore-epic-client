

import { NavLink, Outlet } from "react-router-dom";
import { LuMessageSquareDashed } from "react-icons/lu";
import { GoPackageDependents } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
// import img1 from "../../../assets/bg3-removebg-preview.png"
import { HiOutlineHome } from "react-icons/hi";
import './UserHome.css'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const UserHome = () => {
  const {user}=useContext(AuthContext)
    return (
    
    <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
<div className="flex justify-end p-4">
<label tabIndex={0} className="btn profile btn-ghost btn-circle avatar ">
             
             <div className="w-7 rounded-full ">
             <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
             </div>
         </label>
</div>
  
   <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu backgr p-4 w-60 min-h-full  text-base-content ">
    <h2 className="relative text-2xl text-slate-500 font-serif text-center mb-7">User Dashboard</h2>
    {/* <img src={img1} className="w-36 h-24"alt="" /> */}
                       <li className="dash font-Sora font-semibold">
                            <NavLink to="/"><div className=" mb-[2px] text-[20px]"><HiOutlineHome></HiOutlineHome></div>Home</NavLink>
                        </li>
                       <li className="dash font-Sora font-semibold">
                            <NavLink to="/userDashboard/userProfile"><div className=" mb-[2px] text-[20px]"><CgProfile></CgProfile></div>Profile</NavLink>
                        </li>
                   

                       {/* <li className="dash font-Sora font-semibold">
                            <NavLink to="/dashboard/allUsers"><div  className=" mb-[2px] text-[20px]"><LuMessageSquareDashed></LuMessageSquareDashed></div>All Users</NavLink>
                        </li>
                       <li className="dash font-Sora font-semibold">
                            <NavLink to="/dashboard/addPackage"><div  className=" mb-[2px] text-[20px]"><GoPackageDependents></GoPackageDependents></div>Add Package</NavLink>
                        </li> */}

                       

    </ul>
  
  </div>
</div>
   
    );
};

export default UserHome;