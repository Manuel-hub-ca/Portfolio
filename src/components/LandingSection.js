import { Screen } from './Screen';
import { Image, VStack } from '@chakra-ui/react';
import Header from './Header';
import me from "../assets/me.jpg"
import TypewriterEffect from './TypewriterEffect';
const LandingSection = () => {
  return (
    <Screen
      id="home"
    >
      <Header />
      <VStack width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'} >
        <Image src={me} alt='me' width={200} height={200} className='me'/>
        <TypewriterEffect
          text={
            'Hello, I am Manuel. Welcome to my portfolio Web Site. '
          }
        />
      </VStack>
    </Screen>
  );
};

export default LandingSection;
