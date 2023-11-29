type ButtonProps = {
    children: string;
};
const Button = ({ children }: ButtonProps) => {
    return <button className='uppercase'>{children}</button>;
};

export default Button;
