import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import DashboardHome from "../pages/AdminDashboard/DashboardHome/DashboardHome";
import AllUsers from "../pages/AdminDashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
           path:'/',
           element:<Home></Home>
        },{
          path:'/about',
          element:<About></About>
        },{
          path:'/login',
          element:<Login></Login>
        },{
          path:'/register',
          element:<Register></Register>
        },{
          path:'/details/:id',
          element:<PackageDetails></PackageDetails>
        }
      ]
    },{
      path:'dashboard',
      element:<DashboardHome></DashboardHome>,
      children:[
        {
          path:'allUsers',
          element:<AllUsers></AllUsers>
        }

      ]
    }
  ]);