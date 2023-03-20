import {Navigate} from "react-router-dom";
import HomePage from "@pages/homepage";
import RegisterPage from "@pages/registerPage";
import News from "@pages/homepage/news";
import LoginPage from "@pages/loginPage";

export default [
    {
        path:'/home',
        element: <HomePage />,
        children:[
            {
                path:'news',
                element:<News/>

            }
        ]

    },
    {
        path: '/register',
        element: <RegisterPage/>
    },
    {
       path:'/login',
       element: <LoginPage />
    },
    {
        path:'/',
        element:<Navigate to={'/home'} />
    }
]