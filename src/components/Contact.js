import React from 'react'
import { links } from '../data'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div id='contact'>
            <div className="container relative w-10/12 min-h-screen md:min-h-[40vh] lg:min-h-[30vh] xl:min-h-[65vh] pt-12 xl:pt-20 mx-auto">

                <h2 className='text-4xl text-lumut'>Get in Touch With Me</h2>
                <div className="flex flex-col md:flex-row">
                    <div className='order-2 mt-4 md:order-1 md:flex-1 xl:ml-5'>
                        <ul>
                            {links.map((value, index) => (
                                <li className='py-4'>
                                    <a href={value.link} key={index} className="uppercase transition text-lumut hover:text-oren">{value.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='order 1 md:order-2 md:flex-1'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact