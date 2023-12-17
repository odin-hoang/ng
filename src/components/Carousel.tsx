import React, { useRef, useState } from 'react';
import { cn } from '../lib/utils/cn';
import { Link } from 'react-router-dom';
import { TfiAngleRight, TfiAngleLeft } from 'react-icons/tfi';
const Carousel = () => {
    const data = [
        {
            imageUrl: 'https://i.natgeofe.com/n/5f17338e-7b2d-43d8-ade6-36cf0fee53ed/IAJ_400x600_2x3.jpg?w=500&h=750',
            username: 'David Smith',
            price: 120000,
            postedAt: '1 phút trước',
            zone: 'Hồ Chí Minh',
            name: 'Laptop gaming Acer Aspire 7 A715 76G 59MW',
            isUsed: false,
        },
        {
            imageUrl:
                'https://i.natgeofe.com/n/07e8a2fd-bb11-4546-a66d-c94fb7a5d1f1/TheMission_400x600_CLEAN_KeyArt_2x3.jpg?w=500&h=750',
            username: 'Todo Smith',
            price: 20890000,
            name: 'PC GVN x ASUS EVANGELION 2 (Intel i9-14900K/ VGA RTX 4090) (Powered by ASUS)',
            postedAt: '2 ngày trước',
            zone: 'Bà Rịa - Vũng Tàu',
        },
        {
            imageUrl:
                'https://i.natgeofe.com/n/c6446ff0-c2ea-477f-a1dd-084ed303bf19/Animals_Up_Close_400x600_2x3.jpg?w=500&h=750',
            username: 'Kelvin Smith',
            price: 35490000,
            postedAt: '5 phút trước',
            name: 'Laptop LG Gram 2023 14Z90R GAH53A5',
            zone: 'Thái Nguyên',
        },
        {
            imageUrl:
                'https://i.natgeofe.com/n/f07821c0-75b5-4581-b2ec-fccde8617b7e/SOTE_400x600_KEYART_CLEAN3_2x3.jpg?w=500&h=750',
            username: 'Kelvin Smith',
            price: 340000000,
            postedAt: '2 giờ trước',
            name: '[Hàng chính hãng] Bàn phím Dell KB216',
            zone: 'Hà Nội',
        },
        {
            imageUrl:
                'https://i.natgeofe.com/n/e6c1a89f-505a-47e5-8549-693c181915ab/TheTerritory_NG-Homepage_1920x2560_2x3.jpg?w=500&h=750',
            username: 'Kelvin Smith',
            price: 120000,
            postedAt: '1 tuần trước',
            name: 'Chuột Rapoo Gaming VT200 RGB',
            zone: 'Đà Nẵng',
        },
        {
            imageUrl:
                'https://i.natgeofe.com/n/a49d3ae5-5d36-4cdf-8492-a6eadc35fbff/NeverSayNever_400x600_CLEAN_2x3.jpg?w=500&h=750',
            username: 'Kelvin Smith',
            name: '[Hàng chính hãng] Bàn phím Dell KB216',
            price: 139000,
        },
        {
            imageUrl:
                'https://i.natgeofe.com/n/314eb90a-d130-47a1-9801-2c4dc403cab6/Sharkfest_400x600_2x3.jpg?w=500&h=750',
            username: 'Kelvin Smith',
            name: '[Hàng chính hãng] Bàn phím Dell KB216',
            price: 139000,
        },
    ];
    const carouselRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLAnchorElement>(null);
    const initialCursorState = {
        isDragging: false,
        startX: 0,
        startScrollLeft: 0,
    };
    const [cursor, setCursor] = useState(initialCursorState);
    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        // if isDragging is false return from here
        if (!cursor.isDragging) return;
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = cursor.startScrollLeft - (e.pageX - cursor.startX);
        }
    }
    function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
        setCursor((state) => ({
            ...state,
            isDragging: true,
            // Records the initial cursor and scroll position of the carousel
            startX: e.pageX,
            startScrollLeft: carouselRef.current?.scrollLeft || 0,
        }));
    }
    function handleMouseUp() {
        setCursor((state) => ({
            ...state,
            isDragging: false,
        }));
    }

    const handleSlide = (side: number) => {
        if (carouselRef.current && cardRef.current) {
            carouselRef.current.scrollLeft += side * cardRef.current?.offsetWidth;
        }
    };
    return (
        // I will change this width
        <div className='relative'>
            <div
                className={cn(
                    ' grid snap-x snap-mandatory auto-cols-[calc(100%/2-9px)] grid-flow-col items-center gap-4 overflow-hidden scroll-smooth md:auto-cols-[calc(100%/3-12px)] lg:auto-cols-[calc(100%/5-8px)]',
                    cursor.isDragging && ' scroll-auto',
                )}
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                ref={carouselRef}
            >
                {data.map((item, index) => (
                    <Link
                        to={'/'}
                        className={cn(
                            'flex snap-start flex-col rounded-sm  bg-white shadow-lg',
                            cursor.isDragging && 'cursor-grabbing select-none snap-align-none ',
                        )}
                        key={index}
                        draggable={false}
                        ref={cardRef}
                    >
                        <div className='overflow-hidden'>
                            <img src={item.imageUrl} alt='' className='h-[258px]' />
                        </div>
                    </Link>
                ))}
            </div>

            <div
                className='text-primary-default active:text-primary-900 absolute -right-10 top-[50%] z-10 translate-y-[-50%] cursor-pointer rounded-full p-2 text-2xl shadow-lg'
                onClick={() => handleSlide(1)}
            >
                <TfiAngleRight />
            </div>

            <div
                className='text-primary-default active:text-primary-900 absolute -left-10  top-[50%] z-10 translate-y-[-50%] cursor-pointer rounded-full p-2 text-2xl shadow-lg'
                onClick={() => handleSlide(-1)}
            >
                <TfiAngleLeft />
            </div>
        </div>
    );
};

export default Carousel;
