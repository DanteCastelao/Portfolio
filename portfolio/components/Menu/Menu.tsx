import './Menu.css';
import shutdownIcon from '../../assets/shutdownicon.png';
import notepadIcon from '../../assets/notepadicon.png';
import programsIcon from '../../assets/programsIcon.png';
import projectsIcon from '../../assets/projectsIcon.png';
import musicIcon from '../../assets/musicIcon.png';
import livestreamIcon from '../../assets/livestreamIcon.png';
import agorarIcon from '../../assets/agorarIcon.png';
import nomoreIcon from '../../assets/nomoreIcon.png';
import veigarv2Icon from '../../assets/veigarv2Icon.png';

export default function Menu({ openVeigarv2Modal, openAgorarModal, openNomoreModal, openAboutModal, openLivestreamModal, openMusicModal }: { openVeigarv2Modal: () => void, openAgorarModal: () => void, openNomoreModal: () => void, openAboutModal: () => void, openLivestreamModal: () => void, openMusicModal: () => void}) {
    return (
        <div className="menu">
            <div className='wordmark'/>
            <div className='menu-list'>
                <div className='programs'>
                    <div className='program'>
                        <img src={projectsIcon} alt="Projects icon"/>
                        <span>Projects</span>
                        <div className="submenu">
                            <div className='sublist'>
                                <div onClick={openVeigarv2Modal}>
                                    <img src={veigarv2Icon} alt="Veigarv2 icon"/>
                                    <span>Veigar v2</span>
                                </div>
                                <div onClick={openNomoreModal}>
                                    <img src={nomoreIcon} alt="Nomore icon"/>
                                    <span>Nomore</span>
                                </div>
                                <div onClick={openAgorarModal}>
                                    <img src={agorarIcon} alt="Agorar icon"/>
                                    <span>Agorar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='program'>
                        <img src={programsIcon} alt="Programs icon"/>
                        <span>Programs</span>
                        <div className="submenu">
                            <div className='sublist'>
                                <div onClick={openMusicModal}>
                                    <img src={musicIcon} alt="Music icon"/>
                                    <span>Music</span>
                                </div>
                                <div onClick={openLivestreamModal}>
                                    <img src={livestreamIcon} alt="Livestream icon"/>
                                    <span>Livestream</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='program' onClick={openAboutModal}>
                        <img src={notepadIcon} alt="Notepad icon"/>
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