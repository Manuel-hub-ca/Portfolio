import { Screen } from './Screen';
import { HStack, Image, VStack } from '@chakra-ui/react';
import Header from './Header';
import logo from '../logo.svg';
import TypewriterEffect from './TypewriterEffect';
const LandingSection = () => {
  return (
    <Screen
      backgroundRepeat={'no-repeat'}
      backgroundSize={['100% 87vh', '100%']}
      backgroundPosition={['top', 'center']}
      id="home"
    >
      <Header />
      <VStack width={'100vh'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
        <TypewriterEffect
          text={
            'Hello, I am Manuel. Welcome to my portfolio Web Site. '
          }
        />
      </VStack>

      {/* <HStack alignSelf={'flex-start'} marginTop={'20px'}>
        <Image
          src={logo}
          alt="logo"
          width={['150px', '180px', '200px']}
          height={['150px', '180px', '200px']}
        />
      </HStack> */}
    </Screen>
  );
};

export default LandingSection;
