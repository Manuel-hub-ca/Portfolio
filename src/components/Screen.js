import { VStack } from '@chakra-ui/react';

export const Screen = ({ children, ...boxProps }) => {
  return (
    <VStack
      // backgroundColor={boxProps.backgroundColor}
      // color={isDarkBackground ? 'white' : 'black'}
      {...boxProps}
    >
      <VStack
        minWidth={['100vw', '100vw', '100vw', '100vw']}
        minHeight={['100vh', '100vh', '100vh', '100vh']}
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};
