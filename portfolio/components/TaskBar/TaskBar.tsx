import './TaskBar.css';
import win95logo from '../../assets/win95logo.png';
import { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import About from '../About/About';
import notepadIcon from '../../assets/notepadicon.png';

export default function TaskBar() {

    const [aboutModalOpen, setAboutModalOpen] = useState(false);
    const [aboutIconVisible, setAboutIconVisible] = useState(false);

    const openAboutModal = () => {
        setAboutModalOpen(true);
        setAboutIconVisible(true);
        setMenuOpen(false);
    };

    const closeAboutModal = () => {
        setAboutModalOpen(false);
        setAboutIconVisible(false);
        setMenuOpen(false);
    };

    const toggleAboutIcon = () => {
        setAboutModalOpen(!aboutModalOpen);
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event: { target: { closest: (arg0: string) => any; }; }) => {
            if (menuOpen && !event.target.closest('.menu') && !event.target.closest('.start-button')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuOpen]);

    const [currentHour, setCurrentHour] = useState('');

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
            {aboutModalOpen && (
                <About closeModal={closeAboutModal} hideModal={toggleAboutIcon}/>
            )}
            {menuOpen && <Menu openAboutModal={openAboutModal} />}
            <div className="taskbar">
                <div className="start-button" onClick={toggleMenu} tabIndex={0}>
                    <div className='border'>
                        <img className='winlogo' src={win95logo} alt="Windows 95 logo" />
                        <span>Start</span>
                    </div>
                </div>
                <div className="taskbar-icons">
                    {aboutIconVisible && 
                        <div className={ aboutModalOpen ? "tab-selected" : "tab" } onClick={toggleAboutIcon} >
                            <img src={notepadIcon} alt="Notepad logo" />
                            <span>About me</span>
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