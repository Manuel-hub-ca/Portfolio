import './App.css';
// import Header from './components/Header';
import { ChakraProvider } from '@chakra-ui/react';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSections';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import { AlertProvider } from './context/alertContext';
import Alert from './components/Alert';
import Footer from './components/Footer';
import { MousePositionProvider } from './context/ColorPointerContext';
import Cursor from './components/Cursor';
function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <MousePositionProvider>
          <Cursor />
          <LandingSection />
          <ProjectsSection />
          <Skills />
          <ContactMe />
          <Footer />
          <Alert />
        </MousePositionProvider>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
