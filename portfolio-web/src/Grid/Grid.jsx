import React from 'react';
import GridItem from './GridItem';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import "./Grid.css";

const Grid = () => {

  const gridItems = [
    {
      type: 'type1',
      content: [
        {
          component: (
            <div className="animate-fade-in">   
              <img src="../websites-images/Zone1.png" />
            </div>
          )
        },
        {
          component: (
            <div className='animate-fade-in'>
              <img src="../websites-images/Zone2.png" />
            </div>
          )
        },
        {
          component: (
            <div className="relative h-full animate-fade-in">
              <img className="absolute z-0" src="../websites-images/Zone3.png"/>
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
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
            <div>
            </div>
          )
        },
        {
          component: (
            <div>
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
            <div>
            </div>
          )
        },
        {
          component: (
            <div>
            </div>
          )
        },
        {
          component: (
            <div>
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
        },
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