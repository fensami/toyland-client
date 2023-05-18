import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import Registration from "../Components/Pages/Registration/Registration";
import Login from "../Components/Pages/Login/Login";
import ErrorPage from "../Components/Pages/Errorpage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])


export default router;