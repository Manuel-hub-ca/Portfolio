import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import {
  Box,
  HStack,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
} from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { useBreakpointValue } from '@chakra-ui/react';

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

// ... (previous imports)

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const iconSize = useBreakpointValue({ base: 'xl', md: 'l', lg: 'xl' });

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const HandleClick = (id) => {
    const e = document.getElementById(id);
    if (e) {
      e.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close the drawer after clicking a link
    setDrawerOpen(false);
  };

  return (
    <Box
      width={['100vw', '100vw', '100vw', '100vw']}
      height={'50px'}
      position={'fixed'}
      top={'0'}
      backgroundColor={'rgba(0, 0, 0, 0.5)'}
    >
      <HStack
        width={'100%'}
        height={'100%'}
        justifyContent={['flex-start', 'flex-start','flex-start','space-around']}
        alignItems={'center'}
        color={'cyan'}
        pl={5}
      >

        <HStack spacing={[4, 4, 5, 5]}>
          {socials.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={s.icon}
                size={iconSize}
                fontSize={iconSize}
                className="socials"
              />
            </a>
          ))}
        </HStack>

        {/* Hamburger Icon */}
        <IconButton
          icon={<FontAwesomeIcon icon={faBars} size={iconSize} />}
          aria-label="Open Menu"
          display={['block', 'block', 'block', 'none']}
          onClick={handleDrawerToggle}
          bgColor={'yellow'}
          position={'absolute'}
          right={5}
        />  

        {/* Drawer for small screens */}
        <Drawer
          isOpen={isDrawerOpen}
          onClose={handleDrawerToggle}
          placement="right"
        >
          <DrawerOverlay />
          <DrawerContent fontFamily={'cursive'}>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody bgColor={'cyan.200'}>
              <VStack alignContent={'space-around'} fontSize={'30px'} justifyContent={'space-around'} height={'100%'} spacing={4} textColor={'blackAlpha.800'}>
                <ScrollLink
                  href="#home"
                  onClick={() => HandleClick('home')}
                  className="scrollLink"
                >
                  Home
                </ScrollLink>
                <ScrollLink
                  href="#projects"
                  onClick={() => HandleClick('projects')}
                  className="scrollLink"
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  href="#skills"
                  onClick={() => HandleClick('skills')}
                  className="scrollLink"
                >
                  Skills
                </ScrollLink>
                <ScrollLink
                  href="#contact-me"
                  onClick={() => HandleClick('contact-me')}
                  className="scrollLink"
                >
                  Contact Me
                </ScrollLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Regular navigation links */}
        <nav>
          <HStack
            spacing={6}
            fontSize={iconSize}
            display={['none', 'none', 'none', 'flex']}
          >
            <ScrollLink
              href="#home"
              onClick={() => HandleClick('home')}
              className="scrollLink"
            >
              Home
            </ScrollLink>
            <ScrollLink
              href="#projects"
              onClick={() => HandleClick('projects')}
              className="scrollLink"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              href="#skills"
              onClick={() => HandleClick('skills')}
              className="scrollLink"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              href="#contact-me"
              onClick={() => HandleClick('contact-me')}
              className="scrollLink"
            >
              Contact Me
            </ScrollLink>
          </HStack>
        </nav>
      </HStack>
    </Box>
  );
};

export default Header;
