import { Screen } from './Screen';
import bgImg3 from '../assets/bgImg3.jpeg';
import { Box, Heading } from '@chakra-ui/react';
import Card from './Card';

const projects = [
  {
    title: 'MirrorFashion',
    description:
      'Designed a sleek e-commerce store UI, utilizing HTML and CSS for optimum functionality and user experience in a fashion-focused environment.',
    getImageSrc: () => require('../assets/onlineClothesStore.jpg'),
    link: 'https://github.com/Manuel-hub-ca/MirrorFashion',
  },
  {
    title: 'Mybrary',
    description:
      'Engineered an MVC Library Web App using HTML, CSS, JavaScript, and EJS, deployed via Railway, ensuring availability and accessibility.',
    getImageSrc: () => require('../assets/book.jpg'),
    link: 'https://github.com/Manuel-hub-ca/Mybrary',
  },
  {
    title: 'API-JWT',
    description:
      'Developed a Nestjs API focusing on user authentication using JWT and TypeScript for secure and responsive user-task relationships.',
    getImageSrc: () => require('../assets/apiTask.jpg'),
    link: 'https://github.com/Manuel-hub-ca/nestjs-task-management',
  },
  {
    title: 'API-JWT-2',
    description:
      'Crafted a secure, user-friendly authentication API using Nestjs, TypeScript, and Prisma, showcasing adeptness in building modern, purpose-oriented APIs.',
    getImageSrc: () => require('../assets/authImg.jpg'),
    link: 'https://github.com/Manuel-hub-ca/nestjs-jwt',
  },
  {
    title: 'Book API',
    description:
      'Developed an advanced Book Management API using Golang and Postgres, optimizing data management and retrieval efficiency.',
    getImageSrc: () => require('../assets/book2.jpg'),
    link: 'https://github.com/Manuel-hub-ca/SimpleProGoCRUDRESTAPInoframework',
  },
  {
    title: 'Portfolio',
    description:
      'Constructed a dynamic portfolio using React and Chakra UI, focusing on responsive design and user interaction.',
    getImageSrc: () => require('../assets/porfolio.jpg'),
    link: 'https://github.com/Manuel-hub-ca/Portfolio.git',
  },
];



const ProjectsSection = () => {
  return (
    <Screen
      alignItems="center"
      spacing={8}
    >
      <Heading as={'h2'} textAlign={'center'} w={'100%'} mt={'20px'} id='projects'>Projects</Heading>

      <Box
        display={'grid'}
        gridTemplateColumns={['repeat(1, minmax(0, 1fr))', 'repeat(2, minmax(0, 1fr))']}
        gridGap={8}
        width={'80%'}
        marginBottom={'80px'}
        // alignSelf={'center'}
      >
        {projects.map((p) => (
          <Card
            key={p.title}
            title={p.title}
            description={p.description}
            imageSrc={p.getImageSrc()}
            link={p.link}
          />
        ))}
      </Box>
    </Screen>
  );
};

export default ProjectsSection;
