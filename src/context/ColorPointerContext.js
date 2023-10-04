import React, { createContext, useEffect, useState } from 'react';

export const ColorPointerContext = createContext();

export const MousePositionProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: -10, y: -10 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ColorPointerContext.Provider value={mousePosition}>
      {children}
    </ColorPointerContext.Provider>
  );
};
