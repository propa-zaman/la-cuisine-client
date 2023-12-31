import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Login from '../Components/Login';
import Home from '../Components/Home';
import Blog from '../Components/Blog';
import Error from '../Components/Error';
import Recipes from '../Components/Recipes';
import PrivateRoute from './PrivateRoute';
import Register from '../Components/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://la-cuisine-server-propa-zaman.vercel.app/chefDetails')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/recipes/:id",
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader: ({params})=>fetch(`https://la-cuisine-server-propa-zaman.vercel.app/chefDetails/${params.id}`)
              }
        ]
    }
])

export default router;