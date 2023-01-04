import { IoLogoWhatsapp } from "react-icons/io";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { links } from '../data/index';
const Navbar = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="fixed top-0 left-0 z-50 w-full bg-abu py-7 md:relative">
            <div className="container flex items-center justify-between w-10/12 mx-auto text-lumut">
                <div className="text-2xl font-lobster">Djohan</div>
                <div className="hidden w-6/12 tracking-tight md:flex justify-evenly ">
                    {
                        links.map((value, index) => (
                            <a href={value.link} key={index} className="uppercase transition hover:text-oren">{value.name}</a>
                        ))
                    }
                </div>
                <div className="items-center hidden md:flex">
                    <div className="px-2 tracking-widest decor-link">+6282143166721</div>
                    <IoLogoWhatsapp className="ml-4 text-2xl" />
                </div>
                <div className="flex items-center md:hidden">
                    <RiBarChartHorizontalLine className="p-1 text-4xl bg-white border-2 border-transparent rounded-full" onClick={() => setShow(true)} />
                </div>
            </div>
            <div className={`md:hidden absolute h-screen w-full top-0 z-50 ${show ? '-translate-x-0' : '-translate-x-full'} transition duration-300`}>
                <div className="relative flex flex-col items-center justify-center h-screen bg-lumut">
                    <MdClose onClick={() => setShow(false)} className="absolute text-4xl top-6 right-6 text-abu" />
                    {
                        links.map((value, index) => (
                            <a href={value.link} key={index} onClick={() => setShow(false)} className="block pb-10 text-xl font-semibold uppercase text-oren">{value.name}</a>
                        ))
                    }
                    <div className="absolute flex font-semibold left-2/4 -translate-x-2/4 bottom-12 text-oren md:hidden">
                        <div className="px-2 tracking-widest decor-link">+6282143166721</div>
                        <IoLogoWhatsapp className="ml-4 text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
