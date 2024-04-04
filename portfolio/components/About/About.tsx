import { useEffect } from 'react';
import './About.css';

export default function About({ closeModal, hideModal }: { closeModal: () => void; hideModal: () => void }) {

    useEffect(() => {

        dragElement(document.getElementById("modal"));

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            const headerElement = document.getElementById(elmnt.id + "header");
            if (headerElement) {
                headerElement.onmousedown = dragMouseDown;
            } else {
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }, []);
    return (
        <div className="about" id='modal'>
            <div className='about-header'>
                <span>About me</span>
                <div className='buttons'> 
                    <div className='button' onClick={hideModal}>
                    🗕
                    </div>
                    <div className='button' onClick={closeModal}>
                    x
                    </div>
                </div>
            </div>
        </div>
    )
}