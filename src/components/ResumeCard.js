import React from 'react'

const ResumeCard = ({ icon, color, label, description, secondaryLabel = false }) => {
    return (
        <div className="mt-4 xl:mt-0 lg:w-full">
            <div className="w-full h-20 grid grid-cols-[70px_1fr] shadow-md  justify-items-center items-center  bg-white rounded-lg">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-${color}`}>
                    {icon}
                </div>
                <div className="ml-4 justify-self-start">
                    <p className={`text-lg xl:text-sm font-semibold text-${color}`}>{label}</p>
                    <p className="text-sm text-gray-500 xl:text-xs">{description}</p>
                    {secondaryLabel && <p className='hidden text-gray-600 md:block text-md'>{secondaryLabel}</p>}
                </div>
            </div>
        </div>
    )
}

export default ResumeCard