import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/Button';
import Card from '../components/Card';
import { faCirclePause, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import Carousel from '../components/Carousel';
import Carousel3D, { CarouselData } from '../components/Carousel3D';

const Home = () => {
    const todayPicks = [
        {
            image: 'https://i.natgeofe.com/n/1a0d3356-df87-41f0-ba4a-31242ab7954b/NationalGeographic_2769934_square.jpg?w=243.75&h=243.75',
            topic: 'SCIENCE',
            title: 'What does your skin actually need?',
        },
        {
            image: 'https://picsum.photos/200',
            topic: 'travel',
            title: 'This Tuscan spa town offers ancient history and healing waters',
        },
        {
            image: 'https://picsum.photos/300',
            topic: 'ANIMALS',
            title: 'The Miami tiger beetle is the 15,000th species in the Photo Ark',
        },
        {
            image: 'https://picsum.photos/400',
            topic: 'ENVIRONMENT',
            title: 'What is El Niño?',
        },
        {
            image: 'https://picsum.photos/100',
            topic: 'SCIENCE',
            title: 'Frozen shoulder is a real condition—and it mostly affects women',
        },
        {
            image: 'https://picsum.photos/50',
            topic: 'TRAVEL',
            title: 'Visit the French town from ‘All the Light We Cannot See‘',
        },
    ];
    // GET data from server
    const NATGeoTV: CarouselData[] = [
        { imageUrl: 'https://picsum.photos/520', anchorLink: 'https://picsum.photos/' },
        { imageUrl: 'https://picsum.photos/521', anchorLink: 'https://picsum.photos/' },
        { imageUrl: 'https://picsum.photos/522', anchorLink: 'https://picsum.photos/' },
        { imageUrl: 'https://picsum.photos/523', anchorLink: 'https://picsum.photos/' },
        { imageUrl: 'https://picsum.photos/524', anchorLink: 'https://picsum.photos/' },
        { imageUrl: 'https://picsum.photos/525', anchorLink: 'https://picsum.photos/' },
    ];
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlay, setIsPlay] = useState(true);
    const handlePlayVideo = () => {
        setIsPlay(!isPlay);
        isPlay ? videoRef.current?.pause() : videoRef.current?.play();
    };
    return (
        <div className='bg-black text-white'>
            <div className='mx-auto pt-24 text-center md:w-[1000px]'>
                <h1 className='text-6xl font-medium uppercase tracking-wide'>Latest Stories</h1>
                <div className='underline-block relative mt-5 text-lg '>
                    <Button type='slide-button-up' className=' text-white'>
                        Subscribe
                    </Button>{' '}
                    <span>for full access to read stories from National Geographic.</span>
                </div>
                <div className='mt-20 flex gap-10'>
                    {/* Left side */}
                    <div className='w-1/3 shrink-0'>
                        <h2 className='border-l-[6px] border-yellow-400 py-0 pl-5 text-left text-3xl font-bold uppercase'>
                            Today's picks
                        </h2>
                        {todayPicks.map((post, index) => (
                            <div className='mt-8 flex gap-4 text-left font-bold' key={index}>
                                <div className='h-[90px] w-[90px] shrink-0'>
                                    <img src={post.image} alt='' className='h-full w-full object-cover' />
                                </div>
                                <div>
                                    <p className='uppercase'>{post.topic}</p>
                                    <p>{post.title}</p>
                                </div>
                            </div>
                        ))}
                        <div className='mt-10 flex'>
                            <Button type='slide-button-up' className='font-bold'>
                                SEE MORE
                            </Button>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className='flex w-full flex-col gap-10'>
                        <Card
                            className='h-1/2'
                            topic='travel'
                            title='The 30 most exciting destinations to visit in 2024'
                        ></Card>
                        <div className='flex h-1/2 gap-10'>
                            <Card
                                solid
                                lock
                                topic='travel'
                                title="This 'Gate to Hell' has burned for decades. Will we ever shut it?"
                                img='https://th.bing.com/th/id/OIP.kr2gjaALIbZLKZrCPir-YAHaE0?rs=1&pid=ImgDetMain'
                            ></Card>
                            <Card
                                solid
                                topic='travel'
                                title='Full humpback birth witnessed by scientists for first time ever'
                                img='https://th.bing.com/th/id/OIP.7qtxO76jvR6P0jsJu8-XNAHaE8?rs=1&pid=ImgDetMain'
                            ></Card>
                        </div>
                    </div>
                </div>
            </div>
            {/* Video background */}
            <div className='relative mt-20 h-[40rem] overflow-hidden'>
                <video loop muted autoPlay className=' w-full' ref={videoRef}>
                    <source src='src\assets\animals_bg_video_480p.mp4' type='video/mp4' />
                    {/* <source src='src\assets\animals_bg_video.mp4' type='video/mp4' /> */}
                </video>
                <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/95 from-10% '></div>
                {!isPlay && <div className='absolute left-0 top-0 h-full w-full bg-black/30 '></div>}

                {isPlay ? (
                    <FontAwesomeIcon
                        icon={faCirclePause}
                        className='absolute left-4 top-4 cursor-pointer text-5xl text-black/80'
                        onClick={handlePlayVideo}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faCirclePlay}
                        className='absolute left-4 top-4 cursor-pointer text-5xl text-black/80'
                        onClick={handlePlayVideo}
                    />
                )}
                {/* Content */}
                <div className='absolute bottom-28 left-[50%] translate-x-[-50%]'>
                    <h2 className='mb-6 text-center text-xl font-bold'>INCREDIBLE ANIMAL JOURNEYS</h2>
                    <p className='mb-6 text-center text-lg'>
                        We might think we are the world’s greatest explorers, but we’re not. Millions of animals migrate
                        across our planet daily using routes passed down through generations.{' '}
                        <span className='font-bold'>INCREDIBLE ANIMAL JOURNEYS</span> puts us in the action as they
                        soar, fly and swim from the Antarctic to the African savanna and the Pacific Ocean to Alaska.
                    </p>
                    <div className='text-center'>
                        <Button type='slide-button-up' className='font-bold'>
                            STREAM NOW
                        </Button>
                    </div>
                </div>
            </div>
            {/* Discover more */}
            <div className='mx-auto text-center md:w-[900px]'>
                <div className=' flex items-center justify-between tracking-wider'>
                    <h2 className='font-bold'>DISCOVER MORE ON DISNEY+</h2>
                    <Button type='slide-button-up' className=' font-bold'>
                        SEE SHOWS
                    </Button>
                </div>
                {/* Slider Wrapper */}
                <div className='mt-6 w-full'>
                    <Carousel />
                </div>
            </div>
            {/* NAT GEO TV */}
            <div className='p-48'>
                <h1 className=' underline-block relative text-center text-6xl'>NAT GEO TV</h1>
            </div>

            <div className='flex w-full flex-1 flex-col items-center justify-center space-y-6 px-20'>
                <Carousel3D items={NATGeoTV} />
            </div>
        </div>
    );
};

export default Home;
