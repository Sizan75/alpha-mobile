import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import DisplayError from '../../Pages/Shared/DisplayError/DisplayError'
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Products from "../../Pages/Products/Products";
import DashboardLayout from "../../layouts/DashboardLayout";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
export const router = createBrowserRouter([

    {
        path:'/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError> ,
        children: [

            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            }
            ,
            {
                path: '/login',
                element: <Login></Login>,
            }
            ,
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
            {
                path:'/category/:id',
                element: <Products></Products>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
        ]
    }
])