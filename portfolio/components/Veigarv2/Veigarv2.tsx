import './Veigarv2.css';
import veigarv21 from '../../assets/veigarv21.png';

export default function Veigarv2() {
    return (
        <div className="veigarv2">
            <div className='info'>
                <img src={veigarv21} alt="Veigar v2"/>
                <span className='title'>Veigar v2 Coaching Website (Noviembre 2023)</span>
                <span className='subtitle'>Desarrollador Front-End y Diseñador UX-UI</span>
            </div>
            <span>
                Revitalice una plataforma de coaching para League of Legends.
                Rediseñada para tener un impacto significativo, brindar una
                experiencia fluida para los jugadores y elevar la presencia en
                línea del entrenador.
            </span>
            <a href='https://veigar-v2-webpage.vercel.app/'>Veigar v2 Website</a>
        </div>
    );
}