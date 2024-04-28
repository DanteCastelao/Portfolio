import { useState, useEffect } from 'react';
import './TaskBar.css';
import win95logo from '../../assets/win95logo.png';
import Menu from '../Menu/Menu';
import Modal from '../Modal/Modal'; 
import notepadIcon from '../../assets/notepadicon.png';
import musicIcon from '../../assets/musicIcon.png';
import livestreamIcon from '../../assets/livestreamIcon.png';
import Livestream from '../Livestream/Livestream';
import About from '../About/About';
import Music from '../Music/Music';
import Icon from '../Icon/Icon';
import Nomore from '../Nomore/Nomore';
import Agorar from '../Agorar/Agorar';
import Veigarv2 from '../Veigarv2/Veigarv2';
import agorarIcon from '../../assets/agorarIcon.png';
import nomoreIcon from '../../assets/nomoreIcon.png';
import veigarv2Icon from '../../assets/veigarv2Icon.png';

export default function TaskBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentHour, setCurrentHour] = useState('');
    const [modals, setModals] = useState({
        about: false,
        livestream: true,
        music: true,
        nomore: false,
        agorar: false,
        veigarv2: false
    });
    const [modalsTabs, setModalsTabs] = useState({
        about: false,
        livestream: true,
        music: true,
        nomore: false,
        agorar: false,
        veigarv2: false
    });
    const [modalPositions] = useState({
        about: { left: 150, top: 75 },
        livestream: { left: 50, top: 100 },
        music: { left: 50, top: 400 },
        nomore: { left: 150, top: 75 },
        agorar: { left: 150, top: 75 },
        veigarv2: { left: 150, top: 75 }
    });
    const [modalOrder, setModalOrder] = useState<('about' | 'livestream' | 'music' | 'nomore' | 'agorar' | 'veigarv2')[]>([]);

    useEffect(() => {
        const initialOrder = Object.keys(modals).filter(key => modals[key as keyof typeof modals]);
        setModalOrder(initialOrder as ('about' | 'livestream' | 'music' | 'nomore' | 'agorar' | 'veigarv2')[]);
    }, []);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const openModal = (modalName: keyof typeof modals) => {
        setModals(prevState => ({
            ...prevState,
            [modalName]: true
        }));
        setModalsTabs(prevState => ({
            ...prevState,
            [modalName]: true
        }));
        setMenuOpen(false);
        handleModalClick(modalName);
    };
    
    const toggleModal = (modalName: keyof typeof modals) => {
        setModals(prevState => ({
            ...prevState,
            [modalName]: !prevState[modalName]
        }));
        setMenuOpen(false);
        handleModalClick(modalName);
    };

    const handleCloseModal = (modalName: keyof typeof modals) => {
        setModals(prevState => ({
            ...prevState,
            [modalName]: false
        }));
        setModalsTabs(prevState => ({
            ...prevState,
            [modalName]: false
        }));
    };

    const handleModalClick = (id: keyof typeof modals) => {
        const newOrder = modalOrder.filter(orderId => orderId !== id);
        newOrder.push(id);
        setModalOrder(newOrder);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuOpen && event.target && !(event.target as Element).closest('.menu') && !(event.target as Element).closest('.start-button')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuOpen]);

    useEffect(() => {
        const getCurrentTime = () => {
            const date = new Date();
            const hour = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            setCurrentHour(`${hour}:${minutes}`);
        };

        getCurrentTime();
        const interval = setInterval(getCurrentTime, 60000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div className="desktop">
                <Icon icon={notepadIcon} text="About me" onClick={() => openModal('about')} />
                <Icon icon={livestreamIcon} text="Livestream" onClick={() => openModal('livestream')} />
                <Icon icon={musicIcon} text="Music" onClick={() => openModal('music')} />
            </div>
                            <Modal
                                id="veigarv2"
                                show={modals.veigarv2}
                                onMinimize={() => toggleModal('veigarv2')}
                                onClose={() => handleCloseModal('veigarv2')}
                                title='Veigar v2 Coaching Website'
                                icon={veigarv2Icon}
                                onModalClick={() => handleModalClick("veigarv2")}
                                style={{ zIndex: modalOrder.indexOf("veigarv2") + 1, left: modalPositions["veigarv2"].left, top: modalPositions["veigarv2"].top, display: modals.veigarv2 ? 'block' : 'none' }}
                            >
                                <Veigarv2 />
                            </Modal>
                        
                            <Modal
                                id="agorar"
                                show={modals.agorar}
                                onMinimize={() => toggleModal('agorar')}
                                onClose={() => handleCloseModal('agorar')}
                                title='Agorar'
                                icon={agorarIcon}
                                onModalClick={() => handleModalClick("agorar")}
                                style={{ zIndex: modalOrder.indexOf("agorar") + 1, left: modalPositions["agorar"].left, top: modalPositions["agorar"].top, display: modals.agorar ? 'block' : 'none' }}
                            >
                                <Agorar />
                            </Modal>
                        
                            <Modal
                                id="nomore"
                                show={modals.nomore}
                                onMinimize={() => toggleModal('nomore')}
                                onClose={() => handleCloseModal('nomore')}
                                title='Nomore'
                                icon={nomoreIcon}
                                onModalClick={() => handleModalClick("nomore")}
                                style={{ zIndex: modalOrder.indexOf("nomore") + 1, left: modalPositions["nomore"].left, top: modalPositions["nomore"].top, display: modals.nomore ? 'block' : 'none' }}
                            >
                                <Nomore />
                            </Modal>
                            <Modal
                                id="about"
                                show={modals.about}
                                onMinimize={() => toggleModal('about')}
                                onClose={() => handleCloseModal('about')}
                                title='About me'
                                icon={notepadIcon}
                                onModalClick={() => handleModalClick("about")}
                                style={{ zIndex: modalOrder.indexOf("about") + 1, left: modalPositions["about"].left, top: modalPositions["about"].top, display: modals.about ? 'block' : 'none' }}
                            >
                                <About />
                            </Modal>
                            <Modal
                                id="livestream"
                                show={modals.livestream}
                                onMinimize={() => toggleModal('livestream')}
                                onClose={() => handleCloseModal('livestream')}
                                title='Livestream'
                                icon={livestreamIcon}
                                onModalClick={() => handleModalClick("livestream")}
                                style={{ zIndex: modalOrder.indexOf("livestream") + 1, right: modalPositions["livestream"].left, bottom: modalPositions["livestream"].top, display: modals.livestream ? 'block' : 'none' }}
                            >
                                <Livestream />
                            </Modal>
                            <Modal
                                id="music"
                                show={modals.music}
                                onMinimize={() => toggleModal('music')}
                                onClose={() => handleCloseModal('music')}
                                title='Music'
                                icon={musicIcon}
                                onModalClick={() => handleModalClick("music")}
                                style={{ zIndex: modalOrder.indexOf("music") + 1, right: modalPositions["music"].left, bottom: modalPositions["music"].top, display: modals.music ? 'block' : 'none' }}
                            >
                                <Music />
                            </Modal>
            {menuOpen && <Menu openVeigarv2Modal={() => openModal("veigarv2")} openAgorarModal={() => openModal("agorar")} openNomoreModal={() => openModal('nomore')} openAboutModal={() => openModal('about')} openLivestreamModal={() => openModal('livestream')} openMusicModal={() => openModal('music')} />}
            <div className="taskbar">
                <div className="start-button" onClick={toggleMenu} tabIndex={0}>
                    <div className='border'>
                        <img className='winlogo' src={win95logo} alt="Windows 95 logo" />
                        <span>Start</span>
                    </div>
                </div>
                <div className="taskbar-icons">
                    {modalsTabs.livestream &&
                        <div className={`tab ${modals.livestream ? 'tab-selected' : ''}`} onClick={() => toggleModal('livestream')}>
                            <img src={livestreamIcon} alt="Livestream" />
                            <span>Livestream</span>
                        </div>
                    }
                    {modalsTabs.music && 
                        <div className={`tab ${modals.music ? 'tab-selected' : ''}`} onClick={() => toggleModal('music')}>
                            <img src={musicIcon} alt="Music" />
                            <span>Music</span>
                        </div>
                    }
                    {modalsTabs.about && 
                        <div className={`tab ${modals.about ? 'tab-selected' : ''}`} onClick={() => toggleModal('about')}>
                            <img src={notepadIcon} alt="Notepad logo" />
                            <span>About me</span>
                        </div>
                    }
                    {modalsTabs.nomore && 
                        <div className={`tab ${modals.nomore ? 'tab-selected' : ''}`} onClick={() => toggleModal('nomore')}>
                            <img src={nomoreIcon} alt="Nomore logo" />
                            <span>Nomore</span>
                        </div>
                    }
                    {modalsTabs.agorar && 
                        <div className={`tab ${modals.agorar ? 'tab-selected' : ''}`} onClick={() => toggleModal('agorar')}>
                            <img src={agorarIcon} alt="Agorar logo" />
                            <span>Agorar</span>
                        </div>
                    }
                    {modalsTabs.veigarv2 && 
                        <div className={`tab ${modals.veigarv2 ? 'tab-selected' : ''}`} onClick={() => toggleModal('veigarv2')}>
                            <img src={veigarv2Icon} alt="Veigarv2 logo" />
                            <span>Veigar v2</span>
                        </div>
                    }
                </div>
                <div className="taskbar-time">
                    <span>{currentHour}</span>
                </div>
            </div>
        </>
    )
}