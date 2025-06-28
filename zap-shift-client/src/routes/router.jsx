
import { createBrowserRouter } from "react-router";
import MainLayout from "../root/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Coverage from "../pages/Coverage";
import AboutUs from "../pages/AboutUs";
import Pricing from "../pages/Pricing";
import BeRider from "../pages/BeRider";
import AuthLayout from "../AuthLayout/AuthLayout";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import AddParcelForm from "../pages/AddParcelForm";
import DashboardLayout from "../dashboardLayout/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels";

export const router = createBrowserRouter([
 {
    path: '/',
    Component: MainLayout,
    children: [
        {
          index: true,
          Component: Home
        },
        {
            path: '/services',
            Component: Services
        },
        {
            path: '/coverage',
            Component: Coverage,
            loader: ()=>fetch('../../public/ServicesCenter.json')
        }
        ,
        {
            path: '/about',
            Component: AboutUs
        }
        ,
        {
            path: '/pricing',
            Component: Pricing
        }
        ,
        {
            path: '/beRider',
            Component: BeRider
        },
        {
            path: '/addpercel',
            Component: AddParcelForm
        }
    ]
 },
 {
    path: '/',
    Component: AuthLayout,
    children: [
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/register',
            Component: Register
        }
    ]
 },
 {
    path : '/dashboard',
    Component: DashboardLayout,
    children:[
       {
        path: 'myparcels',
        Component: MyParcels
       }
    ]
 }
   
]);
