import React from 'react';
import Button from './Button';
export interface ItemProps {
    children: React.ReactNode;
    index: number;
    activeIndex: number;
}
const CarouselItem = ({ children, index, activeIndex }: ItemProps) => {
    const offset = (index - activeIndex) / 4;
    const direction = Math.sign(index - activeIndex);
    const obsOffset = Math.abs(offset);

    const cssTransformProperties = `
        rotateY(calc(${offset} * 60deg ))
        scaleY(calc(1 + ${obsOffset} * -0.5))
        translateX(calc(${direction} * -7.5rem))
        translateZ(calc(${obsOffset} * -20rem))
    `;
    const cssOpacity = `
        ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}
    `;
    const cssDisplay = `
        ${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'}
    `;

    return (
        <div
            className='absolute h-full w-full  cursor-pointer overflow-hidden transition-all duration-700'
            style={{ transform: cssTransformProperties, opacity: cssOpacity, display: cssDisplay }}
        >
            <div className='relative h-full w-full'>
                {children}

                <div
                    className='absolute inset-0 h-full w-full  bg-black/40 opacity-0 transition-all'
                    style={{ opacity: index === activeIndex ? 0 : 1 }}
                ></div>
                <Button type='reverse' className='absolute bottom-10 left-[50%] translate-x-[-50%]'>
                    WATCH NOW
                </Button>
            </div>
        </div>
    );
};

export default CarouselItem;
