
import React from 'react'
import authimg from '../../public/authImage.png'
import { Outlet } from 'react-router'
import ProFastLogo from '../sitelogo/ProFastLogo'
function AuthLayout() {
    return (
        <div className=' max-w-[1680px] mx-auto'>
            <div className='p-12'>
                <ProFastLogo></ProFastLogo>

                <div className='flex '>
                    <div className='flex-1'>
                        <Outlet></Outlet>
                    </div>
                    <div className='flex-1'>
                        <img src={authimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout