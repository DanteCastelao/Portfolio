import './Icon.css';

type IconProps = {
    icon: string;
    text: string;
    onClick: () => void;
};

const Icon = ({ icon, text, onClick }: IconProps) => {
    return (
        <div className="icon" onClick={onClick}>
            <img src={icon} alt="icon" />
            <span>{text}</span>
        </div>
    );
};

export default Icon;