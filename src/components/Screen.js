import { VStack } from '@chakra-ui/react';

export const Screen = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      // backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? 'white' : 'black'}
      {...boxProps}
    >
      <VStack maxWidth={'1280px'} minHeight={'100vh'}>
        {children}
      </VStack>
    </VStack>
  );
};
