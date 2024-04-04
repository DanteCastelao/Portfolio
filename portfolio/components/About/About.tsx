import { useEffect } from 'react';
import './About.css';
import notepadIcon from '../../assets/notepadicon.png';

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
            <div className='header-container'>
                <div className='about-header'>
                    <div className='header-title'>  
                        <img src={notepadIcon}></img>
                        <span>About me - Dante Castelao</span>
                    </div>
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
            <div className='about-container'>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus lorem, commodo vitae purus et, semper imperdiet eros. Curabitur viverra congue imperdiet. Aenean quis eros eu orci accumsan scelerisque ut sit amet sapien. Quisque eget viverra ex. Vestibulum mollis, nunc quis faucibus iaculis, dolor nulla accumsan ante, eget molestie dolor neque id eros. Cras eget nulla pretium tortor commodo sagittis ut ut quam. Donec fringilla sagittis varius. Maecenas nec nisl eget nulla posuere posuere. Nulla ac tempus ex, at ornare tortor. Vestibulum at mauris molestie, ullamcorper mauris vitae, blandit ipsum. Maecenas elementum odio in elit aliquam vestibulum. Curabitur sodales enim ut diam pellentesque laoreet. Phasellus accumsan magna diam, in ultricies lorem interdum euismod. Etiam semper tortor neque, sit amet varius arcu volutpat et. Fusce aliquet nibh interdum urna tempus eleifend. Aenean eget hendrerit urna, ac aliquet quam.

Duis et felis non turpis tristique hendrerit eu vel turpis. Nam rhoncus semper vehicula. Etiam sollicitudin orci ullamcorper nisi tristique sodales. Aenean lectus orci, tincidunt non porttitor quis, consequat et ipsum. Pellentesque eleifend libero non quam rutrum finibus. In varius magna non eleifend sagittis. Etiam tempor odio lobortis condimentum ultrices. Duis commodo placerat purus, nec pulvinar magna cursus nec. Nunc lacinia ante in mauris efficitur ultrices. Aenean vitae faucibus erat. Maecenas in erat neque. In non leo eu velit tincidunt congue sed nec lacus. Nam feugiat mattis efficitur. Maecenas cursus rhoncus pellentesque.

Nulla pharetra mollis sem, eu ullamcorper felis malesuada id. Fusce non erat fermentum, facilisis orci eu, euismod tortor. Mauris nec dictum odio, pretium bibendum mi. Suspendisse vel mi vel nulla semper sagittis in vel est. Cras tincidunt ante nec consequat hendrerit. Mauris interdum eleifend est in imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vulputate, leo a porta elementum, risus nisl vehicula ipsum, at varius nibh leo et velit. Morbi vitae libero quis eros tempus eleifend. Integer eu nisi neque. Sed blandit accumsan justo. Suspendisse id lacus accumsan felis tincidunt blandit. Aliquam lorem risus, rutrum vitae est id, fermentum scelerisque lacus. Curabitur nec mi a ipsum maximus placerat. Vivamus sollicitudin risus massa, cursus finibus eros feugiat sit amet. Duis aliquet velit turpis, vitae auctor ligula rhoncus eget.

Phasellus eu ullamcorper nunc, non efficitur sem. Suspendisse potenti. Praesent tempor, dolor at maximus tristique, urna ipsum finibus tortor, id finibus ligula massa a tellus. Donec rhoncus orci dapibus, porttitor ante vitae, ultricies erat. Suspendisse potenti. Aliquam erat volutpat. Donec enim metus, dictum in venenatis non, imperdiet sodales risus. Ut a sollicitudin risus, ac lobortis metus. Vivamus interdum dui in risus aliquam egestas.

Vivamus ullamcorper sit amet massa ut placerat. Donec bibendum ac arcu ut rutrum. Aenean leo orci, posuere sed nulla quis, rutrum pretium leo. Praesent elementum euismod nulla eu posuere. Vestibulum a nisl scelerisque, dictum arcu vitae, venenatis dui. In efficitur tincidunt pretium. Cras semper luctus elit, sit amet mattis mauris auctor vel. Nulla ut interdum nunc. Donec a dictum felis. Nunc lorem dolor, malesuada dictum fermentum eu, commodo ut risus. Vivamus dignissim lorem nec odio ultricies, at accumsan massa congue.</span>
            </div>
        </div>
    )
}