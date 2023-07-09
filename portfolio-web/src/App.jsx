import React, { useState } from 'react';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Projects from './Projects';
import About from './About';

const App = () => {
  return (
    <div className="app">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <div className="justify-between flex flex-col flex-1 my-[5vh]">
        <p className='text-[#EAEAEA] font-Inter text-center'>Dante Castelao</p>
        <div className="flex-row justify-center items-center gap-[3vw] flex">
          <a href="/projects" className="relative text-white">
            <h1 className="text-center text-lg hover:font-bold transition font-Inter">projects</h1>
            <span className="block absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
          </a>
          <a href="/about" className="relative text-white">
            <h1 className="text-center text-lg hover:font-bold transition font-Inter">contact</h1>
            <span className="block absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
          </a>
        </div>
        <p className='text-center text-lg font-Inter'>2023</p>
      </div>
    </div>
  );
};

export default App;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export { router };
