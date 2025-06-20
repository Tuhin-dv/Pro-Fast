
import { createBrowserRouter } from "react-router";
import MainLayout from "../root/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Coverage from "../pages/Coverage";

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
    ]
 }
   
]);
