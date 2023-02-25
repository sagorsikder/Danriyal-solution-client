import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllService from "../Pages/AllService/AllService";
import Home from "../Pages/Home/Home/Home";

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
            }
            ]
        }
    ]
    )

    export default router;