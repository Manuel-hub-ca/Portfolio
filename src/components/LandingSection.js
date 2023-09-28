import { Screen } from './Screen';
import { HStack, Heading, Image, VStack } from '@chakra-ui/react';
// import me from '../assets/me.jpg';
import bgImg from '../assets/bgImg.png';
import Header from './Header';
import logo from '../logo.svg';
const LandingSection = () => {
  return (
    <Screen
      background={`url(${bgImg})`}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
      id="home"
    >
      <Header />
      <HStack alignSelf={'flex-start'} marginTop={'80px'}>
        <Image src={logo} alt="logo" width={'200px'} height={'200px'} />
      </HStack>
      <VStack width={'100%'}>
        <Heading fontSize={['60px', '70px', '80px', '80px']}>Portfolio</Heading>
      </VStack>
    </Screen>
  );
};

export default LandingSection;
