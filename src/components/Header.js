import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
export const socials = [
  {
    icon: faEnvelope,
    url: 'manuel: manueljuliocasanova@gmail.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com/Manuel-hub-ca',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/manuel-julio-casanova-reyes-606585266/',
  },
  {
    icon: faTwitter,
    url: 'https://twitter.com/ManuelJuli1132',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com/users/22500321/manuel-julio-casanova-reyes',
  },
];

const Header = () => {
  const HandleClick = (id) => {
    const e = document.getElementById(id);
    if (e) {
      e.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  // bgGradient={'linear(to-r, green.200, pink.500, black)'}
  return (
    <Box
      width={'100%'}
      height={'50px'}
      position={'fixed'}
      top={'0'}
      backgroundColor={'rgba(0, 0, 0, 0.5)'}
    >
      <HStack
        width={'100%'}
        height={'100%'}
        justifyContent="space-around"
        alignItems={'center'}
        color={'cyan'}
      >
        <nav>
          <HStack spacing={5}>
            {socials.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={s.icon} size="2x" className="socials" />
              </a>
            ))}
          </HStack>
        </nav>

        <nav>
          <HStack spacing={6}>
            <ScrollLink
              href=""
              onClick={() => HandleClick('home')}
              className="scrollLink"
            >
              Home
            </ScrollLink>

            <ScrollLink
              href=""
              onClick={() => HandleClick('projects')}
              className="scrollLink"
            >
              Projects
            </ScrollLink>

            <ScrollLink
              href=""
              onClick={() => HandleClick('skills')}
              className="scrollLink"
            >
              Skills
            </ScrollLink>

            <ScrollLink
              href=""
              onClick={() => HandleClick('contact-me')}
              className="scrollLink"
            >
              Contact Me
            </ScrollLink>

            {/* <a href="#skills" onClick={() => HandleClick('skills')}>Skills</a>

            <a href="#contact-me" onClick={() => HandleClick("contact-me")}>Contact me</a> */}
          </HStack>
        </nav>
      </HStack>
    </Box>
  );
};

export default Header;
