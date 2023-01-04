import React from 'react'
import { GrSend } from "react-icons/gr";

const ContactForm = () => {
    return (
        <div>
            <input type="email" placeholder='Your email...' className='block w-full px-3 py-3 mt-5 border-2 rounded-md shadow-md border-[#F26441] bg-abu focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' autoComplete='email' />
            <textarea name="message" id="message" rows="5" className='block w-full px-3 py-3 mt-5 border-2 border-[#F26441] rounded-md shadow-md bg-abu focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' placeholder='Hit me up...'></textarea>
            <div className="flex justify-end w-full">
                <div className="flex items-center justify-center mt-6 text-white rounded-full w-28 lg:w-32 h-11 hover:bg-green-700 hover:animate-pulse bg-tomato">
                    <span className="mr-2 text-md">Submit</span>
                    <GrSend className="text-xl text-white" />
                </div>
            </div>
        </div>
    )
}

export default ContactForm