import { useState, useEffect } from 'react';
import Profile from '../assets/image/profile.png';
import { HiOutlineSpeakerphone } from "react-icons/hi";
import StackDisplay from './StackDisplay';
const Hero = () => {
    const [experience, setExperience] = useState(0);

    const getDateInDay = (date1, date2) => {
        const utc1 = Date.UTC(
            date1.getFullYear(),
            date1.getMonth(),
            date1.getDate()
        );
        const utc2 = Date.UTC(
            date2.getFullYear(),
            date2.getMonth(),
            date2.getDate()
        );
        let days = Math.abs(Math.round((utc2 - utc1) / (1000 * 60 * 60 * 24)));
        return Math.abs(Math.round(days / 365.25));
    };

    useEffect(() => {
        let firstWork = new Date("2020/07/13");
        let currentDate = new Date();
        let newDate = getDateInDay(currentDate, firstWork);
        setExperience(newDate);
    }, [])

    return (
        <div className="relative h-screen py-5 md:h-[92vh] bg-abu md:pt-16 lg:pt-20 xl:pt-14">
            <div className="container relative w-10/12 mx-auto">
                <div className="md:flex md:justify-between">
                    <h1 className="text-3xl font-semibold tracking-wide lg:text-5xl md:text-4xl text-lumut">Hey There, <br /> I'am Djohansyah</h1>
                    <p className="mt-4 text-lg md:hidden md:mt-0 text-lumut md:w-2/6">I am a Fullstack Developer. I develop Backend, Frontend, and Hybrid Mobile Apps</p>
                    <div className='items-center hidden text-right md:flex'>
                        <span className='text-xl uppercase lg:text-2xl'>Years <br />Experience</span>
                        <span className='ml-4 text-6xl font-semibold lg:text-7xl text-lumut'>{experience}</span>
                    </div>
                </div>
                <div className="hidden pt-20 lg:pt-32 xl:pt-16 md:flex md:justify-between">
                    <div className='w-2/4 xl:w-1/4'>
                        <h1 className="text-2xl font-semibold tracking-wide xl:text-xl text-lumut">Technology Stacks</h1>
                        <div className="grid grid-cols-3 gap-3 mt-5">
                            <StackDisplay heroMode={true} />
                        </div>
                    </div>
                    <div className="w-2/4 xl:w-2/6">
                        <div className="flex group">
                            <div className="w-full h-20 p-4 mt-6 ml-8 text-lg text-center group-hover:animate-pulse group-hover:shadow-xl transition duration-300 bg-white shadow-md xl:mt-0 xl:text-xl xl:ml-12 lg:h-24 lg:text-2xl rounded-l-3xl rounded-tr-3xl rounded-br-md text-lumut">
                                I am a Fullstack Developer.
                            </div>
                            <div className='flex items-center self-end justify-center w-10 h-10 p-2 mt-6 ml-1 bg-white rounded-full lg:w-12 lg:h-12'>
                                <HiOutlineSpeakerphone className='text-5xl text-lumut scale-x-[-1]' />
                            </div>
                        </div>
                        <p className='text-xl lg:text-2xl font-semibold absolute bottom-0 xl:rotate-0 xl:relative xl:pt-32 xl:right-0 xl:text-right xl:text-lg -right-[100px] rotate-[270deg] text-lumut'>djohans33@gmail.com</p>
                    </div>
                </div>
            </div >

            <div className="fancy-border w-72 h-72 md:w-3/6 md:h-3/6 xl:w-2/6 xl:h-4/6 bottom-5"></div>
            <img className='absolute bottom-0 z-10 left-2/4 -translate-x-2/4 h-3/4 xl:h-full' src={Profile} alt='profile' />
        </div>

    )
}

export default Hero
