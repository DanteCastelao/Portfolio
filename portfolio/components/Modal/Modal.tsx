import React, { useEffect } from 'react';
import './Modal.css';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
    onMinimize?: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children, title, onMinimize }) => {
    if (!show) {
        return null;
    }

    useEffect(() => {
        dragElement(document.getElementById("modal"));

        function dragElement(elmnt: HTMLElement | null) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            const headerElement = elmnt ? document.getElementById(elmnt.id + "header") : null;
            if (headerElement) {
                headerElement.onmousedown = dragMouseDown;
            } else if (elmnt) {
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e: MouseEvent | undefined) {
                e = e as MouseEvent; // Cast the event type to MouseEvent
                if (e) {
                    e.preventDefault();
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    document.onmousemove = elementDrag;
                }
            }
        
            function elementDrag(e: MouseEvent | undefined) {
                e = e as MouseEvent;
                e.preventDefault();
                if (elmnt) {
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                }
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }, []);

    return (
        <div className="modal-overlay" id='modal'>
            <div className="modal-header-container">
                <div className="modal-header">
                    <div className='header-title'>
                        {title}
                    </div>
                    <div className='buttons'>
                        <div className='button' onClick={onMinimize}>
                            🗕
                        </div>
                        <div className='button' onClick={onClose}>
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
