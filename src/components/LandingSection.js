import { Screen } from './Screen';
import { HStack, Image, VStack } from '@chakra-ui/react';
// import me from '../assets/me.jpg';
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
      <HStack alignSelf={'flex-start'} marginTop={'80px'}>
        <Image 
        src={logo} 
        alt="logo" 
        width={['150px','180px','200px']} 
        height={['150px','180px','200px']}
        marginTop={'-19'}
         />
      </HStack>
      <VStack width={'100%'}>
        <TypewriterEffect text={'Hello, I am Manuel, a Jr. Full Stack Web Developer. Welcome to my portfolio Web Site '}/>
        {/* <Heading fontSize={['60px', '70px', '80px', '80px']}>Portfolio</Heading> */}
      </VStack>
    </Screen>
  );
};

export default LandingSection;
