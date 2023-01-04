import React from 'react'

const CardService = ({ icon, title, number, bgColor }) => {
    return (
        <div className="w-full hover:shadow-2xl md:h-28 md:mt-8 content-center bg-abu h-20 shadow-lg rounded-lg grid grid-cols-[70px_1fr] xl:grid-cols-[120px_1fr] mt-5">
            <div className={`flex items-center justify-center w-12 h-12 rounded-full place-self-center ${bgColor}`}>
                {icon}
            </div>
            <div className="self-center ml-2">
                <p className="text-lg font-semibold text-lumut">{title}</p>
                <p className="text-sm text-lumut">{number} Projects</p>
            </div>
        </div>
    )
}

export default CardService
