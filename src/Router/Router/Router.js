import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
            ,
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]
    }
])