import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
// import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
// import BlogPage from './pages/BlogPage';
// import UserPage from './pages/UserPage';
import Login from './components/auth/Login';
import Home from "./Home";
import Page404 from './pages/Page404';
import SignUp from "./components/auth/SignUp";
// import ProductsPage from './pages/ProductsPage';
// import DashboardAppPage from './pages/DashboardAppPage';


export default function Router() {
    const routes = useRoutes([
        // {
        //     path: '/dashboard',
        //     element: <DashboardLayout />,
        //     children: [
        //         { element: <Navigate to="/dashboard/app" />, index: true },
        //         { path: 'app', element: <DashboardAppPage /> },
        //         { path: 'user', element: <UserPage /> },
        //         { path: 'products', element: <ProductsPage /> },
        //         { path: 'blog', element: <BlogPage /> },
        //     ],
        // },
        {
            path: 'auth/register',
            element: <SignUp />,
        },
        {
            path: 'login',
            element: <Login />,
        },
        {
            path: '/home',
            element: <Home />,
        },
        {
            element: <SimpleLayout />,
            children: [
                { element: <Navigate to="/dashboard/app" />, index: true },
                { path: '404', element: <Page404 /> },
                { path: '*', element: <Navigate to="/404" /> },
            ],
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);

    return routes;
}
