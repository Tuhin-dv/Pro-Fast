import React from 'react'
import logo from '../assets/logo.png'
function ProFastLogo() {
  return (
    <div>
        <div className='flex items-end'>
            <img className='mb-3' src={logo} alt="" />
            <p className='text-4xl font-extrabold -ml-3 '>Pro-Fast</p>
        </div>
    </div>
  )
}

export default ProFastLogo