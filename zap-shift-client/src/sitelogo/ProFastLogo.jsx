import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router'
function ProFastLogo() {
  return (
    <div>
      <Link to='/'>
        <div className='flex items-end'>
          <img className='mb-3' src={logo} alt="" />
          <p className='text-4xl font-extrabold -ml-3 '>Pro-Fast</p>
        </div>
      </Link>
    </div>
  )
}

export default ProFastLogo