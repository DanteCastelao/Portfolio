import './About.css';

export default function About() {
    return (
        <div className="about" >
            <span className='name'>Dante Castelao (Frontend Developer)</span>
            <div className='category'>   
                <span className='astro'>Astro</span>
                <span className='next'>Next</span>
                <span className='react'>React</span>
                <span className='express'>Express.js</span>
                <span className='mongodb'>MongoDB</span>
            </div>
            <span className='aboutme'>Sobre Mi</span>
            <div className='paragraph'>
                <span>Soy un desarrollador frontend con experiencia en React, Typescript, HTML, CSS, Tailwind CSS, JavaScript, Node.js, Express, MongoDB, entre otros.</span>
                <span>Ahora mismo estoy cursando la Licentura en Ciencias de la Computación en la Universidad de Buenos Aires.</span>
            </div>
        </div>
    )
}