import { useEffect, useState } from 'react';
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

export default function TaskBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentHour, setCurrentHour] = useState('');
    const [modals, setModals] = useState({
        about: false,
        livestream: true,
        music: true
    });
    const [modalsTabs, setModalsTabs] = useState({
        about: false,
        livestream: true,
        music: true
    });

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleModal = (modalName: keyof typeof modals) => {
        setModals(prevState => ({
            ...prevState,
            [modalName]: !prevState[modalName]
        }));
        setMenuOpen(false);
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
                id="about"
                show={modals.about}
                onMinimize={ () => toggleModal('about')}
                onClose={() => handleCloseModal('about')}
                title='About me'
                initialPosition={{ right: 500, bottom: 300}}
                icon={notepadIcon}
            >
                <About />
            </Modal>
            <Modal
                id="music"
                show={modals.music}
                onMinimize={ () => toggleModal('music')}
                onClose={() => handleCloseModal('music')}
                title='Music'
                initialPosition={{ right: 50, bottom: 400 }}
                icon={musicIcon}
            >
                <Music />
            </Modal>
            <Modal
                id="livestream"
                show={modals.livestream}
                onMinimize={ () => toggleModal('livestream')}
                onClose={() => handleCloseModal('livestream')}
                title='Livestream'
                initialPosition={{ right: 50, bottom: 100 }}
                icon={livestreamIcon}
            >
                <Livestream />
            </Modal>
            {menuOpen && <Menu openAboutModal={() => openModal('about')} openLivestreamModal={() => openModal('livestream')} openMusicModal={() => openModal('music')} />}
            <div className="taskbar">
                <div className="start-button" onClick={toggleMenu} tabIndex={0}>
                    <div className='border'>
                        <img className='winlogo' src={win95logo} alt="Windows 95 logo" />
                        <span>Start</span>
                    </div>
                </div>
                <div className="taskbar-icons">
                    {modalsTabs.about && 
                        <div className={`tab ${modals.about ? 'tab-selected' : ''}`} onClick={() => toggleModal('about')}>
                            <img src={notepadIcon} alt="Notepad logo" />
                            <span>About me</span>
                        </div>
                    }
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
                </div>
                <div className="taskbar-time">
                    <span>{currentHour}</span>
                </div>
            </div>
        </>
    )
}