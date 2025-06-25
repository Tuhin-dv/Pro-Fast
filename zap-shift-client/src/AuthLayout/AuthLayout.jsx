
import React from 'react'
import authimg from '../../public/authImage.png'
import { Link, Outlet } from 'react-router'
import ProFastLogo from '../sitelogo/ProFastLogo'
function AuthLayout() {
    return (
        <div className=' max-w-[1680px] mx-auto'>
            <div className='p-12'>

                <Link to='/'>
                    <ProFastLogo></ProFastLogo>
                </Link>

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