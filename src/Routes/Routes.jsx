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
import AdminProfile from "../pages/AdminDashboard/AdminProfile/AdminProfile";
import AddPackage from "../pages/AdminDashboard/AddPackage/AddPackage";
import UserHome from "../pages/UserDashboard/UserHome/UserHome";
import UserProfile from "../pages/UserDashboard/UserProfile/Userprofile";
import PrivateRoute from "./PrivateRoute";
import BookingList from "../pages/UserDashboard/BookingList/BookingList";
import WishList from "../pages/UserDashboard/Wishlist/Wishlist";
import GuideHome from "../pages/GuideDashboard/GuideHome/GuideHome";

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
        },{
          path:'profile',
          element:<AdminProfile></AdminProfile>
        },{
          path:'addPackage',
          element:<AddPackage></AddPackage>
        }

      ]
    },{
      path:'userDashboard',
      element:<PrivateRoute><UserHome></UserHome></PrivateRoute>,
      children:[
        {
          path:'userProfile',
          element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },{
          path:"bookingList",
          element:<PrivateRoute><BookingList></BookingList></PrivateRoute>
        },{
          path:'wishList',
          element:<PrivateRoute><WishList></WishList></PrivateRoute>
        },{
          path:"details/:id",
          element:<PackageDetails></PackageDetails>
        }
      ]
    },{
      path:'guideDashboard',
      element:<PrivateRoute><GuideHome></GuideHome></PrivateRoute>
    }
  ]);