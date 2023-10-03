import React, { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
const TypewriterEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDisplayedText((prev) => prev + text[charIndex]);
      setCharIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex === text.length) {
          // Once we reach the end of the string, clear it and reset index
          setDisplayedText('');
          return 0;
        }
        return newIndex;
      });
    }, 200); // Adjust speed by changing duration (ms)

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, [text, charIndex]);

  return <Heading as={'h2'} fontSize={['7px', '9px','11px']} fontWeight={'light'} marginLeft={'2%'} marginTop={'0'}>{displayedText}</Heading>;
};

export default TypewriterEffect;
