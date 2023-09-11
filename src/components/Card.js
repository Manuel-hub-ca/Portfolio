import { VStack, Image, Heading, Text, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Card = ({ title, description, imageSrc, link }) => {
  const mL = '10px';
  return (
    <VStack
      bgColor={'white'}
      borderRadius={'8px'}
      spacing={4}
      alignItems={'start'}
      paddingBottom={'20px'}
    >
      <Image src={imageSrc} borderRadius={'8px'} />
      <Heading
        marginLeft={mL}
        color={'black'}
        textAlign={'left'}
        height={'30px'}
      >
        {title}
      </Heading>
      <Text marginLeft={mL} color={'gray'}>
        {description}
      </Text>
      <HStack marginLeft={mL} alignItems={'center'}>
        <span style={{ color: 'black' }}>GitHub Repo</span>
        <a href={link}>
          <FontAwesomeIcon color="black" icon={faArrowRight} />
        </a>
      </HStack>
    </VStack>
  );
};

export default Card;
