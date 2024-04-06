import { useEffect, useState } from 'react';
import './TaskBar.css';
import win95logo from '../../assets/win95logo.png';
import Menu from '../Menu/Menu';
import Modal from '../Modal/Modal'; // Create a generic Modal component
import notepadIcon from '../../assets/notepadicon.png';
import Livestream from '../Livestream/Livestream';
import About from '../About/About';
import Music from '../Music/Music';

export default function TaskBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentHour, setCurrentHour] = useState('');
    const [modals, setModals] = useState({
        about: false,
        livestream: true,
        music: true
    });

    const [modalContentVisible, setModalContentVisible] = useState({
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
        setModalContentVisible(prevState => ({
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
        setModalContentVisible(prevState => ({
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
            <Modal 
                show={modals.about} 
                onClose={() => handleCloseModal('about')} 
                onMinimize={() => toggleModal('about')} 
                title='About me'
            >
                <About />
            </Modal>
            <Modal 
                show={modals.music} 
                onClose={() => handleCloseModal('music')} 
                onMinimize={() => toggleModal('music')} 
                title='Music'
            >
                <Music />
            </Modal>
            <Modal 
                show={modals.livestream} 
                onClose={() => handleCloseModal('livestream')} 
                onMinimize={() => toggleModal('livestream')} 
                title='Livestream'
            >
                <Livestream />
            </Modal>
            {menuOpen && <Menu openAboutModal={() => toggleModal('about')} openLivestreamModal={() => toggleModal('livestream')} openMusicModal={() => toggleModal('music')} />}
            <div className="taskbar">
                <div className="start-button" onClick={toggleMenu} tabIndex={0}>
                    <div className='border'>
                        <img className='winlogo' src={win95logo} alt="Windows 95 logo" />
                        <span>Start</span>
                    </div>
                </div>
                <div className="taskbar-icons">
                    {modalContentVisible.about &&
                        <div className={`tab ${modals.about ? 'tab-selected' : ''}`} onClick={() => toggleModal('about')}>
                            <img src={notepadIcon} alt="Notepad logo" />
                            <span>About me</span>
                        </div>
                    }
                    {modalContentVisible.livestream &&
                        <div className={`tab ${modals.livestream ? 'tab-selected' : ''}`} onClick={() => toggleModal('livestream')}>
                            <img src={notepadIcon} alt="Livestream" />
                            <span>Livestream</span>
                        </div>
                    }
                    {modalContentVisible.music &&
                        <div className={`tab ${modals.music ? 'tab-selected' : ''}`} onClick={() => toggleModal('music')}>
                            <img src={notepadIcon} alt="Music" />
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
