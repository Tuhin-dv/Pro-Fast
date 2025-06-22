import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './routes/router.jsx';
//swiper 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='urbanist  bg-[#EAECED]'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)
