import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import DisplayError from '../../Pages/Shared/DisplayError/DisplayError'
import Dashboard from "../../Pages/Dashboard/Dashboard";
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
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            }
        ]
    }
])