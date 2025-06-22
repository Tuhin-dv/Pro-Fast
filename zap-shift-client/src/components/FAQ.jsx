import React from 'react'

function FAQ() {
    return (
        <div className='px-[150px]'>
            <div className='text-center'>
                <h1 className='text-[40px] font-extrabold text-[#03373D]'>Frequently Asked Question (FAQ)</h1>
                <p className='text-[#606060] mt-3 mb-10'>Enhance posture, mobility, <br /> and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <div className='flex flex-col gap-3'>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-2xl font-semibold">How does this posture corrector work?</div>
                    <div className="collapse-content pt-2 bg-lime-100  text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-2xl font-semibold">Does it really help with back pain and posture improvement?</div>
                    <div className="collapse-content pt-2 bg-lime-100 text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email. A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-2xl font-semibold">Does it have smart features like vibration alerts?</div> 
                    <div className="collapse-content pt-2  bg-lime-100 text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.  encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-2xl  font-semibold">How do I update my profile information?</div>
                    <div className="collapse-content pt-2 bg-lime-100 text-sm"> A posture corrector works by providing support and gentle alignment to your shoulders Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-2xl font-semibold">How will I be notified when the product is back in stock?</div>
                    <div className="collapse-content pt-2 bg-lime-100 text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
            </div>
        </div>
    )
}

export default FAQ