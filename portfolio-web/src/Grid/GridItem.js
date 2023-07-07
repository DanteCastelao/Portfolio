import React, { useState } from 'react';

const GridItem = ({ type, content }) => {
  const [iteration, setIteration] = useState(0);

  const handleClick = () => {
    setIteration((prevIteration) => (prevIteration + 1) % content.length);
  };

  let borderRadius;
  let height;

  const { backgroundColor, component } = content[iteration];

  if (iteration === 0) {
    borderRadius = "rounded-[10px]";
  } else if (iteration === 1) {
    borderRadius = 'rounded-[20px]';
  } else {
    borderRadius = 'rounded-[30px]';
  }

  if (type === "type1") {
    height = "h-[600px]";
  } else if (type === "type2") {
    height = 'h-[380px]';
  } else {
    height = 'h-[160px]';
  }

  if (content && content[iteration]) {
    return (
      <div
        className={`p-4 ${height} ${borderRadius} ${backgroundColor} cursor-pointer`}
        onClick={handleClick}
        style={{ userSelect: 'none' }}
      >
        {component}
      </div>
    );
  }

  return null;

};

export default GridItem;