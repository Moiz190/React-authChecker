import React,{ useMemo } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Service } from "../pages/Services";
import Login from "../pages/Login";
const userRole = localStorage.getItem("user");
const adminRoutes = [
  {
    path: "/",
    element:<Navigate to="admin/home" />,
  },
  {
    path: "admin",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "*",
        element: <Navigate to='/' />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to='/' />,
  },
];
const brandRoutes = [
  {
    path: "/",
    element: <Navigate to="brand/home" />,
  },
  {
    path: "/brand",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "service",
        element: <Service />,
      },
    ],
  },
];
const nonAuthRoutes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element:<Login />
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]
const ProtectedRoutes = ()=>{
    const routes = useMemo(()=>{
      return createBrowserRouter([
        ...((userRole?.includes('admin')) ? adminRoutes : userRole?.includes('brand')? brandRoutes : nonAuthRoutes)
      ])
    },[userRole])
    return <RouterProvider router={routes} />;
  }
  export default ProtectedRoutes
