import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import Registration from "../Components/Pages/Registration/Registration";
import Login from "../Components/Pages/Login/Login";
import ErrorPage from "../Components/Pages/Errorpage/ErrorPage";
import Blogs from "../Components/Pages/Blogs/Blogs";
import AddToys from "../Components/Pages/AddToys/AddToys";
import AllToys from "../Components/Pages/AllToys/AllToys";
import MyToys from "../Components/Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateToys from "../Components/Pages/UpdateToys/UpdateToys";
import ViewDetails from "../Components/Pages/ViewDetails/ViewDetails";
// import UpdateToys from "../Components/Pages/UpdateToys/UpdateToys";

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
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'addToys',
                element: <AddToys></AddToys>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toyland-server-weld.vercel.app/allToys')
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'updateToys/:id',
                element: <UpdateToys></UpdateToys>,
                loader: ({params}) => fetch(`https://toyland-server-weld.vercel.app/allToys/${params.id}`)
            },
            {
                path: 'viewDetails/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://toyland-server-weld.vercel.app/allToys/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])


export default router;