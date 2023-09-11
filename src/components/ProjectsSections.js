import { Screen } from './Screen';
import bgImg3 from '../assets/bgImg3.jpeg';
import { Box } from '@chakra-ui/react';
import Card from './Card';

const projects = [
  {
    title: 'MirrorFashion',
    description:
      'Developed an elegant GUI for a clothing store application using pure HTML and CSS.',
    getImageSrc: () => require('../assets/onlineClothesStore.jpg'),
    link: 'https://github.com/Manuel-hub-ca/MirrorFashion',
  },
  {
    title: 'Mybrary ',
    description:
      'Engineered a Full Stack MVC Library Book Management Web Application that leveraged HTML, CSS, JavaScript, and the EJS templating engine. Accomplished seamless deployment of the application via Railway, ensuring accessibility and user availability.',
    getImageSrc: () => require('../assets/book.jpg'),
    link: 'https://github.com/Manuel-hub-ca/Mybrary',
  },
  {
    title: 'Task-Management',
    description:
      'Developed a robust Nestjs API project witha primary focus on user authentication and login using JWT. The API leverages TypeScript and smoothy manages CRUD operations for tasks , establishing a clear user-task relationship.',
    getImageSrc: () => require('../assets/apiTask.jpg'),
    link: 'https://github.com/Manuel-hub-ca/nestjs-task-management',
  },
  {
    title: 'JWT Authentication',
    description:
      'Crafted a purpose-oriented authentication API in Visual Studio Code using the Nestjs framework and the TypeScript programming language. Employed the modern ORM tool Prisma to enhance data management. Implemented robust JWT-based authentication for heightened security. The project showcases my adeptness in building modern, secure APIs for seamless user interaction.',
    getImageSrc: () => require('../assets/authImg.jpg'),
    link: 'https://github.com/Manuel-hub-ca/nestjs-jwt',
  },
  {
    title: 'Book Management',
    description:
      'Developed an API application for a Book Management System, harnessing the power of pure Golang programming language. Smoothly integrated data base opertaions using Postgres, enhancing data management and retrieval efficiency.',
    getImageSrc: () => require('../assets/book2.jpg'),
    link: 'https://github.com/Manuel-hub- ca/SimpleProGoCRUDRESTAPInoframework',
  },
  {
    title: 'Portfolio',
    description:
      'React frontend porfolio using modern libraries such as chakra',
    getImageSrc: () => require('../assets/porfolio.jpg'),
    link: 'https://github.com/Manuel-hub-ca/Portfolio.git',
  },
];
const ProjectsSection = () => {
  return (
    <Screen
      background={`url(${bgImg3})`}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
      alignItems="center"
      spacing={8}
    >
      <h2 id="projects" className="h2">
        Projects{' '}
      </h2>

      <Box
        display={'grid'}
        gridTemplateColumns={'repeat(2, minmax(0, 1fr))'}
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
