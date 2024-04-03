import './TaskBar.css';
import win95logo from '../../assets/win95logo.png';

export default function TaskBar() {
    return (
        <div className="taskbar">
            <div className="start-button">
                <div className='subcontainer'>  
                    <img className='winlogo' src={win95logo} alt="Windows 95 logo" />
                    <span>Start</span>
                </div>
            </div>
            <div className="taskbar-icons">
            </div>
            <div className="taskbar-time">
                <span>10:00</span>
            </div>
        </div>
    )
}