import React from 'react';
import GridItem from './GridItem';

const Grid = () => {
  const gridItems = [
    {
      type: 'type1',
      content: [
        {
          backgroundColor: 'bg-[#101010]',
          component: (
            <div>
              <h2>Component 1 - Iteration 1</h2>
            </div>
          )
        },
        {
          backgroundColor: 'bg-[#101010]',
          component: (
            <div>
              <h2>Component 1 - Iteration 2</h2>
            </div>
          )
        },
        {
          backgroundColor: 'bg-[#101010]',
          component: (
            <div>
              <h2>Component 1 - Iteration 3</h2>
            </div>
          )
        }
      ]
    },
    {
      type: 'type2',
      content: [
        {
          backgroundColor: 'bg-[#101010]',
          component: (
            <div>
              <h2>Component 2 - Iteration 1</h2>
              <p>Some text</p>
            </div>
          )
        },
        {
          backgroundColor: 'bg-[#101010]',
          component: (
            <div>
              <h2>Component 2 - Iteration 2</h2>
              <p>Some different text</p>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-5">
      {gridItems.map((item, index) => (
        <GridItem key={index} type={item.type} content={item.content} />
      ))}
    </div>
  );
};

export default Grid;