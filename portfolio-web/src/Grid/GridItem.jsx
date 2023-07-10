import React, { useState, useEffect } from 'react';

const GridItem = ({ type, content }) => {
  const [iteration, setIteration] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, [iteration]);

  const handleClick = () => {
    setShow(false);
    setIteration((prevIteration) => (prevIteration + 1) % content.length);
  };

  let borderRadius;
  let height;

  const component = content[iteration].component;

  if (iteration === 0) {
    borderRadius = "rounded-[10px]";
  } else if (iteration === 1) {
    borderRadius = "rounded-[20px]";
  } else {
    borderRadius = "rounded-[30px]";
  }

  if (type === "type1") {
    height = "aspect-[3/4]";
  } else if (type === "type2") {
    height = "aspect-[45/38]";
  } else {
    height = "aspect-[2.8125]";
  }

  if (content && content[iteration]) {
    return (
      <div
        className={`${height} ${borderRadius} cursor-pointer bg-[#101010] transition-all duration-[600ms] overflow-hidden select-none`}
        onClick={handleClick}
      >
        {show && (
          <div className='h-full'>
            {component}
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default GridItem;