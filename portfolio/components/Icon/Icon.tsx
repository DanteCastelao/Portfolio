import React, { useState, useEffect } from 'react';
import './Icon.css';

type IconProps = {
    icon: string;
    text: string;
    onClick: () => void;
};

const Icon = ({ icon, text, onClick }: IconProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1700);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1700);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleDoubleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        if (isFocused) {
            setIsFocused(false);
        } else {
            setIsFocused(true);
        }
        onClick();
    };

    const displayIcon = isSmallScreen && (text === "Livestream" || text === "Music") ? { display: "none" } : {};

    return (
        <div
            className={`icon ${isFocused ? 'focused' : ''}`}
            tabIndex={0}
            onClick={handleDoubleClick}
            onBlur={() => setIsFocused(false)}
            style={displayIcon}
        >
            <img src={icon} alt="icon" />
            <span>{text}</span>
        </div>
    );
};

export default Icon;