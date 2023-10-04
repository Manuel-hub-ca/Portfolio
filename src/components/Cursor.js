import React from 'react';
// import { useColorPointing } from '../context/ColorPointerContext';
import { useColorPointing } from '../hooks/useColorPointing';
const Cursor = () => {
  const mousePosition = useColorPointing();

  const cursorStyle = {
    position: 'fixed',
    top: mousePosition.y,
    left: mousePosition.x,
    width: '20px',
    height: '20px',
    backgroundImage: 'radial-gradient(circle, yellow, transparent)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    blur: '5px',
    zIndex: 1000,
  };

  return <div style={cursorStyle}></div>;
};

export default Cursor;
