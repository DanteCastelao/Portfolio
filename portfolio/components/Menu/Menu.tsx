import './Menu.css';
import shutdownIcon from '../../assets/shutdownicon.png';

export default function Menu({ openAboutModal }: { openAboutModal: () => void }) {
    const handleAboutClick = () => {
        openAboutModal();
    };
    return (
        <div className="menu">
            <div className='wordmark'/>
            <div className='menu-list'>
                <div className='programs'>
                    <div className='program'>
                        <img src={shutdownIcon} alt="Shutdown icon"/>
                        <span>Projects</span>
                        <div className="submenu">
                            <div className='sublist'>
                                <div>
                                    <img src={shutdownIcon} alt="Shutdown icon"/>
                                    <span>Zone</span>
                                </div>
                                <div>
                                    <img src={shutdownIcon} alt="Shutdown icon"/>
                                    <span>Nomore</span>
                                </div>
                                <div>
                                    <img src={shutdownIcon} alt="Shutdown icon"/>
                                    <span>Agorar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='program'>
                        <img src={shutdownIcon} alt="Shutdown icon"/>
                        <span>Programs</span>
                        <div className="submenu">
                            <div className='sublist'>
                                <div>
                                    <img src={shutdownIcon} alt="Shutdown icon"/>
                                    <span>Music</span>
                                </div>
                                <div>
                                    <img src={shutdownIcon} alt="Shutdown icon"/>
                                    <span>Livestream</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='program' onClick={handleAboutClick}>
                        <img src={shutdownIcon} alt="Shutdown icon"/>
                        <span>About me</span>
                    </div>
                </div>
                <div className='shutdown-button'>
                    <img src={shutdownIcon} alt="Shutdown icon"/>
                    <span>Shut Down...</span>
                </div>
            </div>
        </div>
    )
}