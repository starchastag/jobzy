import React from 'react'
import { FaEnvelope, FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"
const NewsLater = () => {
    return (
        <div>
            <div>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaEnvelopeOpenText />  Subscribe for job notification</h3>
                <p className='text-primary/75 text-base mb-4'>Enter your e-mail and get update daily new job post on the based of your resume/CV</p>
                <div className='w-full space-y-4'>
                    <input type="email" name='email' id='email' placeholder='rojers6386@gmail.com' className='w-full block py-2 pl-3 border focus:outline-none ' />
                    <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none  bg-blue rounded-sm text-white cursor-pointer font-semibold' />
                </div>
            </div>
{/* second badge */}
            <div className='mt-20'>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaRocket />  
                    Get notice faster</h3>
                <p className='text-primary/75 text-base mb-4'>Enter your e-mail and get update daily new job post on the based of your resume/CV</p>

                <div className='w-full space-y-4'>
                    <input type="submit" value={"Upload your cv or resume"} className='w-full block py-2 pl-3 border focus:outline-none  bg-blue rounded-sm text-white cursor-pointer font-semibold' />
                </div>

              
            </div>
        </div>
    )
}

export default NewsLater
