import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { logo } from '../../assets/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons/faAngleDoubleDown';
const Header = () => {
    return (
        <div className='flex items-center justify-between px-4 py-1 '>
            {/* Logo */}
            <div className=''>
                <img src={logo} alt='logo' className='' />
            </div>
            {/* Navbar */}
            <div className='flex h-10 items-center gap-4'>
                <p className='uppercase'>Login</p>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                <Button type='slide-button-up' className='p-0 font-normal'>
                    Newsletters
                </Button>
                <Button>SUBSCRIBE</Button>
                <p className='uppercase'>
                    Menu <FontAwesomeIcon icon={faAngleDoubleDown} />
                </p>
            </div>
        </div>
    );
};

export default Header;
