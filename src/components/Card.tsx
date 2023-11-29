import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { cn } from '../utils/cn';
import { faLock } from '@fortawesome/free-solid-svg-icons';
type CardProps = {
    topic: string;
    title: string;
    category?: string;
    img?: string;
    className?: string;
    solid?: boolean;
    lock?: boolean;
};
const Card = ({
    topic,
    title,
    category = 'READ',
    className,
    solid = false,
    img = 'https://i.natgeofe.com/n/e31be377-7b8e-43ab-b7f7-66e3a5dc8cab/Cool17_4x3.jpg?w=795&h=596.25',
    lock = false,
}: CardProps) => {
    return (
        <div className={cn(`relative w-full ${className} overflow-hidden`, solid && 'flex flex-col')}>
            <div className={cn('group peer absolute left-0 top-0 h-full w-full', solid && 'relative grow')}>
                <img
                    src={img}
                    alt={title}
                    className={cn('h-full w-full object-cover transition-all duration-300 group-hover:scale-110')}
                />
                {!solid && <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/90'></div>}
            </div>
            {/* Information */}
            <div
                className={cn(
                    'absolute bottom-4 left-4 text-left font-bold',
                    solid && 'relative bottom-0 left-0 h-auto w-full  bg-white p-4 text-black',
                )}
            >
                <p className=' font-medium uppercase'>
                    {' '}
                    {lock && <FontAwesomeIcon className='mr-1 text-yellow-400 ' icon={faLock} />} {topic}
                </p>
                <p className={cn('line-clamp-3 text-4xl font-semibold', solid && 'text-xl')}>{title}</p>
                <p className='mt-4 flex items-center gap-2 font-sans font-medium'>
                    <FontAwesomeIcon icon={faBars} />
                    {category}
                </p>
            </div>
        </div>
    );
};

export default Card;
