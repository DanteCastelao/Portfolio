import './TaskBar.css';
import win95logo from '../../assets/win95logo.png';
import { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';

export default function TaskBar() {

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

    return (
        <>
            {menuOpen && <Menu />}
            <div className="taskbar">
                <div className="start-button" onClick={toggleMenu} tabIndex={0}>
                    <div className='subcontainer'>
                        <div className='border'>
                            <img className='winlogo' src={win95logo} alt="Windows 95 logo" />
                            <span>Start</span>
                        </div>
                    </div>
                </div>
                <div className="taskbar-icons">
                </div>
                <div className="taskbar-time">
                    <span>10:00</span>
                </div>
            </div>
        </>
    )
}