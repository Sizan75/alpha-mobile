import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import DisplayError from '../../Pages/Shared/DisplayError/DisplayError'
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Products from "../../Pages/Products/Products";
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
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            }
        ]
    }
])