import './Agorar.css';
import agorar1 from '../../assets/agorar1.png';

export default function Agorar() {
    return (
        <div className="agorar">
            <img src={agorar1} alt="Agorar"/>
            <div className='info'>
                <span className='title'>Agorar (Enero 2024)</span>
                <span className='subtitle'>Desarrollador Full-Stack y Diseñador UX-UI</span>
            </div>
            <span>
                Agorar es una pagina web que proporciona seguimiento en tiempo real del estado de las temáticas relacionadas con el Mega DNU y la Ley Ómnibus. Utilize Express.js para el backend y Next.js para el frontend.
            </span>
            <a href='https://www.agorar.com.ar'>https://www.agorar.com.ar</a>
        </div>
    );
}