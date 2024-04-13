import Button from '../../components/Button';

const Footer = () => {
    return (
        <footer className='mt-28 bg-black'>
            <div className='relative flex h-[302px] w-full flex-col  gap-4 bg-black text-center text-white'>
                <h1 className='z-10 mt-20 text-3xl tracking-widest'>
                    THE BEST OF NATIONAL GEOGRAPHIC DELIVERED TO YOUR INBOX
                </h1>
                <p className='z-10 mb-2 text-xl'>
                    Sign up for more inspiring photos, stories, and special offers from National Geographic.
                </p>
                <div className=''>
                    <Button type='reverse' className='z-10 scale-110 px-36 py-1'>
                        SIGN UP
                    </Button>
                </div>
                <div className='pointer-events-none absolute inset-0 z-0'>
                    <img src={'https://picsum.photos/1080'} alt='' className='h-full w-full object-cover' />
                </div>
            </div>
            <div className='min-h-screen '></div>
        </footer>
    );
};

export default Footer;
