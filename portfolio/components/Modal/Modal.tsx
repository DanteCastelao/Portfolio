import React, { useEffect, useState } from 'react';
import './Modal.css';

interface ModalProps {
    id: string;
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
    onMinimize?: () => void;
    initialPosition?: { right: number; bottom: number};
}

const Modal: React.FC<ModalProps> = ({ id, show, onClose, children, title, onMinimize, initialPosition }) => {
    const [modalStyle, setModalStyle] = useState<React.CSSProperties>({ zIndex: 1 });
    const [zIndex, setZIndex] = useState<number>(1);
    const [modalOrder, setModalOrder] = useState<string[]>([]);

    useEffect(() => {
        const storedPosition = localStorage.getItem(id);
        if (storedPosition) {
            setModalStyle(JSON.parse(storedPosition));
        } else if (initialPosition) {
            setModalStyle({ ...initialPosition, zIndex });
        }
    }, [id, initialPosition, zIndex]);

    useEffect(() => {
        if (!show) return;

        const dragElement = (el: HTMLElement) => {
            let pos1 = 0,
                pos2 = 0,
                pos3 = 0,
                pos4 = 0;

            el.onmousedown = dragMouseDown;

            function dragMouseDown(e: MouseEvent) {
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
                updateModalOrder(id);
            }

            function elementDrag(e: MouseEvent) {
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                el.style.top = el.offsetTop - pos2 + 'px';
                el.style.left = el.offsetLeft - pos1 + 'px';
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
                const newStyle: React.CSSProperties = {
                    top: el.offsetTop - pos2 + 'px',
                    left: el.offsetLeft - pos1 + 'px',
                    position: 'absolute',
                    zIndex
                };
                setModalStyle(newStyle);
                localStorage.setItem(id, JSON.stringify(newStyle));
            }
        };

        const modalElement = document.getElementById(id);
        if (modalElement) {
            dragElement(modalElement);
            updateModalOrder(id);
        }
    }, [id, show, zIndex]);

    useEffect(() => {
        const handleUnload = () => {
            localStorage.removeItem(id);
            removeFromModalOrder(id);
        };

        window.addEventListener('beforeunload', handleUnload);

        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, [id]);

    const handleClose = () => {
        onClose();
        localStorage.removeItem(id);
        removeFromModalOrder(id);
    };

    const updateModalOrder = (modalId: string) => {
        setModalOrder(prevOrder => {
            const newOrder = prevOrder.filter(id => id !== modalId);
            newOrder.push(modalId);
            return newOrder;
        });

        setZIndex(prevZIndex => prevZIndex + 1);
    };

    const removeFromModalOrder = (modalId: string) => {
        setModalOrder(prevOrder => prevOrder.filter(id => id !== modalId));
    };

    return (
        <div className="modal-overlay" id={id} style={show ? modalStyle : { display: 'none' }}>
            <div className="modal-header-container">
                <div className="modal-header">
                    <div className='header-title'>
                        {title}
                    </div>
                    <div className='buttons'>
                        <div className='button' onClick={onMinimize}>
                            🗕
                        </div>
                        <div className='button' onClick={handleClose}>
                            x
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
};

export default Modal;
