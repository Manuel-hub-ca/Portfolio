import { VStack } from '@chakra-ui/react';

export const Screen = ({ children, ...boxProps }) => {
  return (
    <VStack
      {...boxProps}
    >
      <VStack
        borderBottom={'solid'}
        borderWidth={'1px'}
        borderColor={'black'}
        minWidth={['100vw', '100vw', '100vw', '100vw']}
        minHeight={['100vh', '100vh', '100vh', '100vh']}
        bgColor={'#545375'}
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};
