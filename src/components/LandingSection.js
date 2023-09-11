import { Screen } from './Screen';
import { Avatar, HStack, Heading, Image, VStack } from '@chakra-ui/react';
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
        <Heading fontSize={'80px'}>Portfolio</Heading>
        {/* <img src={me} alt="me" /> */}
        {/* <Avatar src={me} size={'2xl'} background={'rgba(0, 0, 0, 0.3)'} /> */}
      </VStack>
    </Screen>
  );
};

export default LandingSection;
