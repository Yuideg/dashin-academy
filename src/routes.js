import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import SimpleLayout from './layouts/simple';
import Login from './components/auth/Login';
import Home from "./Home";
import Page404 from './pages/Page404';
import SignUp from "./components/auth/SignUp";
import ErrorPage from "./components/error/error";
import {EditInformation} from "./components/dashboard";
import DashboardLayout from "./layouts/dashboard";
import DashboardAppPage from "./pages/DashboardAppPage";
import UserPage from "./pages/UserPage";
import ProductsPage from "./pages/ProductsPage";
import BlogPage from "./pages/BlogPage";
import PasswordResetPage from "./pages/PasswordReset";
import StudentList from "./views/students/StudentList";

export default function Router() {
    const routes = useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="/dashboard/app" />, index: true },
                { path: 'app', element: <DashboardAppPage /> },
                { path: 'password-reset', element: <PasswordResetPage /> },
                { path: 'students', element: <StudentList /> },

            ],
        },
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
            errorElement: <ErrorPage />,

        },
        {
            path:'/dashboard/edit',
            element:<EditInformation />
        },
        {
            path: "/",
            errorElement: <ErrorPage />,
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
