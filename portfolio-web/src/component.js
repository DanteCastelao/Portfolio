import React, { useRef, useState, useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import zoneVideo from "./zone-video.mp4";
import "./component.css";

const ScrollingVideo = () => {
    const videoRef = useRef(null);
    const buttonRef = useRef(null);
    const boxRef = useRef(null);

    const handleStepEnter = () => {
        videoRef.current.play();
        videoRef.current.classList.add("active");
        buttonRef.current.classList.add("active");
    };

    const handleStepExit = () => {
        videoRef.current.pause();
        videoRef.current.classList.remove("active");
        buttonRef.current.classList.remove("active");
    };

    const handleSkipVideo = () => {
        boxRef.current.scrollIntoView();
    };

  return (
    <div>
        <button className='button' onClick={handleSkipVideo} ref={buttonRef}>Skip Video</button>
        <video ref={videoRef} src={zoneVideo} muted className="fullscreen-video" />
        <Scrollama offset={0} onStepEnter={handleStepEnter} onStepExit={handleStepExit}>
            <Step>
                <div className="step" style={{height:"140vh"}} />
            </Step>
        </Scrollama>
        <div id='box' ref={boxRef}/>
    </div>
  );
};

export default ScrollingVideo;
