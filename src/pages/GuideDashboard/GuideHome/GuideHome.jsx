

import { NavLink, Outlet } from "react-router-dom";
import { LuMessageSquareDashed } from "react-icons/lu";
import { GoPackageDependents } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

import { HiOutlineHome } from "react-icons/hi";
import './GuideHome.css'
import { useContext } from "react";

import { MdBookmarks } from "react-icons/md";
import { AuthContext } from "../../../provider/AuthProvider";

const GuideHome = () => {
  const {user}=useContext(AuthContext)
    return (
    
    <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
<div className="flex justify-end p-4 absolute right-0 top-3">
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
    <h2 className="relative text-2xl text-slate-500 font-serif text-center mb-7">TourGuide Dashboard</h2>
    
                       <li className="dash font-serif  font-semibold">
                            <NavLink to="/"><div className=" mb-[2px] text-[20px]"><HiOutlineHome></HiOutlineHome></div>Home</NavLink>
                        </li>
                       <li className="dash font-serif font-semibold">
                            <NavLink to="/guideDashboard/guideProfile"><div className=" mb-[2px] text-[20px]"><CgProfile></CgProfile></div>Profile</NavLink>
                        </li>

                   

                      
                       

    </ul>
  
  </div>
</div>
   
    );
};

export default GuideHome;