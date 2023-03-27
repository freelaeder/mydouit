import {Navigate} from "react-router-dom";
import HomePage from "@pages/homepage";
import RegisterPage from "@pages/registerPage";
import LoginPage from "@pages/loginPage";
import ArticlePage from "@pages/articlePage";

export default [
    {
        path:'/home',
        element: <HomePage />,
    },
    {
        path: '/article/:slug',
        element: <ArticlePage/>
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