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
    const [scroll1Progress, setScroll1Progress] = useState(0);
    const [scroll2Progress, setScroll2Progress] = useState(0);
    const [scroll3Progress, setScroll3Progress] = useState(0);
    const [activeStep, setActiveStep] = useState(0);

    const onStepProgress = ({ data, progress }) => {
        if (data.index === 1) {
            setScroll1Progress(progress * 100);
        }
        else if (data.index === 3) {
            setScroll2Progress(progress * 100);
        }
        else if (data.index === 4) {
            setScroll3Progress(progress * 100);
        }
    };

    const handleStepEnter = ({ data }) => {
        if (data.index === 1) {
            setImageSequenceActive(false)
            const backImage = document.querySelector(".back-image");
            backImage.classList.add("visible");
            backImage.classList.add("full");
            setActiveStep(1);
        }
        else if (data.index === 2) {
            const backImage = document.querySelector(".back-image");
            backImage.classList.remove("visible");
            setImageSequenceActive(true)
            setActiveStep(2);
        }
        else if (data.index === 3) {
            setImageSequenceActive(false)
            const backImage = document.querySelector(".back-image");
            backImage.classList.add("visible");
            backImage.classList.remove("full");
            setActiveStep(3);
        }
        else if (data.index === 4) {
            const backImage = document.querySelector(".back-image");
            backImage.classList.remove("visible");
            setActiveStep(4);
        }
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (sectionId === "section1") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        else if (sectionId === "section3") {
            const section = document.getElementById(sectionId);
            const offset = section.offsetTop - (window.innerHeight * 0.1);
            window.scrollTo({
                top: offset,
                behavior: "smooth",
            });
        }
        else if (sectionId === "section2") {
            const section = document.getElementById(sectionId);
            const offset = section.offsetTop - (window.innerHeight * -0.85);
            window.scrollTo({
                top: offset,
                behavior: "smooth",
            });
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
            <div className={isImageSequenceActive ? "header-inactive" : activeStep === 1 ? "header-contrast" : "header"}>
                <h1 style={{color:"white", fontWeight:"normal", textAlign:"center", fontSize:18, marginTop:"5vh"}}>Dante Castelao</h1>
            </div>
            <div className="container">
                <div className="left-container">
                    <div className="menu">
                        <a
                            style={{flexDirection:"row", display:"flex"}}
                            onClick={() => scrollToSection("section1")}
                            className={activeStep === 1 ? "active" : activeStep === 1 ? "contrast" : ""}
                        >
                            <h1 className={activeStep === 1 ? "active" : activeStep === 1 ? "contrast" : ""}>1.Static Link</h1>
                            <a href="google.com"><img style={{marginTop:-2}} src={activeStep === 1 ? "./arrow_icon.png" : ""}/></a>
                        </a>
                        <a
                            style={{flexDirection:"row", display:"flex"}}
                            onClick={() => scrollToSection("section2")}
                            className={activeStep === 2 || activeStep === 3 ? "active" : activeStep === 1 ? "contrast" : ""}
                        >
                            <h1 className={activeStep === 2 || activeStep === 3 ? "active" : activeStep === 1 ? "contrast" : ""}>2.Zone</h1>
                            <a><img style={{marginTop:-2}} src={activeStep === 2 || activeStep === 3 ? "./arrow_icon.png" : ""}/></a>
                        </a>
                        <a
                            style={{flexDirection:"row", display:"flex"}}
                            onClick={() => scrollToSection("section4")}
                            className={activeStep === 4 ? "active" : activeStep === 1 ? "contrast" : ""}
                        >
                            <h1 className={activeStep === 4 ? "active" : activeStep === 1 ? "contrast" : ""}>3.Websites</h1>
                            <a><img style={{marginTop:-2}} src={activeStep === 4 ? "./arrow_icon.png" : ""}/></a>
                        </a>
                    </div>
                    <div className="progress-container">
                        <div className={activeStep === 1 ? "progress-bar-contrast" : "progress-bar"}>
                            <div className="progress" style={{ height: `${scroll1Progress}%` }}></div>
                        </div>
                        <div className={activeStep === 1 ? "progress-bar-contrast" : "progress-bar"}>
                            <div className="progress" style={{ height: `${scroll2Progress}%` }}></div>
                        </div>
                        <div className={activeStep === 1 ? "progress-bar-contrast" : "progress-bar"}>
                            <div className="progress" style={{ height: `${scroll3Progress}%` }}></div>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <Scrollama offset={activeStep === 1 ? 0.1 : 0.3} onStepProgress={onStepProgress} onStepEnter={handleStepEnter}>
                        <Step data={{ index: 1 }}>
                            <section id="section1" style={{ display: 'flex', flexDirection:"column", alignItems:"center"}}>
                                <div style={{width:"50vw", flexDirection:"row", marginTop:"5vh"}}>
                                    <h3><span style={{backgroundColor:"white", color:"black", fontWeight:"bold"}}>Picto</span>
                                    <span>  </span>sirve como una solución única para mejorar la comunicación de las personas con discapacidades. La aplicación utiliza pictogramas, conocidos como Pictos, que son símbolos gráficos que representan palabras o conceptos. Al utilizar la fuente Open-Dyslexic, diseñada específicamente para ayudar a las personas con dislexia, Picto asegura aún más que la comunicación esté optimizada para aquellos que enfrentan desafíos de lectura. A través de este proyecto, mi objetivo fue crear una interfaz intuitiva y visualmente atractiva que permita a los usuarios intercambiar pensamientos e ideas sin esfuerzo. 
                                    </h3>
                                    <h3>Este proyecto es un testimonio de mi compromiso de aprovechar la tecnología para fomentar la inclusión y mejorar la vida de las personas con discapacidades. Al proporcionar una plataforma que permite una comunicación eficiente a través de la traducción de Picto a palabras y de palabras a Picto, este proyecto capacita a los usuarios para expresarse de manera efectiva. Con su utilización de React e integración de la fuente Open-Dyslexic, Picto encarna las mejores prácticas del desarrollo front-end y la accesibilidad.</h3>
                                </div>
                            </section>
                        </Step>
                        <Step offset={"10%"} data={{ index: 2 }}>
                            <section id="section2">
                                <Box h="2100vh" ref={step2}>
                                    <Box pos="sticky" top={0} h="100vh">
                                        <div className={activeStep === 2 ? "" : "button-inactive"} style={{width:"100vw", height:"100vh", position:"fixed", objectFit:"cover", top:0, left:0, zIndex:3, alignItems:"end", display:"flex", justifyContent:"center", transition:"opacity 0.5s ease"}}>
                                            <button style={{backgroundColor:"white", borderRadius:20, padding:5, marginBottom:"10vh"}} onClick={() => scrollToSection("section3")}>
                                                <h1 style={{color:"#CE4EAD", fontWeight:"bold", fontSize:24, fontFamily:"Roboto"}}>Omitir</h1>
                                            </button>
                                        </div>
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
                                        <h3><span style={{color:"#CE4EAD", fontWeight:"bold", fontSize:34}}>Zone</span>
                                        <span>  </span>
                                        es un proyecto innovador que combina la conectividad social, la compra y venta de boletos, y la creación de comunidades en una plataforma única. Nuestra aplicación está diseñada para brindar una experiencia integral a los usuarios, permitiéndoles conectar con otros y compartir momentos significativos.
                                        </h3>
                                    </div>
                                </div>
                            </section>
                        </Step>
                        <Step data={{ index: 4 }}>
                            <section id="section4"> 
                            </section>
                        </Step>
                        <Step data={{ index: 5 }}>
                            <section id="section5">
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

