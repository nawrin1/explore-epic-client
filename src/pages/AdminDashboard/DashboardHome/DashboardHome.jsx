import { NavLink, Outlet } from "react-router-dom";
import { LuMessageSquareDashed } from "react-icons/lu";

import { HiOutlineHome } from "react-icons/hi";
import './DashboardHome.css'
const DashboardHome = () => {
    return (
    
    <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
  
   <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu backgr p-4 w-60 min-h-full  text-base-content ">
    <h2 className="relative text-3xl text-slate-500 font-Sora text-center mb-7">Admin Dashboard</h2>
                       <li className="font-Sora font-semibold">
                            <NavLink to="/"><div className=" mb-[2px] text-[16px]"><HiOutlineHome></HiOutlineHome></div>Home</NavLink>
                        </li>
                   
                       {/* <li className="font-Sora font-semibold">
                            <NavLink to="/dashboard/surveyResponseAdmin"><div><LuMessageSquareDashed></LuMessageSquareDashed></div>Survey Response</NavLink>
                        </li> */}
                       <li className="font-Sora font-semibold">
                            <NavLink to="/dashboard/allUsers"><div><LuMessageSquareDashed></LuMessageSquareDashed></div>All Users</NavLink>
                        </li>
                       {/* <li className="font-Sora font-semibold">
                            <NavLink to="/adminDashboard/surveyStatus"><div><LuMessageSquareDashed></LuMessageSquareDashed></div>Survey Status</NavLink>
                        </li>
                       <li className="font-Sora font-semibold">
                            <NavLink to="/adminDashboard/paymentHistory"><div><LuMessageSquareDashed></LuMessageSquareDashed></div>Payment Information</NavLink>
                        </li> */}
                       

    </ul>
  
  </div>
</div>
   
    );
};

export default DashboardHome;