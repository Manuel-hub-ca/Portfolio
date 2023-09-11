import './App.css';
// import Header from './components/Header';
import { ChakraProvider } from '@chakra-ui/react';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSections';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { AlertProvider } from './context/alertContext';
import Alert from './components/Alert';
function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Router>
          <LandingSection />
          <ProjectsSection />
          <Skills />
          <ContactMe />
          <Footer />
          <Alert />
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
        </Router>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
