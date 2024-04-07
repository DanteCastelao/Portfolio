import React, { useState } from 'react';
import './Icon.css';

type IconProps = {
    icon: string;
    text: string;
    onClick: () => void;
};

const Icon = ({ icon, text, onClick }: IconProps) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleDoubleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        if (isFocused) {
            setIsFocused(false);
        } else {
            setIsFocused(true);
        }
        onClick();
    };

    return (
        <div
            className={`icon ${isFocused ? 'focused' : ''}`}
            tabIndex={0}
            onClick={handleDoubleClick}
            onBlur={() => setIsFocused(false)}
        >
            <img src={icon} alt="icon" />
            <span>{text}</span>
        </div>
    );
};

export default Icon;
