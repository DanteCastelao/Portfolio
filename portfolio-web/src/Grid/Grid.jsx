import React from 'react';
import GridItem from './GridItem';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import "./Grid.css";
import API1 from '../assets/websites-images/API1.png';
import API2 from '../assets/websites-images/API2.png';
import API3 from '../assets/websites-images/API3.png';
import Zone1 from '../assets/websites-images/Zone1.png';
import Zone2 from '../assets/websites-images/Zone2.png';
import Zone3 from '../assets/websites-images/Zone3.png';
import StaticLink1 from '../assets/websites-images/StaticLink1.png';
import StaticLink2 from '../assets/websites-images/StaticLink2.png';
import StaticLink3 from '../assets/websites-images/StaticLink3.png';

const Grid = () => {

  const gridItems = [
    {
      type: 'type1',
      content: [
        {
          component: (
            <div className="animate-fade-in">   
              <img src={Zone1} alt='Zone1'/>
            </div>
          )
        },
        {
          component: (
            <div className='animate-fade-in'>
              <img src={Zone2}  alt='Zone2'/>
            </div>
          )
        },
        {
          component: (
            <div className="relative h-full animate-fade-in">
              <img className="absolute z-0" src={Zone3}  alt='Zone3'/>
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10">
                <a className="text-white underline font-Inter text-lg">visit&rarr;</a>
              </div>
            </div>
          )
        }
      ]
    },
    {
      type: 'type2',
      content: [
        {
          component: (
            <div className='animate-fade-in'>
              <img src={StaticLink1}  alt='StaticLink1'/>
            </div>
          )
        },
        {
          component: (
            <div className='animate-fade-in'>
              <img src={StaticLink2} alt='StaticLink2'/>
            </div>
          )
        },
        {
          component: (
            <div className="relative h-full animate-fade-in">
              <img className="absolute z-0" src={StaticLink3} alt='StaticLink3'/>
              <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10">
                <a className="text-[#42429E] underline font-Inter text-lg">visit&rarr;</a>
              </div>
            </div>
          )
        }
      ]
    },
    {
      type: 'type3', 
      content: [
        {
          component: (
            <div className='animate-fade-in'>
              <img src={API1} alt='API1'/>
            </div>
          )
        },
        {
          component: (
            <div className='animate-fade-in'>
              <img src={API2} alt='API2'/>
            </div>
          )
        },
        {
          component: (
            <div className='relative h-full animate-fade-in'>
              <img className="absolute z-0" src={API3} alt='API3'/>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <a className="text-[#929292] underline font-Inter text-lg">visit&rarr;</a>
              </div>
            </div>
          )
        }
      ]
    },
    {
      type: 'type2',
      content: [
        {
          component: (
            <div>
            </div>
          )
        }
      ]
    }
  ];

  return (
          <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 2}}
            >
            <Masonry gutter={"20px"}>
              {gridItems.map((item, index) => (
                <GridItem key={index} type={item.type} content={item.content} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
    
  );
};

export default Grid;