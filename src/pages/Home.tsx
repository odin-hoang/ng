import Card from '../components/Card';

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
            image: 'https://picsum.photos/250',
            topic: 'TRAVEL',
            title: 'Visit the French town from ‘All the Light We Cannot See‘',
        },
    ];
    return (
        <div className='bg-black text-white'>
            <div className='mx-auto text-center md:w-[1000px]'>
                <h1 className='uppercase'>Latest Stories</h1>
                <p>Subscribe for full access to read stories from National Geographic.</p>
                <div className='flex gap-10 '>
                    {/* Left side */}
                    <div className='w-1/3 shrink-0'>
                        <h2 className='border-l-[6px] border-yellow-400 py-0 pl-5 text-left text-3xl font-bold uppercase'>
                            Today's picks
                        </h2>
                        {todayPicks.map((post) => (
                            <div className='mt-8 flex gap-4 text-left font-bold'>
                                <div className='h-[90px] w-[90px] shrink-0'>
                                    <img src={post.image} alt='' className='h-full w-full object-cover' />
                                </div>
                                <div>
                                    <p className='uppercase'>{post.topic}</p>
                                    <p>{post.title}</p>
                                </div>
                            </div>
                        ))}
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
        </div>
    );
};

export default Home;
