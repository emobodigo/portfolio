import React from 'react'


const CarouselItem = ({ category, title, pic }) => {
    return (
        <div className='relative h-64 ml-3 overflow-hidden cursor-pointer group xl:ml-4 xl:h-72 lg:ml-6 md:h-96 w-12/12 rounded-2xl'>
            <p className='absolute z-40 px-2 py-1 text-base font-semibold text-white rounded-r-full opacity-100 opacity-8 bg-lumut xl:text-base md:text-2xl lg:text-4xl top-4 lg:top-6 '>{category}</p>
            <p className='absolute z-40 px-2 mt-2 text-sm text-white rounded-r-full xl:mt-1 md:mt-3 opacity-8 bg-oren xl:text-base xl:top-14 md:text-xl lg:text-3xl md:top-12 lg:top-16 top-10 '>{title}</p>
            <img className='object-contain transition duration-[3000ms] group-hover:-translate-y-[65%]' src={pic} alt='pic-porto' />
        </div>
    )
}

export default CarouselItem
