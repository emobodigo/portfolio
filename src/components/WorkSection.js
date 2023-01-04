import React from 'react'
import CarouselItem from './CarouselItem';
import CarouselContainer from './CarouselContainer';
import dragnethar from '../assets/image/porto/dragnethar.png';
import tso from '../assets/image/porto/tso.png';
import sinergi from '../assets/image/porto/sinergi.png';

const WorkSection = () => {
    return (
        <div id='work' className='py-6 my-8 overflow-hidden'>
            <div className="container w-10/12 mx-auto mb-6">
                <h2 className="text-xl font-semibold md:text-2xl text-lumut">My Latest Works</h2>
                <p className='text-sm text-lumut'>Explore my latest work to see my portfolio</p>
            </div>
            <div className='xl:ml-24'>
                <CarouselContainer>
                    <CarouselItem category={"Web Dev"} title={"Toko Sebelah Online"} pic={tso} />
                    <CarouselItem category={"Web Games"} title={"Dragnethar"} pic={dragnethar} />
                    <CarouselItem category={"Web Dev"} title={"Sinergi"} pic={sinergi} />
                    <CarouselItem category={"Hybrid App"} title={"Carolus"} pic={tso} />
                    <CarouselItem category={"Web Dev"} title={"Sinergi"} pic={dragnethar} />
                </CarouselContainer>
            </div>
        </div>
    )
}

export default WorkSection
