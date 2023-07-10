import React from 'react';
import './App.css';
import Grid from "./Grid/Grid";
import Marquee from "react-fast-marquee";

const App = () => {
  return (
    <div className="bg-grid bg-cover items-center flex flex-col h-[102vh]">
      <div className="md:w-[920px] w-[95%] mx-2">
          <div className="flex items-center justify-center h-[50px] w-full rounded-[10px] bg-[#101010] p-4 mb-5 mt-2">
              <h1 className="text-white font-Inter my-5 md:text-base text-xl">Dante Castelao</h1>
          </div>
          <Grid/>
          <Marquee pauseOnHover={true} className="h-[50px] items-center w-full rounded-[10px] bg-[#101010] my-5 md:text-lg text-xl">
              <div className='gap-7 flex-row flex'>
                <p className="text-white font-Inter">//</p>
                <a href='https://www.linkedin.com/in/dante-castelao-04b9a1254/' target="_blank" className='flex-row flex items-center gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14.2222 0C14.6937 0 15.1459 0.187301 15.4793 0.520699C15.8127 0.854097 16 1.30628 16 1.77778V14.2222C16 14.6937 15.8127 15.1459 15.4793 15.4793C15.1459 15.8127 14.6937 16 14.2222 16H1.77778C1.30628 16 0.854097 15.8127 0.520699 15.4793C0.187301 15.1459 0 14.6937 0 14.2222V1.77778C0 1.30628 0.187301 0.854097 0.520699 0.520699C0.854097 0.187301 1.30628 0 1.77778 0H14.2222ZM13.7778 13.7778V9.06667C13.7778 8.29813 13.4725 7.56107 12.929 7.01763C12.3856 6.47419 11.6485 6.16889 10.88 6.16889C10.1244 6.16889 9.24444 6.63111 8.81778 7.32444V6.33778H6.33778V13.7778H8.81778V9.39556C8.81778 8.71111 9.36889 8.15111 10.0533 8.15111C10.3834 8.15111 10.6999 8.28222 10.9333 8.5156C11.1667 8.74898 11.2978 9.06551 11.2978 9.39556V13.7778H13.7778ZM3.44889 4.94222C3.84495 4.94222 4.22478 4.78489 4.50484 4.50484C4.78489 4.22478 4.94222 3.84495 4.94222 3.44889C4.94222 2.62222 4.27556 1.94667 3.44889 1.94667C3.05047 1.94667 2.66838 2.10494 2.38666 2.38666C2.10494 2.66838 1.94667 3.05047 1.94667 3.44889C1.94667 4.27556 2.62222 4.94222 3.44889 4.94222ZM4.68444 13.7778V6.33778H2.22222V13.7778H4.68444Z" fill="white"/>
                  </svg>
                  <p className="text-white font-Inter">Dante Castelao</p>
                </a>
                <p className="text-white font-Inter">//</p>
                <a href='https://github.com/DanteCastelao' target="_blank" className='flex-row flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0C3.58 0 0 3.67055 0 8.20235C0 11.8319 2.29 14.8975 5.47 15.9843C5.87 16.0561 6.02 15.81 6.02 15.5947C6.02 15.3999 6.01 14.754 6.01 14.067C4 14.4464 3.48 13.5646 3.32 13.1033C3.23 12.8674 2.84 12.1395 2.5 11.9447C2.22 11.7909 1.82 11.4115 2.49 11.4013C3.12 11.391 3.57 11.9959 3.72 12.242C4.44 13.4826 5.59 13.134 6.05 12.9187C6.12 12.3855 6.33 12.0267 6.56 11.8216C4.78 11.6166 2.92 10.9091 2.92 7.77173C2.92 6.87972 3.23 6.14151 3.74 5.56735C3.66 5.36229 3.38 4.52155 3.82 3.39372C3.82 3.39372 4.49 3.17841 6.02 4.23446C6.66 4.04991 7.34 3.95763 8.02 3.95763C8.7 3.95763 9.38 4.04991 10.02 4.23446C11.55 3.16816 12.22 3.39372 12.22 3.39372C12.66 4.52155 12.38 5.36229 12.3 5.56735C12.81 6.14151 13.12 6.86947 13.12 7.77173C13.12 10.9194 11.25 11.6166 9.47 11.8216C9.76 12.078 10.01 12.5701 10.01 13.3391C10.01 14.4361 10 15.3179 10 15.5947C10 15.81 10.15 16.0664 10.55 15.9843C12.1382 15.4348 13.5183 14.3883 14.496 12.9923C15.4737 11.5963 15.9997 9.92099 16 8.20235C16 3.67055 12.42 0 8 0Z" fill="white"/>
                </svg>
                <p className="text-white font-Inter">Dante Castelao</p>
                </a>
                <p className="text-white font-Inter">//</p>
                <a href='mailto:dantecastelaou@gmail.com'>
                  <p className="text-white font-Inter">dantecastelaou@gmail.com</p>
                </a>
                <p className="text-white font-Inter">//</p>
                <a href='https://twitter.com/dantecastelao' target="_blank" className='flex-row flex items-center gap-3 mr-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_604_232)">
                      <path d="M17 2.76471C16.3375 3.07353 15.6233 3.27647 14.8834 3.37353C15.6405 2.90588 16.2256 2.16471 16.501 1.27353C15.7868 1.71471 14.9952 2.02353 14.1606 2.2C13.4809 1.44118 12.5258 1 11.4417 1C9.41969 1 7.76769 2.69412 7.76769 4.78529C7.76769 5.08529 7.8021 5.37647 7.86233 5.65C4.79924 5.49118 2.0717 3.98235 0.256214 1.69706C-0.0621414 2.25294 -0.24283 2.90588 -0.24283 3.59412C-0.24283 4.90882 0.402486 6.07353 1.40057 6.73529C0.789675 6.73529 0.221798 6.55882 -0.277246 6.29412V6.32059C-0.277246 8.15588 0.996176 9.69118 2.6826 10.0353C2.14116 10.1872 1.57274 10.2084 1.02199 10.0971C1.25568 10.8492 1.71337 11.5074 2.3307 11.9791C2.94804 12.4507 3.69398 12.7121 4.46367 12.7265C3.15896 13.7857 1.54168 14.3582 -0.122371 14.35C-0.414914 14.35 -0.707457 14.3324 -1 14.2971C0.634799 15.3735 2.57935 16 4.66157 16C11.4417 16 15.1673 10.2294 15.1673 5.22647C15.1673 5.05882 15.1673 4.9 15.1587 4.73235C15.8815 4.20294 16.501 3.53235 17 2.76471Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_604_232">
                        <rect width="16" height="16" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-white font-Inter">@dantecastelao</p>
                </a>
              </div>
          </Marquee>
      </div>
    </div>
  );
};

export default App;
