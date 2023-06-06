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
      <div className="body">
        <h1 style={{ color: 'white', fontWeight: 'normal', textAlign: 'center', fontSize: 18, marginTop: '5vh' }}>Dante Castelao</h1>
        <div className="container1">
          <a href="/projects">
            <h1>projects</h1>
          </a>
          <a href="/about">
            <h1>contact</h1>
          </a>
        </div>
        <h2 style={{ color: 'white', fontWeight: 'normal', textAlign: 'center', fontSize: 18, marginBottom: '5vh' }}>2023</h2>
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
