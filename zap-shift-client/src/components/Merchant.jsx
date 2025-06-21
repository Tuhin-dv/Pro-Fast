import React from 'react'
import location from '../assets/delivey/location-merchant.png'
function Merchant() {
    return (
        <div>
            <div className='flex gap-11 bg-[#03373D] bg-[url("public/be-a-merchant-bg.png")] bg-no-repeat mt-20 p-20 rounded-3xl'>
                <div className='flex-1 text-white'>
                    <h1 className='text-[40px] font-extrabold'>Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className='mt-4 mb-8'>
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className='flex gap-4'>
                        <button className='bg-[#CAEB66] font-bold text-xl rounded-full py-4 text-black px-8'>Become a Merchant</button>
                        <button className=' border border-[#CAEB66] text-[#CAEB66] btn-outline font-bold text-xl rounded-full py-4  px-8'>Become a Merchant</button>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src={location} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Merchant