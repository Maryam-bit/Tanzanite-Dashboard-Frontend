import React, { useState } from 'react';
import '../src/assets/scss/main.scss';
import AppRouter from "./router/index";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [textSize, setTextSize] = useState('small')
  const [mode, setMode] = useState('dark')
  const [theme, setTheme] = useState(1)
  var modeClass = mode === 'dark' ? 'dark-mode' : 'app-container'
  return (
    <div className={`${modeClass} text-${textSize} theme-color${theme}`}>
      <div className="App">
        <ChakraProvider>
          <AppRouter />
        </ChakraProvider>
      </div>
    </div>
  );
}

export default App;
