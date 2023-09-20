import { Screen } from './Screen';
import bgImg5 from '../assets/bgImg5.jpeg';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HStack, Heading, Image, VStack, Text } from '@chakra-ui/react';

const skills = [
  { skill: 'JavaScript', svg: () => require('../assets/meter1.svg') },
  { skill: 'React', svg: () => require('../assets/meter3.svg') },
  { skill: 'HTML', svg: () => require('../assets/meter1.svg') },
  { skill: 'Pyhton', svg: () => require('../assets/meter2.svg') },
  { skill: 'Nestjs', svg: () => require('../assets/meter3.svg') },
  { skill: 'CSS', svg: () => require('../assets/meter1.svg') },
  { skill: 'Nextjs', svg: () => require('../assets/meter3.svg') },
  { skill: 'Pyhton', svg: () => require('../assets/meter2.svg') },
  { skill: 'Golang', svg: () => require('../assets/meter3.svg') },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};
const Skills = () => {
  const [loadedSVGs, setLoadedSVGs] = useState([]);

  useEffect(() => {
    Promise.all(skills.map((skill) => skill.svg()))
      .then((loadedSVGs) => {
        setLoadedSVGs(loadedSVGs);
      })
      .catch((error) => {
        console.error('Error loading SVGs:', error);
      });
  }, []);

  return (
    <Screen
      background={`url(${bgImg5})`}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <HStack>
        <Heading margin={'0'} id="skills">
          Skills
        </Heading>
      </HStack>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="custom-carousel owl-carousel owl-theme"
        style={{
          borderRadius: '5px',
        }}
      >
        {skills.map((s, i) => (
          <VStack key={s.skill} justifyContent={'center'}>
            {loadedSVGs[i] && <Image src={loadedSVGs[i].default} alt="img" />}
            <Text color={'white'}>{s.skill}</Text>
          </VStack>
        ))}
      </Carousel>
    </Screen>
  );
};

export default Skills;

// import { Screen } from './Screen';
// import bgImg5 from '../assets/bgImg5.jpeg';
// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { Image } from '@chakra-ui/react';

// const skills = [
//   { skill: 'JavaScript', svg: () => require('../assets/meter1.svg') },
//   { skill: 'Python', svg: () => require('../assets/meter2.svg') },
//   { skill: 'React', svg: () => require('../assets/meter3.svg') },
// ];

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 3,
//     slidesToSlide: 1,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 3,
//     slidesToSlide: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 3,
//     slidesToSlide: 1,
//   },
// };

// const Skills = () => {
//   return (
//     <Screen
//       background={`url(${bgImg5})`}
//       backgroundRepeat={'no-repeat'}
//       backgroundSize={'cover'}
//     >
//       <h2 className="h2" id="skills">
//         Skills
//       </h2>
//       <Carousel
//         responsive={responsive}
//         infinite={true}
//         className="custom-carousel owl-carousel owl-theme skill-slider"
//         style={{ backgroundColor: 'black' }}
//       >
//         {skills.map((skill, index) => (
//           <div
//             key={skill.skill}
//             className="custom-slide"
//             style={{ backgroundColor: 'black' }}
//           >
//             <Image src={skill.svg().default} alt="img" />
//             <h3 style={{ color: 'red' }}>{skill.skill}</h3>
//           </div>
//         ))}
//       </Carousel>
//     </Screen>
//   );
// };

// export default Skills;
