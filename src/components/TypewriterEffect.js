import React, { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';

const TypewriterEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [colorHeading, setColorHeading] = useState('white');

  useEffect(() => {
    const timerId = setInterval(() => {
      setDisplayedText((prevText) => prevText + text[charIndex]);
      setCharIndex((prevIndex) => {
        prevIndex += 1;
        if (prevIndex === text.length) {
          setDisplayedText('');
          return 0;
        }
        if (prevIndex > text.length / 2) {
          setColorHeading(() => 'yellow');
        } else {
          setColorHeading(() => 'white');
        }
        return prevIndex;
      });
    }, 200);
    return () => clearInterval(timerId);
  }, [text, charIndex]);

  return (
    <Heading
      as={'h1'}
      fontSize={['15px', '20px', '20px']}
      fontWeight={'light'}
      marginLeft={'2%'}
      marginTop={['16', '24', '24']}
      color={colorHeading}
      height={['30px', '37px', '40px']}
    >
      {displayedText}
    </Heading>
  );
};

export default TypewriterEffect;
