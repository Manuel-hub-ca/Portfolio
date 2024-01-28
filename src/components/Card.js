import { VStack, Image, Heading, Text, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Card = ({ title, description, imageSrc, link }) => {
  const mL = '10px';
  return (
    <VStack
    bgColor={'rgba(20%, 100%, 20%, . 5)'}
      borderRadius={'8px'}
      spacing={4}
      alignItems={'start'}
      paddingBottom={['5px', '10px', '10px', '20px']}
      className="card"
      border={'solid'}
      borderWidth={'2px'}
    >
      <a href={link}>
        <Image
          src={imageSrc}
          borderTopRadius={'8px'}
          objectFit={'cover'}
          marginBottom={'-12px'}
        />
      </a>
      <VStack marginTop={'1px'} >
        <Heading
          marginTop={'0'}
          marginLeft={mL}
          color={'black'}
          textAlign={'left'}
          height={['10px', '17px', '20px', '20px']}
          fontSize={['12px', '25px', '30px', '30px']}
          marginBottom={['1px', '3px', '4px', '6px']}
        >
          {title}
        </Heading>
        <Text
          marginLeft={mL}
          color={'gray'}
          fontSize={['10px', '11px', '12px', '12px']}
        >
          {description}
        </Text>
      </VStack>
      <HStack
        marginLeft={mL}
        // justifyContent={'start'}
        // alignItems={'center'}
        fontSize={['7px', '13px', '10px']}
        paddingTop={'0'}
        marginTop={'-10px'}
      >
        <span style={{ color: 'black' }}>GitHub Repo</span>
        <a href={link}>
          <FontAwesomeIcon color="black" icon={faArrowRight} />
        </a>
      </HStack>
    </VStack>
  );
};

export default Card;
