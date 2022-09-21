import '../src/assets/scss/main.scss';
import AppRouter from "./router/index";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
    </div>
  );
}

export default App;
