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

const socials = [
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
  return (
    <Box>
      <HStack justifyContent="space-between">
        <nav>
          <HStack>
            {socials.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={s.icon} size="2x" />
              </a>
            ))}
          </HStack>
        </nav>

        <nav>
          <HStack>
            <a href="">Contact me</a>

            <a href="">Projects</a>
          </HStack>
        </nav>
      </HStack>
    </Box>
  );
};

export default Header;
