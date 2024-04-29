import './Nomore.css';
import nomore1 from '../../assets/nomore1.png';


export default function Nomore() {
    return (
        <div className="nomore">
            <img src={nomore1} alt="Nomore"/>
            <div className='info'>
                <span className='title'>Nomore (Diciembre 2023 - Ahora)</span>
                <span className='subtitle'>Desarrollador Front-End</span>
            </div>
            <div className='category'>
                <span className='astro'>Astro</span>
                <span className='react'>React</span>
                <span className='express'>Express.js</span>
                <span className='mongodb'>MongoDB</span>
            </div>
            <span>Desarrollé una pagina para una marca de ropa con enfoque en la experiencia de usuario y funciones de compra en línea. Utilicé Astro y React para el front-end y Node.js para el back-end. También trabajé en la implementación de un sistema de pago seguro y en la integración de una API de seguimiento de envíos.
            </span>
            <a href='https://www.nomoretm.com.ar' target="_blank">https://www.nomoretm.com.ar</a>
        </div>
    );
}