import React from 'react';

const Box = ({ width, height, color }) => {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
    border: '1px solid #000',
  };

  return <div style={boxStyle}></div>;
};

export default Box;