import React from 'react'

const Footer = () => {

    return (
        <div className='border-t-2 border-gray-400 bg-abu'>
            <div className='container flex items-center justify-center w-10/12 h-16 mx-auto md:justify-between '>
                <div>
                    <p className="inline text-2xl font-lobster text-lumut">Djohan |</p>
                    <span className="text-md text-lumut">&copy;{new Date().getFullYear()} All Right Reserved</span>
                </div>
                <div>

                </div>
            </div>
        </div>

    )
}

export default Footer