import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Scrollama, Step } from "react-scrollama";
import "./Projects.css";
import pictoLogo from "./picto-logo.png";
import back from "./back.png";
import zoneLogo from "./title.png";
import { Box } from "@chakra-ui/react";
import { useScroll, MotionValue } from "framer-motion";
import ImageSequence from "./ImageSequence.tsx";
import { useRef } from "react";

const imageFiles = Array.from({ length: 1150 }, (_, i) => {
    const paddedIndex = i.toString().padStart(4, '0');
    return `/images/${paddedIndex}.png`;
});

function Projects() {
    const [isImageSequenceActive, setImageSequenceActive] = useState(false);
    const step2 = useRef(null);
    const { scrollYProgress } = useScroll({ target: step2, offset: ["start start", "end end"]});
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const totalScrollHeight = scrollHeight - clientHeight;
        const progress = scrollTop / totalScrollHeight;
        setScrollProgress(progress);
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[]);

    const handleStepEnter = ({ data }) => {
        if (data.index === 1) {
            setImageSequenceActive(false)
        }
        else if (data.index === 2) {
            const backImage = document.querySelector(".back-image");
            backImage.classList.remove("visible");
            setImageSequenceActive(true)
        }
        else if (data.index === 3) {
            setImageSequenceActive(false)
            const backImage = document.querySelector(".back-image");
            backImage.classList.add("visible");
            backImage.classList.remove("full");
        }
        else if (data.index === 4) {
            const backImage = document.querySelector(".back-image");
            backImage.classList.add("full");
        }
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (sectionId === "section1") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        else if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <div className="body1">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
                <script src="https://cdn.jsdelivr.net/npm/scrolly-video@latest/dist/scrolly-video.js"></script>   
            </head>
            <div className={isImageSequenceActive ? "header-inactive" : "header"}>
                <h1 style={{color:"white", fontWeight:"normal", textAlign:"center", fontSize:18, marginTop:"5vh"}}>Dante Castelao</h1>
            </div>
            <div className="container">
                <div className="left-container">
                    <div className="menu">
                        <a onClick={() => scrollToSection("section1")}>
                            <h1>1.Picto</h1> 
                        </a>
                        <a onClick={() => scrollToSection("section2")}>
                            <h1>2.Zone</h1>  
                        </a>
                        <a onClick={() => scrollToSection("section4")}>
                            <h1>3.Zone NFT</h1>  
                        </a>
                    </div>
                    <div className="progress-bar">
                        <div className="progress" style={{ height: `${scrollProgress * 100}%` }}></div>
                    </div>
                </div>
                <div className="right-container">
                    <Scrollama offset={0.3} onStepEnter={handleStepEnter}>
                        <Step data={{ index: 1 }}>
                            <section id="section1" style={{ display: 'flex', flexDirection:"column", alignItems:"center"}}>
                                <img style={{alignSelf:"center"}} src={pictoLogo} ></img>
                                <h3 style={{fontFamily:"Roboto", fontSize: 50, color:"white"}}>SPEAK THROUGH PICTOS.</h3>
                                <div style={{width:"50vw", flexDirection:"row"}}>
                                    <h3><span style={{backgroundColor:"white", color:"black", fontWeight:"bold"}}>Picto</span>
                                    <span>  </span>sirve como una solución única para mejorar la comunicación de las personas con discapacidades. La aplicación utiliza pictogramas, conocidos como Pictos, que son símbolos gráficos que representan palabras o conceptos. Al utilizar la fuente Open-Dyslexic, diseñada específicamente para ayudar a las personas con dislexia, Picto asegura aún más que la comunicación esté optimizada para aquellos que enfrentan desafíos de lectura. A través de este proyecto, mi objetivo fue crear una interfaz intuitiva y visualmente atractiva que permita a los usuarios intercambiar pensamientos e ideas sin esfuerzo. 
                                    </h3>
                                    <h3>Este proyecto es un testimonio de mi compromiso de aprovechar la tecnología para fomentar la inclusión y mejorar la vida de las personas con discapacidades. Al proporcionar una plataforma que permite una comunicación eficiente a través de la traducción de Picto a palabras y de palabras a Picto, este proyecto capacita a los usuarios para expresarse de manera efectiva. Con su utilización de React e integración de la fuente Open-Dyslexic, Picto encarna las mejores prácticas del desarrollo front-end y la accesibilidad.</h3>
                                </div>
                            </section>
                        </Step>
                        <Step data={{ index: 2 }}>
                            <section id="section2">
                                <Box h="2100vh" ref={step2}>
                                    <Box pos="sticky" top={0} h="100vh">
                                        <ImageSequence
                                        progress={scrollYProgress}
                                        images={imageFiles}
                                        width={1920}
                                        height={1080}
                                        className={isImageSequenceActive ? "image-sequence-active" : "image-sequence-inactive"}
                                        style={{
                                            width: "100vw",
                                            height: "100vh",
                                            objectFit: "cover",
                                            position: "fixed",
                                            top: 0,
                                            left: 0,
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </section>
                        </Step>
                        <Step data={{ index: 3 }}>
                            <section id="section3">
                                <div id="zone-container" style={{ display: 'flex', flexDirection:"column", alignItems:"center"}}>
                                    <img src={zoneLogo} id="zone-logo"></img>
                                    <div style={{width:"50vw", flexDirection:"row"}}>
                                        <h3><span style={{backgroundColor:"white", color:"black", fontWeight:"bold"}}>Picto</span>
                                        <span>  </span>sirve como una solución única para mejorar la comunicación de las personas con discapacidades. La aplicación utiliza pictogramas, conocidos como Pictos, que son símbolos gráficos que representan palabras o conceptos. Al utilizar la fuente Open-Dyslexic, diseñada específicamente para ayudar a las personas con dislexia, Picto asegura aún más que la comunicación esté optimizada para aquellos que enfrentan desafíos de lectura. A través de este proyecto, mi objetivo fue crear una interfaz intuitiva y visualmente atractiva que permita a los usuarios intercambiar pensamientos e ideas sin esfuerzo. 
                                        </h3>
                                        <h3>Este proyecto es un testimonio de mi compromiso de aprovechar la tecnología para fomentar la inclusión y mejorar la vida de las personas con discapacidades. Al proporcionar una plataforma que permite una comunicación eficiente a través de la traducción de Picto a palabras y de palabras a Picto, este proyecto capacita a los usuarios para expresarse de manera efectiva. Con su utilización de React e integración de la fuente Open-Dyslexic, Picto encarna las mejores prácticas del desarrollo front-end y la accesibilidad.</h3>
                                    </div>
                                </div>
                            </section>
                        </Step>
                        <Step data={{ index: 4 }}>
                            <section id="section4">
                                {/* Content for section 3 */}
                            </section>
                        </Step>
                    </Scrollama>
                </div>
            </div>
            <img src={back} className="back-image"/>
        </div>
    )
}

export default Projects;

