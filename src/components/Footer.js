import { Box, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box width={'100vw'} bgColor={'#545375'}>
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color={'black'}
          justifyContent={'center'}
          alignItems={'center'}
          maxWidth={'1024px'}
          height={16}
        >
          <p>Manuel • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
