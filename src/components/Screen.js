import { VStack } from '@chakra-ui/react';

export const Screen = ({ children, ...boxProps }) => {
  return (
    <VStack
      // backgroundColor={boxProps.backgroundColor}
      // color={isDarkBackground ? 'white' : 'black'}
      {...boxProps}
    >
      <VStack width={'1280px'} minHeight={'100vh'} {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};
