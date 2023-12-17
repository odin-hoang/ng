import { useState } from 'react';
import { TfiAngleRight, TfiAngleLeft } from 'react-icons/tfi';
import CarouselItem from './CarouselItem';
export type CarouselData = {
    imageUrl: string;
    anchorLink: string;
};
export interface CarouselProps {
    items: CarouselData[];
}

const Carousel3D = ({ items }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(2);
    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1 < items.length ? prev + 1 : prev));
    };
    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
    };
    return (
        <div className='carousel-container relative h-[520px] w-[390px]'>
            {items.map((item, index) => (
                <CarouselItem key={index} index={index} activeIndex={activeIndex}>
                    <img src={item.imageUrl} alt='' className='h-full w-full object-cover' />
                </CarouselItem>
            ))}
            {activeIndex < items.length - 1 && (
                <button
                    className='absolute right-1/2 top-1/2 z-40 flex h-9 w-9 translate-x-[-200px] translate-y-[-50%] cursor-pointer items-center justify-center rounded-full  text-5xl opacity-75 transition duration-300 ease-in-out hover:opacity-100 sm:translate-x-[-250px] md:h-20 md:w-20 md:translate-x-[-350px] lg:translate-x-[-400px]'
                    onClick={handleNext}
                >
                    <TfiAngleLeft />
                </button>
            )}
            {activeIndex > 0 && (
                <button
                    className='absolute left-1/2 top-1/2 z-40 flex h-9 w-9 translate-x-[400px] translate-y-[-50%] cursor-pointer items-center justify-center rounded-full  text-5xl opacity-75 transition duration-300 ease-in-out hover:opacity-100 sm:translate-x-[250px] md:h-20 md:w-20 md:translate-x-[350px] lg:translate-x-[400px]'
                    onClick={handlePrev}
                >
                    <TfiAngleRight />
                </button>
            )}
        </div>
    );
};

export default Carousel3D;
