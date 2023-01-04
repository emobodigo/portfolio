const StackIcon = ({ image, alt }) => {
    return (
        <div className="w-14 h-14 hover:animate-bounce md:w-20 md:h-20 hover:shadow-2xl hover:border-2 hover:border-dotted hover:border-t-lumut hover:border-b-oren hover:border-r-lumut hover:border-l-oren transition duration-300 bg-white border-transparent rounded-full shadow-md xl:h-16 xl:w-16 lg:h-28 lg:w-28">
            <img src={image} className='object-cover w-full h-full p-2' alt={alt} />
        </div>
    )
}

export default StackIcon
