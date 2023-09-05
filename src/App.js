import './App.css';
import Header from './components/Header';
import { ChakraProvider } from '@chakra-ui/react';
import LandingSection from './components/LandingSection';
function App() {
  return (
    <ChakraProvider>
      <Header />
      <LandingSection />
    </ChakraProvider>
  );
}

export default App;
