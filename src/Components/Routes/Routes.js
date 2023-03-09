import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import AllService from "../Pages/AllService/AllService";
import Home from "../Pages/Home/Home/Home";

// All route setup here

const router = createBrowserRouter(
    [
        {
            path:'/',
            element : <Main></Main>,
            children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allservices',
                element:<AllService></AllService>
            },
            {
                path:'/allblogs',
                element:<AllBlogs></AllBlogs>
            }
            ]
        }
    ]
    )

    export default router;