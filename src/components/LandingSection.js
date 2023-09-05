import { Screen } from './Screen';
import { Avatar, VStack } from '@chakra-ui/react';
import me from '../assets/me.jpg';
import bgImg from '../assets/bgImg.png';
const LandingSection = () => {
  return (
    <Screen background={`url(${bgImg})`}>
      <VStack>
        {/* <img src={me} alt="me" /> */}
        <Avatar src={me} size={'2xl'} />
      </VStack>
    </Screen>
  );
};

export default LandingSection;
