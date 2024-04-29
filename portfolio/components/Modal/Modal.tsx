import React, { useEffect, useState } from 'react';
import './Modal.css';
import Draggable from 'react-draggable';

interface ModalProps {
    id: any;
    show: boolean;
    onClose: () => void;
    onMinimize: () => void;
    children: React.ReactNode;
    title: string;
    icon: string;
    initialPosition?: { left: number; top: number };
    onModalClick: (id: string) => void;
    style: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({
    id,
    show,
    onClose,
    onMinimize,
    children,
    title,
    icon,
    initialPosition,
    onModalClick,
    style
}) => {
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

    useEffect(() => {
        onModalClick(id);
    }, [show]);

    const displayStyle = isSmallScreen && (title === "Livestream" || title === "Music") ? { display: "none" } : {};

    return (
        <Draggable
            axis="both"
            handle=".modal-header"
            defaultPosition={{ x: initialPosition?.left ?? 0, y: initialPosition?.top ?? 0 }}
            scale={1}
            >
                <div className="modal-overlay" style={{ ...style, ...displayStyle }} onClick={() => onModalClick(id)}>
                    <div className="modal-header-container">
                        <div className="modal-header">
                            <div className="header-title">
                                <img src={icon} alt="icon" />
                                {title}
                            </div>
                            <div className="buttons">
                                <div className="button" onClick={onMinimize}>
                                    _ 
                                </div>
                                <div className="button" onClick={onClose}>
                                    x
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-content">{children}</div>
                </div>
        </Draggable>
    );
};

export default Modal;
