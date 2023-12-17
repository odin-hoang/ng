type ButtonProps = {
    type?: 'slide-button' | 'slide-button-up' | 'reverse';
    children: string;
    className?: string;
};
const Button = ({ children, type = 'slide-button', className }: ButtonProps) => {
    return (
        <div className='inline-block'>
            <button className={`${type} ${className}`}>
                <span>{children}</span>
            </button>
        </div>
    );
};

export default Button;
