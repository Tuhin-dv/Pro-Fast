
import { createBrowserRouter } from "react-router";
import MainLayout from "../root/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Coverage from "../pages/Coverage";
import AboutUs from "../pages/AboutUs";
import Pricing from "../pages/Pricing";
import BeRider from "../pages/BeRider";

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
            Component: Coverage
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
        }
    ]
 }
   
]);
