import { Screen } from './Screen';
import { HStack, Image, VStack } from '@chakra-ui/react';
import bgImg from '../assets/bgImg.png';
import Header from './Header';
import logo from '../logo.svg';
import TypewriterEffect from './TypewriterEffect';
const LandingSection = () => {
  return (
    <Screen
      background={`url(${bgImg})`}
      backgroundRepeat={'no-repeat'}
      backgroundSize={['100% 87vh', '100%']}
      backgroundPosition={['top', 'center']}
      bgColor={'rgba(0,0,0,1)'}
      id="home"
    >
      <Header />
      <VStack width={'100%'}>
        <TypewriterEffect
          text={
            'Hello, I am Manuel. Welcome to my portfolio.'
          }
        />
      </VStack>

      <HStack alignSelf={'flex-start'} marginTop={'20px'}>
        <Image
          src={logo}
          alt="logo"
          width={['150px', '180px', '200px']}
          height={['150px', '180px', '200px']}
        />
      </HStack>
    </Screen>
  );
};

export default LandingSection;
