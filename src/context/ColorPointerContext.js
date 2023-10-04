import React, { createContext, useEffect, useState } from 'react';

export const ColorPointerContext = createContext();

export const MousePositionProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: -10, y: -10 });
  const [isTouchedDivice, setIsTouchedDevice] = useState(false);

  useEffect(() => {
    const handleIsTouchedDivice = (e) => {
      setIsTouchedDevice(true);
    };

    window.addEventListener('touchstart', handleIsTouchedDivice);
    return () =>
      window.removeEventListener('touchstart', handleIsTouchedDivice);
  });

  useEffect(() => {
    if (!isTouchedDivice) {
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isTouchedDivice]);

  return (
    <ColorPointerContext.Provider value={mousePosition}>
      {children}
    </ColorPointerContext.Provider>
  );
};
